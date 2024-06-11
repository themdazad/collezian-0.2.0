import Features from "./components/Features";
import Events from "./components/Events";
import Home from "./components/Home";
import Groups from "./components/Groups";

export default function LandingPage() {
  return (
    <div>
      {/* <marquee className="scrolling-text text-red-600">
        This website is currently under development.
      </marquee> */}
      <Home />
      {/* <Events/> */}
      <Features />
     <Groups/>
    </div>
  );
} 
