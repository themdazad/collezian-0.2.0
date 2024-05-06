import { Routes, Route } from "react-router-dom";
import Engineering from "./pages/Engineering";
import LandingPage from "./LandingPage.jsx";
import Layout from "./layout.jsx";
import Result from "./pages/Result.jsx";
import Roadmap from "./pages/Roadmap/Roadmap.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ElectricalEngineering from "./pages/Engineering/EE.jsx";
import MechanicalEngineering from "./pages/Engineering/ME.jsx";
import CivilEngineering from "./pages/Engineering/CE.jsx";
import ComputerScienceEngineering from "./pages/Engineering/CSE.jsx";
import ECE from "./pages/Engineering/ECE.jsx";
import EEE from "./pages/Engineering/EEE.jsx";

export default function Path() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>       
            {/* default page     */}
          <Route path="/" element={<LandingPage />}/>
          {/* Adding pages in outlet portion of Layout */}
          <Route path="result" element={<Result/>} />
          <Route path="engineering" element={<Engineering/>}>
            {/* outlet under engineering page  */}
            <Route path="ee" element={<ElectricalEngineering/>} />
            <Route path="me" element={<MechanicalEngineering/>} />
            <Route path="CE" element={<CivilEngineering/>} />
            <Route path="CSE" element={<ComputerScienceEngineering/>} />
            <Route path="ECE" element={<ECE/>} />
            <Route path="EEE" element={<EEE/>} />
          </Route>
          <Route path="roadmap" element={<Roadmap/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
      </Routes>
   
  );
}
