import {Sidebar} from "flowbite-react";
import { Link } from 'react-router-dom';
import {HiUser,HiArrowSmRight} from "react-icons/hi";

export default  function DashSidebar({activetab})  {
  return (
    <Sidebar  collapsed={false}>
         <Sidebar.Items>
            <Sidebar.ItemGroup>
                 <Link to="/dashboard?tab=profile">
                     <Sidebar.Item as='div' icon={HiUser} active={activetab === 'profile'} label={'User'} labelColor='dark'>
                        Profile
                     </Sidebar.Item>
                 </Link>
                 <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">Sign out</Sidebar.Item>
            </Sidebar.ItemGroup>
         </Sidebar.Items>
    </Sidebar>
  )
}
