import { User, Link, Image } from "@nextui-org/react";
// icons
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const About = () => {
  return (
    <>
      <header className=" place-items-center  max-sm:text-justify px-[5%] space-y-4 justify-center grid lg:grid-cols-2">
        <div className="content">
          <h1 className="text-3xl text-sky-600 font-bold">
            About
          </h1>
          <p>
            We&apos;re here to make your engineering journey smoother and more
            exciting. Our platform is packed with study materials like syllabi,
            question papers, and more, all tailored to help you ace your exams
            and projects. But that&apos;s not all. Collezian is your go-to spot
            for staying updated on college events and activities. We also
            provide a unique space for students to showcase their brilliant
            ideas and projects. Connect, collaborate, and get inspired by your
            peers.
          </p>
        </div>
        <div className="max-md:hidden image object-contain bg-[url('/images/svgs/pattern.svg')] bg-contain bg-center ">
        <Image src="/images/svgs/pattern.svg" alt="pattern" />
        </div>
    
      </header>
      <div className=" px-[5%] space-y-12 py-16 grid place-content-center">
        {/* profile section  */}
        <div className="our_team  text-center flex max-sm:flex-col gap-6 justify-center ">

          <User
            className="hidden min-w-fit"
            name="Md Azad"
            description={
              <div className="text-left">
                <p>UI/UX Designer | Developer</p>
                <Link
                  className="m-1 "
                  target="_blank"
                  href="https://instagram.com/the_mdazad"
                  size="md"
                  isExternal
                >
                  <BsInstagram />
                </Link>
                <Link
                  className="m-1 "
                  target="_blank"
                  href="https://www.linkedin.com/in/modest-azad/"
                  size="md"
                  isExternal
                >
                  <BsLinkedin />
                </Link>
                <Link
                  className="m-1 "
                  target="_blank"
                  href="https://github.com/modest-azad"
                  size="md"
                  isExternal
                >
                  <BsGithub />
                </Link>
              </div>
            }
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/81636077?v=4",
              size: "lg",
            }}
          />
          <User
            className=" min-w-fit"
            name="Anshu Kumar"
            description={
              <div className="text-left">
                <p>HR | Researcher</p>
                <Link
                  className="m-1 "
                  target="_blank"
                  href="https://instagram.com/"
                  size="md"
                  isExternal
                >
                  <BsInstagram />
                </Link>
                <Link
                  className="m-1 "
                  target="_blank"
                  href="https://linkedin.com/"
                  size="md"
                  isExternal
                >
                  <BsLinkedin />
                </Link>
                <Link
                  className="m-1 "
                  target="_blank"
                  href="https://twitter.com/"
                  size="md"
                  isExternal
                >
                  <BsTwitter />
                </Link>
              </div>
            }
            avatarProps={{
              src: "",
              size: "lg",
            }}
          />
          <User
            className=" min-w-fit"
            name="Uttam Chandra"
            description={
              <div className="text-left">
                <p>Role Unknown</p>
              </div>
            }
            avatarProps={{
              src: "",
              size: "lg",
            }}
          />
        </div>
      </div>
    </>
  );
};
