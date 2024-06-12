
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import {
  Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button,
  Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, NavbarMenuToggle, Image
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Collezian from "..//assets/Collezian.svg"
import { PiNotebookDuotone, PiLightbulbFilamentDuotone, PiNewspaperDuotone, PiLaptopDuotone, PiBagDuotone, PiCalendarXDuotone } from "react-icons/pi";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (

    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >
        <NavbarBrand >
          <NavLink as={NavLink} to="/">
            <Image src={Collezian} className=" w-12 -rotate-[20deg] hover:-rotate-[360deg] transition-transform duration-[2000]" />
          </NavLink>
          <NavLink as={NavLink} to="/" className="font-bold text-inherit">
            COLLEZIAN</NavLink>
        </NavbarBrand>
       
        <NavbarMenuToggle
          ajabel={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>


      {/*Desktop*/}
      <NavbarContent className="hidden gap-0 sm:flex" justify="center">
      <NavbarItem>
          <Button as={NavLink} to="#" variant="light">
            Blogs
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                endContent={<FiChevronDown />}
              >
                College
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem as={NavLink} to="/Events" key="Events" startContent={<PiCalendarXDuotone />}>Events</DropdownItem>
              <DropdownItem as={NavLink} to="/Projects" key="Projects" startContent={<PiLightbulbFilamentDuotone />}>Projects</DropdownItem>
              <DropdownItem as={NavLink} to="/Materials/BEU_Syllabus" key="Syllabus" startContent={<PiNewspaperDuotone />}>BEU Syllabus</DropdownItem>
              <DropdownItem as={NavLink} to="/Materials/SBTE_Syllabus" key="Syllabus" startContent={<PiNewspaperDuotone />}>SBTE Syllabus</DropdownItem>
              <DropdownItem as={NavLink} to="/Materials" key="Materials" startContent={<PiNotebookDuotone />}>Study Materials</DropdownItem>
              <DropdownItem as={NavLink} to="/Result" key="CheckResult" className="text-danger" color="danger">
                Check Result
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem >
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light" endContent={<FiChevronDown />}
              >
                Careers
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new" startContent={<PiBagDuotone />}>Jobs</DropdownItem>
              <DropdownItem key="new" startContent={<PiLaptopDuotone />}>Intenships</DropdownItem>
              <DropdownItem key="CheckResult" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </NavbarItem>
        <NavbarItem>
          <Button as={NavLink} to="#" variant="light">
            Showcase
          </Button>
        </NavbarItem>
        

        

        <NavbarItem>
          <Button as={NavLink} color="primary" radius="full" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>



      {/*Mobile*/}
      <NavbarMenu aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="items-center justify-center bg-transparent md:hidden sm:flex " onClick={()=>{setIsMenuOpen(false);}}>
      <NavbarItem>
          <Button className="text-3xl font-bold" as={NavLink} to="#" variant="light">
            Blogs
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="text-3xl font-bold"
                variant="light"
                endContent={<FiChevronDown />}
              >
                College
              </Button>
            </DropdownTrigger>
            <DropdownMenu className="text-2xl" variant="faded" aria-label="Static Actions" >
              <DropdownItem as={NavLink} to="/Events" key="Events" startContent={<PiCalendarXDuotone />}>Events</DropdownItem>
              <DropdownItem as={NavLink} to="/Projects" key="Projects" startContent={<PiLightbulbFilamentDuotone />}>Projects</DropdownItem>
              <DropdownItem as={NavLink} to="/Materials/BEU_Syllabus" key="Syllabus" startContent={<PiNewspaperDuotone />}>BEU Syllabus</DropdownItem>
              <DropdownItem as={NavLink} to="/Materials/SBTE_Syllabus" key="Syllabus" startContent={<PiNewspaperDuotone />}>SBTE Syllabus</DropdownItem>
              <DropdownItem as={NavLink} to="/Materials" key="Materials" startContent={<PiNotebookDuotone />}>Study Materials</DropdownItem>
              <DropdownItem as={NavLink} to="/Result" key="CheckResult" className="text-danger" color="danger">
                Check Result
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem >
          <Dropdown >
            <DropdownTrigger className="text-3xl font-bold">
              <Button
                variant="light" endContent={<FiChevronDown />}
              >
                Careers
              </Button>
            </DropdownTrigger>
            <DropdownMenu className="text-2xl" variant="faded" aria-label="Static Actions">
              <DropdownItem key="Jobs" startContent={<PiBagDuotone />}>Jobs</DropdownItem>
              <DropdownItem key="Internships" startContent={<PiLaptopDuotone />}>Intenships</DropdownItem>
              <DropdownItem key="CheckResult" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </NavbarItem>
        <NavbarItem>
          <Button className="text-3xl font-bold" as={NavLink} to="#" variant="light">
            Showcase
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button className="text-xl font-bold" as={NavLink} color="primary" radius="full" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarMenu>
      <ThemeSwitch/>

    </Navbar>
  );
}
