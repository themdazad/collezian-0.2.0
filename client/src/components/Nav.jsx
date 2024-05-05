
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,Button} from "@nextui-org/react";
// icons 
import {NavLink} from "react-router-dom";

import { LuUploadCloud } from "react-icons/lu";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <NavLink to="/" className="font-bold text-inherit">COLLEZIAN</NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      
      <NavbarItem>
          <NavLink color="foreground" href="result">Result</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" href="engineering">
            Engineering
          </NavLink>
        </NavbarItem>
        <NavbarItem >
          <NavLink color="foreground" href="roadmap" aria-current="page">
            Roadmap
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" href="projects">
            Projects
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" href="career">Career</NavLink>
        </NavbarItem>
        
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <NavLink href="#"><LuUploadCloud className="mr-2 text-xl"/> Upload </NavLink>
        </NavbarItem>
        
        <NavbarItem>
          <Button as={NavLink} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      
    </Navbar>
  );
}
