import {Sidebar} from "flowbite-react";
import { Link } from 'react-router-dom';
import {HiUser,HiArrowSmRight} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

export default  function DashSidebar({activetab})  {

  const dispatch = useDispatch();

  const handleSignout = async() => {
    try{
       const res  = await fetch('/api/user/signout', {
        method : "POST"
       });

       const data = await res.json();
       if (!res.ok) {
          console.log(data.message)
       }else {
           dispatch(signoutSuccess());
       }
    }catch(err){
      console.log(err.message);
    }
}

  return (
    <Sidebar  collapsed={false}>
         <Sidebar.Items>
            <Sidebar.ItemGroup>
                 <Link to="/dashboard/profile">
                     <Sidebar.Item as='div' icon={HiUser} active={activetab === 'profile'} label={'User'} labelColor='dark'>
                        Profile
                     </Sidebar.Item>
                 </Link>
                 <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignout}>Sign out</Sidebar.Item>
            </Sidebar.ItemGroup>
         </Sidebar.Items>
    </Sidebar>
  )
}
