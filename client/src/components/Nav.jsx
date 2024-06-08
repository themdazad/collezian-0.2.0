
import { useState } from "react";
import {
  Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button,
  Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, NavbarMenuToggle, Image
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Collezian from "..//assets/Collezian.svg"
import {PiNotebookDuotone, PiLightbulbFilamentDuotone, PiNewspaperDuotone, PiLaptopDuotone, PiBagDuotone, PiCalendarXDuotone  } from "react-icons/pi";

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
      <NavbarContent className="hidden gap-0 sm:flex" justify="center">
        
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
              <DropdownItem key="Events" startContent={<PiCalendarXDuotone />}>Events</DropdownItem>
              <DropdownItem key="Projects" startContent={<PiLightbulbFilamentDuotone />}>Projects</DropdownItem>
              <DropdownItem key="Syllabus" startContent={<PiNewspaperDuotone />}>Syllabus</DropdownItem>
              <DropdownItem key="Materials" startContent={<PiNotebookDuotone/>}>Study Materials</DropdownItem>
              <DropdownItem key="CheckResult" className="text-danger" color="danger">
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
              <DropdownItem key="new" startContent={<PiBagDuotone/>}>Jobs</DropdownItem>
              <DropdownItem key="new" startContent={<PiLaptopDuotone/>}>Intenships</DropdownItem>
              <DropdownItem key="CheckResult" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
        </NavbarItem>
        <NavbarItem>
        <Button as={NavLink}  to="#" variant="light">
            Showcase
          </Button>
        </NavbarItem>
        <NavbarItem>
        <Button as={NavLink}  to="#" variant="light">
            AI Tools
          </Button>
        </NavbarItem>



        <NavbarItem className="flex">
          <Link as={NavLink} to="#" startContent={<LuUploadCloud/>}/>
        </NavbarItem>

        <NavbarItem>
          <Button as={NavLink} color="primary" radius="full" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>

      </NavbarContent>



      {/*Mobile*/}
      <NavbarMenu aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="items-center justify-center gap-4 bg-transparent md:hidden sm:flex ">

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
              <Link as={NavLink} to="/Events"  startContent={<PiCalendarXDuotone />}>Events</Link>
              <Link as={NavLink} key="Projects" startContent={<PiLightbulbFilamentDuotone />}>Projects</Link>
              <Link as={NavLink} key="Syllabus" startContent={<PiNewspaperDuotone />}>Syllabus</Link>
              <Link as={NavLink} key="Materials" startContent={<PiNotebookDuotone/>}>Study Materials</Link>
              <Link as={NavLink} to="/Result" key="CheckResult" className="text-danger" color="danger">
                Check Result
              </Link>
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
              <DropdownItem key="new" startContent={<PiBagDuotone/>}>Jobs</DropdownItem>
              <DropdownItem key="new" startContent={<PiLaptopDuotone/>}>Intenships</DropdownItem>
              <DropdownItem key="CheckResult" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
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
            <DropdownMenu variant="faded" aria-label="Static Actions" >
              <DropdownItem key="Jobs">Jobs</DropdownItem>
              <DropdownItem key="Internship">Intenships</DropdownItem>
              <DropdownItem key="Certificate" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>


        <NavbarItem className="flex">
          <Link as={NavLink} to="#"><LuUploadCloud className="mr-2 text-3xl" /></Link>
        </NavbarItem>

        <NavbarItem>
        <Button as={NavLink} color="primary" radius="full" to="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>

      </NavbarMenu>


    </Navbar>
  );
}
