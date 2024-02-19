import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from './../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';


export const DashCreatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  const handleUploadImage = async() => {
      try {
        if(!file) {
            setImageUploadError('Please select an Image');
            return;
        }
        setImageUploadError(null);
        const storage = getStorage(app);
        const filename = new Date().getTime() + '-' + file.name;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
            setImageUploadProgress(progress.toFixed(0));
          },
          (error) => {
            setImageUploadError('Image upload failed');
            setImageUploadProgress(null);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
               setImageUploadProgress(null);
               setImageUploadError(null);
                setFormData({...formData, image:downloadURL});
            });
          }
        );
      }catch(error) {
        setImageUploadError('Image upload failed');
        setImageUploadProgress(null);
        console.log(error);
      }
  };

  const handleSubmit = async(e) => {
         e.preventDefault();
         try{
             const res = await fetch('/api/post/create',{
                 method : 'POST',
                 headers: {
                   'Content-Type': 'application/json',
                 },
                 body : JSON.stringify(formData),
             });
             const data = await res.json();
             if (!res.ok) {
                setPublishError(data.message);
                return;
             }
             if (res.ok) {
                setPublishError(null);
                navigate(`/post/${data.slug}`);
             }
         }catch(error) {
            setPublishError('Something went wrong');
         }
  }

   
  return (
    <div className="w-full max-w-5xl p-3 mx-auto min-h-screen">
        <h1 className="my-4 text-3xl text-center font-semibold">Create a Post</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
             <div className="flex flex-col gap-4 sm:flex-row justify-between">
                 <TextInput placeholder="Title" id="title" type="text" className="flex-1 w-80" required onChange={(e) => setFormData({...formData, title : e.target.value})}/>
                 <Select onChange={(e) => setFormData({...formData, category : e.target.value})}>
                     <option value='uncategorized'>Select a category</option>
                     <option value='javascript'>Javascript</option>
                     <option value='react'>React js</option>
                     <option value='nextjs'>Next js</option>
                 </Select>
             </div>
             <div className="p-3 gap-4 flex justify-between items-center border-4 border-teal-500 border-dotted">
                <FileInput type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
                <Button gradientDuoTone="purpleToBlue" type="button" size='sm' outline onClick={handleUploadImage} disabled={imageUploadProgress}>
                  {imageUploadProgress ? (
                    <div className="w-16 h-16">
                      <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`}/>
                    </div>
                  ) : ('Upload Image')}
                </Button>
             </div>
             {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
             {formData.image && (<img src={formData.image} alt='upload' className="w-full h-72 object-cover" />)}
             <ReactQuill theme="snow" placeholder="Write Something here....." required className="h-72 mb-12 dark:text-white" onChange={(value) => setFormData({...formData, content : value})}/>
             <div>
             <Button type="submit" gradientDuoTone="purpleToBlue" className="" size='lg'>Publish</Button>
             </div>
             {publishError && (
                <Alert className='mt-5' color='failure'>
                  {publishError}
                </Alert>
              )}
        </form>
    </div>
  )
}
