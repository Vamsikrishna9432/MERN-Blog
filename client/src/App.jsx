import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import FooterCom from "./components/FooterCom";
import PrivateRoute from "./components/PrivateRoute";
import DashProfile from "./components/DashProfile";
import { DashCreatePost } from "./components/DashCreatePost";
import DashPosts from "./components/DashboardPageSubComponents/DashPosts";
import PrivateRouteForAdmin from "./components/PrivateRouteForAdmin";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard/" element={<Dashboard />}>
               <Route path="profile" element={<DashProfile/>}/>
               <Route element={<PrivateRouteForAdmin />}>
                    <Route path="create-post" element={<DashCreatePost />}/>
                    <Route path="posts" element={<DashPosts />} />
               </Route>
            </Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <FooterCom />
    </BrowserRouter>
  )
}

export default App
