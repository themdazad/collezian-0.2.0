import { Routes, Route } from "react-router-dom";
import Engineering from "./pages/Engineering";
import LandingPage from "./LandingPage.jsx";
import Layout from "./layout.jsx";
import Result from "./pages/Result.jsx";
import Roadmap from "./pages/Roadmap/Roadmap.jsx";
import Projects from "./pages/Projects/Projects.jsx";

export default function Path() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>       
            {/* default page     */}
          <Route path="/" element={<LandingPage />}/>
          {/* Adding pages in outlet portion */}
          <Route path="result" element={<Result/>} />
          <Route path="engineering" element={<Engineering/>} />
          <Route path="roadmap" element={<Roadmap/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
      </Routes>
   
  );
}
