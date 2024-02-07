import { Button, FileInput, Select, TextInput } from "flowbite-react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const DashCreatePost = () => {
  return (
    <div className="w-full max-w-5xl p-3 mx-auto min-h-screen">
        <h1 className="my-4 text-3xl text-center font-semibold">Create a Post</h1>
        <form className="flex flex-col gap-4">
             <div className="flex flex-col gap-4 sm:flex-row justify-between">
                 <TextInput placeholder="Title" id="title" type="text" className="flex-1 w-80" required/>
                 <Select>
                     <option value='uncategorized'>Select a category</option>
                     <option value='javascript'>Javascript</option>
                     <option value='react'>React js</option>
                     <option value='nextjs'>Next js</option>
                 </Select>
             </div>
             <div className="p-3 gap-4 flex justify-between items-center border-4 border-teal-500 border-dotted">
                <FileInput type="file" accept="image/*"/>
                <Button gradientDuoTone="purpleToBlue" type="button" size='sm' outline>Upload</Button>
             </div>
             <ReactQuill theme="snow" placeholder="Write Something here....." required className="h-72 mb-12"/>
             <div>
             <Button type="submit" gradientDuoTone="purpleToBlue" className="" size='lg'>Publish</Button>
             </div>
        </form>
    </div>
  )
}
