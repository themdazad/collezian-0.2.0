
import { useState } from "react";
import {
  Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button,
  Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, NavbarMenuToggle, Image
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Collezian from "..//assets/Collezian.svg"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >
        <NavbarBrand >
          <NavLink to="/">
            <Image src={Collezian} className=" w-12 -rotate-[20deg] hover:-rotate-[360deg] transition-transform duration-[2000]" />
          </NavLink>
          <NavLink to="/" className="font-bold max-sm:hidden text-inherit">
            COLLEZIAN</NavLink>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>


      {/*Desktop*/}
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <NavLink activeClassName="text-sky-600" className="hover:text-sky-600" color="foreground" to="Events">Events</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink activeClassName="text-sky-600" className="hover:text-sky-600" color="foreground" to="Materials">
            Materials
          </NavLink>
        </NavbarItem>
        <NavbarItem >
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                variant="light" className="gap-0"
              >
                Careers <FiChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new">Jobs</DropdownItem>
              <DropdownItem key="new">Intenships</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
      <NavbarMenu aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="items-center justify-center gap-4 bg-transparent md:hidden sm:flex ">

        <NavbarItem>
          <NavLink className="text-2xl " color="foreground" to="/">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className="text-2xl  " color="foreground" to="Events">
            Events
          </NavLink>
        </NavbarItem>
        <NavbarItem  >
          <NavLink className="text-2xl " color="foreground" to="Materials">
            Materials
          </NavLink >
        </NavbarItem>
        <NavbarItem >
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                variant="light" className="gap-0 text-2xl"
              >
                Careers <FiChevronDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new">Jobs</DropdownItem>
              <DropdownItem key="new">Intenships</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        

        <NavbarItem className="flex">
          <Link as={NavLink} to="#"><LuUploadCloud className="mr-2 text-3xl" /></Link>
        </NavbarItem>

        <NavbarItem>
          <Button className="p-6 text-2xl rounded-3xl" as={NavLink} color="primary" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>

      </NavbarMenu>


    </Navbar>
  );
}
