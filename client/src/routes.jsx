import { Routes, Route } from "react-router-dom";
import Result from "./pages/Result.jsx";
import Roadmap from "./pages/Roadmap/Roadmap.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Materials from "./pages/Materials/Materials.jsx";
import Events from "./components/Events.jsx";
import Contact from "./pages/ContactUS/Contact.jsx";
import { Signup } from "./pages/Signup/Signup.jsx";
// Bihar 
import { BEU_Syllabus } from "./pages/Materials/Bihar/BEU_Patna/Syllabus.jsx";
import { BEU_Notes } from "./pages/Materials/Bihar/BEU_Patna/Notes.jsx";
import { BEU_PYQS } from "./pages/Materials/Bihar/BEU_Patna/PYQS.jsx";
import { SBTE_Syllabus } from "./pages/Materials/Bihar/SBTE/Syllabus.jsx";
import { SBTE_Notes } from "./pages/Materials/Bihar/SBTE/Notes.jsx";
import { SBTE_PYQS } from "./pages/Materials/Bihar/SBTE/PYQS.jsx";
import Layout from "./layout.jsx";


export default function Path() {
  return (

    <Routes>
      <Route path="" element={<Layout />} />
      <Route path="/Signup" element={<Signup/>} />


      {/* Adding pages in outlet portion of Layout */}
      <Route path="/Events" element={<Events />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/Materials" element={<Materials />}/>
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Bihar  */}
        <Route path="/Materials/BEU_Syllabus" element={<BEU_Syllabus />} />
        <Route path="/Materials/BEU_Notes" element={<BEU_Notes />} />
        <Route path="/Materials/BEU_PYQs" element={<BEU_PYQS />} />
        <Route path="/Materials/SBTE_Syllabus" element={<SBTE_Syllabus />} />
        <Route path="/Materials/Bihar/SBTE/Notes" element={<SBTE_Notes />} />
        <Route path="/Materials/Bihar/SBTE/PYQs" element={<SBTE_PYQS />} />

      </Routes>

  );
}
