
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, NavbarMenuToggle, Link, Button } from "@nextui-org/react";


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
          <Link href="/" className="font-bold text-inherit">COLLEZIAN</Link>
        </NavbarBrand>
      </NavbarContent>


      {/*Desktop*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="result">Result</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="engineering">
            Engineering
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="roadmap" aria-current="page">
            Roadmap
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="career">Career</Link>
        </NavbarItem>


      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link href="#"><LuUploadCloud className="mr-2 text-xl" /> Upload </Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>



      {/*Mobile*/}
      {/*NavbarMenu will show only when menu is pressed*/}
      <NavbarMenu className="md:hidden sm:flex gap-4 bg-transparent items-center justify-center ">
        <NavbarItem  >
          <Link className="text-gray-300" href="result">Result</Link>
        </NavbarItem>
        <NavbarItem  >
          <Link className="text-gray-300" href="engineering">
            Engineering
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-gray-300" href="roadmap" aria-current="page">
            Roadmap
          </Link>
        </NavbarItem>
        <NavbarItem  >
          <Link className="text-gray-300" href="projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem  >
          <Link className="text-gray-300" href="career">Career</Link>
        </NavbarItem>

      </NavbarMenu>


    </Navbar>
  );
}
