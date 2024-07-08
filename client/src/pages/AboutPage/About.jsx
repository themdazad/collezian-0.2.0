import { User, Link, Image } from "@nextui-org/react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Divider } from "@nextui-org/react";
export const About = () => {
  return (
    <>
      <header className=" px-[5%] max-md:mt-12  grid lg:grid-cols-2">
        <div className="content self-center  space-y-4">
          <p className="text-justify text-gray-500">
            We&apos;re here to make your engineering journey smoother and more
            exciting. Our platform is packed with study materials like syllabi,
            question papers, and more, all tailored to help you ace your exams
            and projects. But that&apos;s not all. Collezian is your go-to spot
            for staying updated on college events and activities. We also
            provide a unique space for students to showcase their brilliant
            ideas and projects. Connect, collaborate, and get inspired by your
            peers.
          </p>
          <Divider />
          <div className="icons flex items-center space-x-4 text-xl">
            <p>Follow us on</p>
            <span>|</span>
            <a href="http://" target="_blank">
              <FaInstagram />
            </a>
            <a href="http://" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="http://" target="_blank">
              <FaTwitter />
            </a>
          </div>
          <div className="user">
            <User
              name="Azad | Developer"
              description={
                <Link
                  href="http://instagram.com/the_mdazad"
                  size="sm"
                  isExternal
                >
                  @the_mdazad
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/81636077?v=4",
              }}
            />
          </div>
        </div>

        <Image className="lg:-mt-12 " src="/images/pattern.png" alt="pattern" />
      </header>
    </>
  );
};
