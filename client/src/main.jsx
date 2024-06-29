import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import Nav from "./components/Nav.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Footer_Component } from "./components/Footer_Component.jsx";
import { motion } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NextUIProvider>
      <main className="dark:dark dark:text-foreground dark:bg-background  ">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0 }}
        >
          <Nav />
        </motion.div>
        <Path />
        <Footer_Component />
      </main>
    </NextUIProvider>
  </BrowserRouter>
);
