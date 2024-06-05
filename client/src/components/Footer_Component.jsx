import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import Collezian from "..//assets/Collezian.svg"
import { NavLink } from "react-router-dom";

export function Footer_Component() {
  const currentYear = new Date().getFullYear();
  return (
    <Footer container>
      <div className="w-full text-center px-[5%]">
        <div className="flex items-center justify-between w-full max-md:flex-col">
          <FooterBrand
            href="https://collezian.vercel.app"
            src={Collezian}
            alt="collezian Logo"
            name="COLLEZIAN"
          />
          <FooterLinkGroup>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">About</FooterLink>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">Privacy Policy</FooterLink>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">Licensing</FooterLink>
            <NavLink to="Contact" className="hover:text-decoration-none hover:text-sky-600" href="#">Contact</NavLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Collezian" year={currentYear} />
        <p className="text-sm">Designed and Developed with <span className="text-red-600">❤</span> | By <a className=" text-sky-600" target="_blank" href="https://www.instagram.com/the_mdazad/">Collezian Team</a></p>
      </div>
    </Footer>
  );
}
