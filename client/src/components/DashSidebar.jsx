import {useState, useEffect} from "react";
import {Sidebar} from "flowbite-react";
import { Link } from 'react-router-dom';
import {HiUser,HiArrowSmRight,HiChartPie,HiOutlinePencilAlt,HiUserGroup,HiShoppingCart,HiTrendingUp} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";


export default  function DashSidebar({activetab})  {
  
         const {currentUser} = useSelector((state) => state.user);
         const [isSidebarcollapse, setIsSidebarcollapse] = useState(false);
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

         const closeSidebarOnSmallScreen = () => {
            if (window.innerWidth <= 768) { 
            setIsSidebarcollapse(true);
            }else if (window.innerWidth > 768) {
               setIsSidebarcollapse(false);
            } 
         };

         useEffect(() => {
            closeSidebarOnSmallScreen();
            window.addEventListener('resize', closeSidebarOnSmallScreen);
            return () => {
            window.removeEventListener('resize', closeSidebarOnSmallScreen);
            };
         })

  return (
    <Sidebar  collapsed={isSidebarcollapse} className="z-50">
         <Sidebar.Items>
            <Sidebar.ItemGroup>
                 <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
                 <Link to="/dashboard/profile">
                     <Sidebar.Item as='div' icon={HiUser} active={activetab === 'profile'} label={'User'} labelColor='dark'>
                        Profile
                     </Sidebar.Item>
                 </Link>
                 <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignout}>Sign out</Sidebar.Item>
                 {currentUser.isAdmin && (
                  <Sidebar.ItemGroup>
                      <Sidebar.Collapse icon={HiOutlinePencilAlt} label="Posts">
                        <Link to="/dashboard/create-post">
                           <Sidebar.Item as='div'>Create</Sidebar.Item>
                        </Link>
                           <Sidebar.Item href="#">Update</Sidebar.Item>
                           <Sidebar.Item href="#">Delete</Sidebar.Item>
                           <Sidebar.Item href="#">Manage</Sidebar.Item>
                      </Sidebar.Collapse>
                      <Sidebar.Collapse icon={HiUserGroup} label="Users">
                           <Sidebar.Item href="#">Add New</Sidebar.Item>
                           <Sidebar.Item href="#">Manage</Sidebar.Item>
                           <Sidebar.Item href="#">Delete</Sidebar.Item>
                      </Sidebar.Collapse>
                      <Sidebar.Item icon={HiShoppingCart}>Ecommerce</Sidebar.Item>
                      <Sidebar.Item icon={HiTrendingUp}>Analytics</Sidebar.Item>
                 </Sidebar.ItemGroup>
                )}
            </Sidebar.ItemGroup>
         </Sidebar.Items>
    </Sidebar>
  )
}
