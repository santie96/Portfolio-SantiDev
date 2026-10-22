import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import HomePage from "./pages/HomePage.jsx"
import SkillsPage from "./pages/SkillsPage.jsx"
import ProjectPage from "./pages/ProjectPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import ProjectDetails from "./layout/ProjectDetails.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chi-sono" element={<AboutPage />} />
        <Route path="progetti" element={<ProjectPage />} />
        <Route path="progetto/:slug" element={<ProjectDetails />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contatti" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
export default App;