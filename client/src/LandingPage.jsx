import Features from "./components/Features";
import Home from "./components/Home";

export default function LandingPage() {
  return (
    <div>
      {/* <marquee className="scrolling-text text-red-600">
        This website is currently under development.
      </marquee> */}
      <Home />
      <Features />
    </div>
  );
} 
