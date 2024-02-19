import { Button, Label, TextInput } from "flowbite-react"


const NewsletterSignup = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-8 flex justify-center items-center">
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Newsletter Signup</h1>
            <div>
                <Label htmlFor="email" className="mb-6 text-md font-semibold">Email</Label>
                <TextInput id="email" placeholder="Enter Your Email" className="w-80"/>
            </div>
            <Button gradientDuoTone="purpleToBlue">Subscribe</Button>
        </div>
    </div>
  )
}

export default NewsletterSignup