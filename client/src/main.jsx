import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import { Navigation } from "./components/Header_Footer/Navigation.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Header_Footer/Footer.jsx";
import { motion } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NextUIProvider>
      <main className="dark:dark dark:text-foreground dark:bg-background bg-[url('/bg_image/blur_bg.png')] bg-cover bg-no-repeat max-w-[1920px] m-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0 }}
        >
          <Navigation />
        </motion.div>
        <Path />
        <Footer/>
      </main>
    </NextUIProvider>
  </BrowserRouter>
);
