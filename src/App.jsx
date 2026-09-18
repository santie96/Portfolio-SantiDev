import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"
import Skills from "./pages/Skills.jsx"
import Experiences from "./pages/Experiences.jsx"
import Project from "./pages/Project.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import ProjectDetails from "./layout/ProjectDetails.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chi-sono" element={<About />} />
        <Route path="progetti" element={<Project />} />
        <Route path="progetto/:slug" element={<ProjectDetails />} />
        <Route path="skills" element={<Skills />} />
        <Route path="esperienze" element={<Experiences />} />
        <Route path="contatti" element={<Contact />} />
      </Route>
    </Routes>
  );
}
export default App;