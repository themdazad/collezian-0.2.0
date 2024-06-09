import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import Collezian from "..//assets/Collezian.svg"
import { NavLink } from "react-router-dom";
import { PiInstagramLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

export function Footer_Component() {
  const currentYear = new Date().getFullYear();
  return (
    <Footer container>
      <div className="w-full text-center ">
        <div className="flex items-center justify-between w-full max-md:flex-col">
          {/* <FooterBrand
            href="https://collezian.vercel.app"
            src={Collezian}
            alt="collezian Logo"
            name="Collezian"
          /> */}
          <span className="flex max-sm:justify-center text-3xl gap-4 my-4">
          <a className="font-semibold" target="_blank" href="https://www.instagram.com/the_mdazad/"><PiInstagramLogo /></a>
          <a className="font-semibold" target="_blank" href="https://x.com/collezian?t=tCwyjsr_4LANcNR5oAkHCg&s=08"><FaXTwitter /></a>
          <a className="font-semibold" target="_blank" href="https://www.youtube.com/@collezian_community"><TfiYoutube  /></a>
          <a className="font-semibold" target="_blank" href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5"><FaWhatsapp  /></a>
        </span>
          <FooterLinkGroup>
            <FooterLink className="hover:text-decoration-none text-[12px" href="#">About</FooterLink>
            <FooterLink className="hover:text-decoration-none text-[12px]" href="#">Copyright Policy</FooterLink>
            <NavLink to="Contact" className="text-[12px] hover:text-sky-600" href="#">Contact</NavLink>
          </FooterLinkGroup>
        </div>        

        <FooterDivider />
        <FooterCopyright href="#" by="Collezian™" year={currentYear} />
        <p className="text-[12px]">Designed and Developed with <span >❤</span> | By <a className=" text-sky-600 font-semibold" target="_blank" href="https://www.instagram.com/the_mdazad/">Azad</a></p>
      </div>
    </Footer>
  );
}
