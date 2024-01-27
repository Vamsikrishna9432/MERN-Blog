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


function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <FooterCom />
    </BrowserRouter>
  )
}

export default App
