
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages 
import LandingPage from './LandingPage.jsx';
import Result from './pages/Result.jsx';
import Engineering from './pages/Engineering/Engineering.jsx'
import Roadmap from './pages/Roadmap/Roadmap.jsx'
import Projects from './pages/Projects/Projects.jsx'
import { Content } from "./pages/Engineering/Content.jsx";


export default function App() {
 return (
  <BrowserRouter>
  <Routes>
      <Route index element={<LandingPage />} />          
      <Route path="/result" element={<Result />} />          
      <Route path="/engineering" element={<Engineering />}>          
          <Route path="ee" element={<Content/>}/>
          <Route path="me" element={<Content/>}/>
          <Route path="ce" element={<Content/>}/>
          <Route path="cse" element={<Content/>}/>
          <Route path="ece" element={<Content/>}/>
      </Route>          
      <Route path="/roadmap" element={<Roadmap />} />          
      <Route path="/projects" element={<Projects />} />          
  </Routes>
</BrowserRouter>    
  );
}
