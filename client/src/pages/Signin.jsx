import signupImage from "../assets/signup-page-image.png";
import {Alert, Button, Label, Spinner, TextInput} from "flowbite-react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signInStart,signInFailure,signInSuccess} from "../redux/user/userSlice";


const Signin = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error: errorMessage} = useSelector((state) => state.user);

  const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value.trim()});
  };

  const handleSubmit = async(e) => {
      e.preventDefault();
       
      if (!formData.email || !formData.password || formData.email === "" || formData.password === "") {
          return dispatch(signInFailure("All Fields are Required!"));
      }

      try{
          dispatch(signInStart())
          const response = await fetch('/api/auth/signin', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(formData)
          });

          const data = await response.json();
          if (data.success === false) {
              dispatch(signInFailure(data.message));
          }
          
          if (response.ok) {
            dispatch(signInSuccess(data));
             navigate('/');
          }

      }catch(err) {
        dispatch(signInFailure(err.message));
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
                  <Label className="font-semibold text-md" value="Your email"/>
                  <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange}/>
                </div>
                <div>
                  <Label className="font-semibold text-md" value="Your password"/>
                  <TextInput className="placeholder-text-xl" type="password" placeholder="**********" id="password" onChange={handleChange}/>
                </div>
                <Button className="font-bold text-2xl" gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                  {loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className="pl-3">Loading...</span>
                  </>
                  ) : "Sign in"}
                </Button>
              </form>
              <div className="text-xl flex items-center gap-2 mt-5">
                  <span>
                    Don't Have an Account?
                  </span>
                  <Link className="text-blue-500 font-bold" to="/signup">Sign up</Link>
              </div>
              
                 { errorMessage && (<Alert className="mt-5" color='failure'>{errorMessage}</Alert>)}
              
            </div>
         </div>
    </div>
  )
}

export default Signin;