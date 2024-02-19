import author1 from "../../assets/vamsi-author.jpeg";
import author2 from "../../assets/author-1.svg";
import author3 from "../../assets/author-2.svg";
import { Button } from "flowbite-react";

const authorsList = [
    {
       id : 1,
       name : 'Vamsi Krishna',
       image : author1
    },
    {
        id : 2,
        name : 'John Smith',
        image : author2
    },
    {
        id : 3,
        name : 'Joe John',
        image : author3
    }
]

const AuthorsProfiles = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-6">Authors Spotlight</h2>
        <div className="flex flex-col gap-5">
            {authorsList.map((author) => (
                <div key={author.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={author.image} className="w-32 h-32 rounded-full mr-4"/>
                        <div>
                            <h1 className="font-bold text-xl">{author.name}</h1>
                            <p>Experienced full-stack developer and technology enthusiast</p>
                            <Button gradientDuoTone="purpleToBlue" outline className="mt-3 sm:hidden">View Profile</Button>
                        </div>
                    </div>
                    <div className="button-container hidden sm:block">
                        <Button gradientDuoTone="purpleToBlue" outline>View Profile</Button>
                    </div>
                </div>
            ))}
        </div>
      </div>
  )
}

export default AuthorsProfiles