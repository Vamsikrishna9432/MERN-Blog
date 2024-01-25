import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Signin, Signup, Dashboard, Contact, About, Projects, Header} from "./ImportsAndExports"; 

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
