import signupImage from "../assets/signup-page-image.png";
import {Alert, Button, Label, Spinner, TextInput} from "flowbite-react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value.trim()});
  };

  const handleSubmit = async(e) => {
      e.preventDefault();
       
      if (!formData.username || !formData.email || !formData.password) {
          return setErrorMessage("All Fields are Required!");
      }

      try{
          setIsLoading(true);
          setErrorMessage(null);
          const response = await fetch('/api/auth/signup', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(formData)
          });

          const data = await response.json();
          if (data.success === false) {
              setErrorMessage(data.message);
          }
          setIsLoading(false);
          if (response.ok) {
             navigate('/signin')
          }

      }catch(err) {
         setErrorMessage(err);
         setIsLoading(false);
      }
  }

  return (
    <div className="min-h-screen mt-12 md:mt-20">
         <div className="flex p-3 flex-col max-w-6xl mx-auto md:flex-row md:items-center gap-5">
            {/* left */}
            <div className="flex-1 flex justify-center">
              <img className="w-64 md:w-auto" src={signupImage} alt="signup page background image" />
            </div>
            {/* right */}
            <div className="flex-1">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label className="font-semibold text-md" value="Your username"/>
                  <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
                </div>
                <div>
                  <Label className="font-semibold text-md" value="Your email"/>
                  <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange}/>
                </div>
                <div>
                  <Label className="font-semibold text-md" value="Your password"/>
                  <TextInput className="placeholder-text-xl" type="password" placeholder="Password" id="password" onChange={handleChange}/>
                </div>
                <Button className="font-bold text-2xl" gradientDuoTone="purpleToPink" type="submit" disabled={isLoading}>
                  {isLoading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className="pl-3">Loading...</span>
                  </>
                  ) : "Sign up"}
                </Button>
              </form>
              <div className="text-xl flex items-center gap-2 mt-5">
                  <span>
                    Have an Account?
                  </span>
                  <Link className="text-blue-500 font-bold" to="/signin">Sign in</Link>
              </div>
              
                 { errorMessage && (<Alert className="mt-5" color='failure'>{errorMessage}</Alert>)}
              
            </div>
         </div>
    </div>
  )
}

export default Signup