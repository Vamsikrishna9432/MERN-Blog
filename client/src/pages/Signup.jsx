import signupImage from "../assets/signup-page-image.png";
import {Button, Label, TextInput} from "flowbite-react";
import {Link} from "react-router-dom";


const Signup = () => {
  return (
    <div className="min-h-screen mt-12 md:mt-20">
         <div className="flex p-3 flex-col max-w-6xl mx-auto md:flex-row md:items-center gap-5">
            {/* left */}
            <div className="flex-1 flex justify-center">
              <img className="w-64 md:w-auto" src={signupImage} alt="signup page background image" />
            </div>
            {/* right */}
            <div className="flex-1">
              <form className="flex flex-col gap-4">
                <div>
                  <Label className="font-semibold text-md" value="Your username"/>
                  <TextInput type="text" placeholder="Username" id="username"/>
                </div>
                <div>
                  <Label className="font-semibold text-md" value="Your email"/>
                  <TextInput type="text" placeholder="name@company.com" id="email"/>
                </div>
                <div>
                  <Label className="font-semibold text-md" value="Your password"/>
                  <TextInput className="placeholder-text-xl" type="text" placeholder="Password" id="password"/>
                </div>
                <Button className="font-bold text-2xl" gradientDuoTone="purpleToPink" type="submit">Sign up</Button>
              </form>
              <div className="text-xl flex items-center gap-2 mt-5">
              <span>
                Have an Account?
              </span>
              <Link className="text-blue-500 font-bold" to="/login">Sign in</Link>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Signup