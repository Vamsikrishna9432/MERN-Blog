import { useSelector } from 'react-redux';
import { TextInput,Button } from 'flowbite-react';

export default function DashProfile() {

  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className="max-w-lg mx-auto w-full p-3">
        <h1 className="my-7 font-semibold text-3xl text-center">Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 rounded-full overflow-hidden cursor-pointer shadow-md self-center'>
               <img src={currentUser.profilePicture} alt="user" className='rounded-full w-full h-full object-cover border border-8 border-[lightgray]'/>
            </div>
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
