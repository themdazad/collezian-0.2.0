import { useState } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Image,
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  PiNotebookDuotone,
  PiLaptopDuotone,
  PiBagDuotone,
} from "react-icons/pi";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <NavLink as={NavLink} to="/">
            <Image
              src='/images/Collezian_Logo.svg' alt="collezian logo" height={100} width={100}
              className=" w-12  hover:-rotate-[360deg] transition-transform duration-[2000]"
            />
          </NavLink>
          {
            (window.location.pathname!=="/") && <NavLink as={NavLink} to="/" className="font-semibold text-lg">COLLEZIAN</NavLink>
          }
         
        </NavbarBrand>

        <NavbarMenuToggle
          className="sm:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </NavbarContent>

      {/*Navigation menu for Desktop*/}
      <NavbarContent className="hidden gap-0 sm:flex" justify="center">
        <NavbarItem>
          <Button
            as={NavLink}
            to="/"
            variant="light"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Home
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NavLink}
            to="/Events"
            variant="light"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Events
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<FiChevronDown />}>
                Engineering
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem
                as={NavLink}
                to="/Engineering"
                key="Engineering"
                startContent={<PiNotebookDuotone />}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Study Engineering
              </DropdownItem>
              <DropdownItem
                as={NavLink}
                to="/Result"
                key="CheckResult"
                className="text-danger"
                color="danger"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Check Result
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<FiChevronDown />}>
                Careers
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new" startContent={<PiBagDuotone />}>
                Jobs
              </DropdownItem>
              <DropdownItem key="new" startContent={<PiLaptopDuotone />}>
                Intenships
              </DropdownItem>
              <DropdownItem
                key="CheckResult"
                className="text-danger"
                color="danger"
              >
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NavLink}
            to="/about"
            variant="light"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            About us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* ****************************** Navigation menu for Mobile *****************************/}
      <NavbarMenu
        className={`items-center space-y-2 justify-center bg-transparent md:hidden sm:flex `}
      >
        <NavbarItem>
          <Button
            className="text-3xl font-bold"
            as={NavLink}
            to="/"
            variant="light"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Home
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-3xl font-bold"
            as={NavLink}
            to="/Events"
            variant="light"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Events
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="text-3xl font-bold"
                variant="light"
                endContent={<FiChevronDown />}
              >
                Engineering
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className="text-2xl"
              variant="faded"
              aria-label="Static Actions"
            >
              <DropdownItem
                as={NavLink}
                to="/Engineering"
                key="Engineering"
                startContent={<PiNotebookDuotone />}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Study Engineering
              </DropdownItem>
              <DropdownItem
                as={NavLink}
                to="/Result"
                key="CheckResult"
                className="text-danger"
                color="danger"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Check Result
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger className="text-3xl font-bold">
              <Button variant="light" endContent={<FiChevronDown />}>
                Careers
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className="text-2xl"
              variant="faded"
              aria-label="Static Actions"
            >
              <DropdownItem
                key="Jobs"
                startContent={<PiBagDuotone />}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Jobs
              </DropdownItem>
              <DropdownItem
                key="Internships"
                startContent={<PiLaptopDuotone />}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Intenships
              </DropdownItem>
              <DropdownItem
                key="CheckResult"
                className="text-danger"
                color="danger"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-3xl font-bold"
            as={NavLink}
            to="/about"
            variant="light"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            About us
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
