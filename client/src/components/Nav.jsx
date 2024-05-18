
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, Link, NavbarMenuToggle, Button, Image } from "@nextui-org/react";
import { LuUploadCloud } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Collezian from "..//assets/Collezian.svg"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <Navbar className="py-2" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Image src={Collezian} className=" w-12 -rotate-[20deg] hover:-rotate-[360deg] transition-transform duration-[2000]" />
          <NavLink to="/" className=" max-sm:hidden font-bold text-inherit ">
            COLLEZIAN</NavLink>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>


      {/*Desktop*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink activeClassName="text-sky-600" className="hover:text-sky-600" color="foreground" to="Events">Events</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink activeClassName="text-sky-600" className="hover:text-sky-600" color="foreground" to="Materials">
            Materials
          </NavLink>
        </NavbarItem>
        <NavbarItem >
          <NavLink activeClassName="text-sky-600" className="hover:text-sky-600" color="foreground" to="roadmap" aria-current="page">
            Roadmap
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink activeClassName="text-sky-600" className="hover:text-sky-600" color="foreground" to="projects">
            Projects
          </NavLink>
        </NavbarItem>


        <NavbarItem className="flex">
          <Link as={NavLink} to="#"><LuUploadCloud className="mr-2 text-xl" /></Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={NavLink} color="primary" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>

      </NavbarContent>

      {/*Mobile*/}
      {/*NavbarMenu will show only when menu is pressed*/}
      <NavbarMenu className="-mt-10 md:hidden sm:flex gap-4 bg-transparent items-center  justify-center ">
        <NavbarItem>
          <NavLink className="text-gray-400 text-2xl"  to="Events">
            Events
          </NavLink>
        </NavbarItem>
        <NavbarItem  >
          <NavLink className="text-gray-400 text-2xl" to="Materials">
            Materials
          </NavLink >
        </NavbarItem>
        <NavbarItem >
          <NavLink className="text-gray-400 text-2xl" to="roadmap" aria-current="page">
            Roadmap
          </NavLink>
        </NavbarItem>
        <NavbarItem  >
          <NavLink className="text-gray-400 text-2xl" to="projects">
            Projects
          </NavLink>
        </NavbarItem>
        <NavbarItem  >
          <NavLink className="text-gray-400 text-2xl" to="career">Career</NavLink>
        </NavbarItem>

        <NavbarItem className="flex">
          <Link as={NavLink} to="#"><LuUploadCloud className="mr-2 text-xl" /></Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={NavLink} color="primary" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>

      </NavbarMenu>


    </Navbar>
  );
}
