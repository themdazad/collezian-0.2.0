import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import Collezian from "..//assets/Collezian.svg"

export function Footer_Component() {
  const currentYear = new Date().getFullYear();
  return (
    <Footer container>
      <div className="w-full text-center mx-[5%]">
        <div className="w-full flex justify-between max-md:flex-col items-center">
          <FooterBrand
            href="https://collezian.vercel.app"
            src={Collezian}
            alt="collezian Logo"
            name="COLLEZIAN™"
          />
          <FooterLinkGroup>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">About</FooterLink>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">Privacy Policy</FooterLink>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">Licensing</FooterLink>
            <FooterLink className="hover:text-decoration-none hover:text-sky-600" href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Collezian" year={currentYear} />
        <p className="text-sm">Designed and Developed with <span className="text-red-600">❤</span> by <a className=" text-sky-600" target="_blank" href="https://www.instagram.com/the_mdazad/">Azad</a></p>
      </div>
    </Footer>
  );
}
