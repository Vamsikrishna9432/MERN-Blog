import { useSelector } from 'react-redux';
import { TextInput,Button, Alert} from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import { app } from './../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {

  const {currentUser} = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileURL, setImageFileURL] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();
  console.log(imageFileUploadProgress,imageFileUploadError,imageFileURL);
  const handleImageChange = (e) => {
       const file = e.target.files[0] ;
       if (file) {
          setImageFile(file);
          setImageFileURL(URL.createObjectURL(file));
       }
  }

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = () => {
      // we need to set firebase rules 
      // service firebase.storage {
      //   match /b/{bucket}/o {
      //     match /{allPaths=**} {
      //       allow read;
      //       allow write: if request.resource.size < 2 * 1024 * 1024 &&
      //                          request.resource.contentType.matches('image/.*');
      //     }
      //   }
      // }
      setImageFileUploadError(null);
      const storage = getStorage(app);
      const filename = new Date().getTime() + imageFile.name;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
          setImageFileUploadProgress(progress.toFixed(0));
        },
        (error) => {
            setImageFileUploadError('Could not upload image (File must be less than 2MB)');
            setImageFileUploadProgress(null);
            setImageFile(null);
            setImageFileURL(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadedUrl) => {
               setImageFileURL(downloadedUrl);
          })
        } 
      )
  }

  return (
    <div className="max-w-lg mx-auto w-full p-3">
        <h1 className="my-7 font-semibold text-3xl text-center">Profile</h1>
        <form className='flex flex-col gap-4'>
          <input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
            <div className='relative w-32 h-32 rounded-full overflow-hidden cursor-pointer shadow-md self-center' onClick={() => filePickerRef.current.click()}>
              {imageFileUploadProgress && 
                <CircularProgressbar 
                  value={imageFileUploadProgress || 0} 
                  text={`${imageFileUploadProgress}%`}
                  strokeWidth={5}
                  styles={{
                    root : {
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top : 0,
                      left : 0
                    },
                    path : {
                      stroke : `rgba(62, 152, 199, ${imageFileUploadProgress/100})`
                    }
                  }}
                />
                }
               <img src={imageFileURL || currentUser.profilePicture} alt="user" className={`rounded-full w-full h-full object-cover border border-8 border-[lightgray] ${imageFileUploadProgress && imageFileUploadProgress < 100 && 'opacity-60'}`}/>
            </div>
            {imageFileUploadError && <Alert color='failure'>{imageFileUploadError}</Alert>}
            <TextInput 
               type="text"
               placeholder="Username"
               id="username"
               defaultValue={currentUser.username}
            />
            <TextInput 
               type="email"
               placeholder="Email"
               id="email"
               defaultValue={currentUser.email}
            />
            <TextInput 
               type="password"
               placeholder="***********"
               id="password"
            />
            <Button type='submit' gradientDuoTone="purpleToBlue" outline>Update</Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
          <span className='cursor-pointer'>Delete Account</span>
          <span className='cursor-pointer'>Sign Out</span>
        </div>
    </div>
  )
}
