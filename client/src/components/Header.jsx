import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon, FaSun} from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import {toggleTheme} from '../redux/theme/themeSlice';

const Header = () => {

  const path = useLocation().pathname;
  const {currentUser} = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();


  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white">
           <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-indigo-500 rounded-md text-white">MERN</span>
           Blog
        </Link>
        <form className="hidden lg:inline" id="SearchBox" name="SerchBox">
            <TextInput placeholder="Search..." type="text" rightIcon={AiOutlineSearch} className="lg:w-80"/>
        </form>
        <Button className="w-12 h-10 lg:hidden" color='gray' pill>
          <AiOutlineSearch className="text-xl"/>
        </Button>
        <div className="flex items-center gap-2 md:order-2">
        <Button className="w-12 h-10" color='gray' pill onClick={() => dispatch(toggleTheme())}> 
          {theme === 'light' ? <FaMoon className="text-md"/>: <FaSun className="text-md"/>} 
        </Button>
        {currentUser? (
             <Dropdown 
                arrowIcon={false} 
                inline 
                label={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}
             >
              <Dropdown.Header>
                <span className="block text-sm truncate">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">{currentUser.email}</span>
              </Dropdown.Header>
              <Link to="/dashboard">
                  <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
             </Dropdown>
        ) : 
        (
           <Link to="/signin">
           <Button gradientDuoTone="purpleToBlue" className="font-bold text-lg" outline>Sign in</Button>
          </Link>
        )}
        
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as='div' className="font-semibold text-md">
                <Link to="/">
                  Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as='div' className="font-semibold text-md">
                <Link to="/about">
                  About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/projects"} as='div' className="font-semibold text-md">
                <Link to="/projects">
                  Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header