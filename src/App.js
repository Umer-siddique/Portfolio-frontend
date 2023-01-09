// pages and components
import Home from "./pages/Home/Home";
import Create from "./pages/create/Create";
import About from './pages/About/About'
import ProjectsDetails from "./pages/projectDetails/ProjectsDetails";
import Contact from "./pages/contact/Contact";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {

  const role="user"

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={role==="admin" ? <Create />:<Navigate to="/"/>} />
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects/:id" element={<ProjectsDetails/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
