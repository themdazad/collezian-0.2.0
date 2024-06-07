import { Routes, Route } from "react-router-dom";
import Engineering from "./pages/Engineering";
import Layout from "./layout.jsx";
import Result from "./pages/Result.jsx";
import Roadmap from "./pages/Roadmap/Roadmap.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ElectricalEngineering from "./pages/Engineering/EE.jsx";
import MechanicalEngineering from "./pages/Engineering/ME.jsx";
import CivilEngineering from "./pages/Engineering/CE.jsx";
import ComputerScienceEngineering from "./pages/Engineering/CSE.jsx";
import ECEngineering from "./pages/Engineering/ECE.jsx";
import ElectricalElectronicsEngineering from "./pages/Engineering/EEE.jsx";
import  Materials  from "./pages/Materials/Materials.jsx";
import Events from "./components/Events";
import Contact from "./pages/ContactUS/Contact.jsx";
// Bihar 
import { BEU_Syllabus } from "./pages/Materials/Bihar/BEU_Patna/Syllabus.jsx";
import { BEU_Notes } from "./pages/Materials/Bihar/BEU_Patna/Notes.jsx";
import { BEU_PYQS } from "./pages/Materials/Bihar/BEU_Patna/PYQS.jsx";
import { SBTE_Syllabus } from "./pages/Materials/Bihar/SBTE/Syllabus.jsx";
import { SBTE_Notes } from "./pages/Materials/Bihar/SBTE/Notes.jsx";
import { SBTE_PYQS } from "./pages/Materials/Bihar/SBTE/PYQS.jsx";

export default function Path() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}/>       
          
          {/* Adding pages in outlet portion of Layout */}
          <Route path="result" element={<Result/>} />
          <Route path="Events" element={<Events/>} />
          <Route path="Materials" element={<Materials/>}/>
          {/* Bihar  */}
          <Route path="/Materials/Bihar/BEU_Patna/Syllabus" element={<BEU_Syllabus/>}/>
          <Route path="/Materials/Bihar/BEU_Patna/Notes" element={<BEU_Notes/>}/>
          <Route path="/Materials/Bihar/BEU_Patna/PYQs" element={<BEU_PYQS/>}/>
          <Route path="/Materials/Bihar/SBTE/Syllabus" element={<SBTE_Syllabus/>}/>
          <Route path="/Materials/Bihar/SBTE/Notes" element={<SBTE_Notes/>}/>
          <Route path="/Materials/Bihar/SBTE/PYQs" element={<SBTE_PYQS/>}/>


          

          <Route path="engineering" element={<Engineering/>}>
            {/* outlet under engineering page  */}
            <Route path="" element={<ElectricalEngineering />}/>
            <Route path="EE" element={<ElectricalEngineering/>} />
            <Route path="ME" element={<MechanicalEngineering/>} />
            <Route path="CE" element={<CivilEngineering/>} />
            <Route path="CSE" element={<ComputerScienceEngineering/>} />
            <Route path="ECE" element={<ECEngineering/>} />
            <Route path="EEE" element={<ElectricalElectronicsEngineering/>} />
          </Route>
          <Route path="roadmap" element={<Roadmap/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="Contact" element={<Contact/>} />
       
      </Routes>
   
  );
}
