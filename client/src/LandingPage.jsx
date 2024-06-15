import Features from "./components/Features";
import Home from "./components/Home";
import Groups from "./components/Groups";

export default function LandingPage() {
  return (
    <>
      <marquee className="text-red-600 scrolling-text">
        This website is currently under development.
      </marquee>
      <Home />
      <Features />
     <Groups/>
    </>
  );
} 
