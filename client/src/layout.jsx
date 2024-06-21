import { Image, Button, Link } from "@nextui-org/react";
import { GoPeople } from "react-icons/go";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Events from "./components/Events";
import { motion } from "framer-motion";

const image1 =
  "https://img.freepik.com/free-photo/front-view-stacked-books-earth-globe-open-book-pencils-education-day_23-2149241018.jpg?w=740&t=st=1717795530~exp=1717796130~hmac=bd7486b8ade9fcbdf05d3f9ed1335b1c496fd200f752021ff295a9936dcb2479";
const image2 =
  "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-anthropomorphic-robot_23-2151008358.jpg?t=st=1717847879~exp=1717851479~hmac=b76d32c9ea1517dad635132090b857df3b1b9af79069f2d3f158bc7f10ca23e3&w=740";
const image3 =
  "https://img.freepik.com/premium-photo/unrecognizable-man-takes-photo-with-his-phone-music-concert_78636-1005.jpg?w=740";

const Layout = () => {
  return (
    <>
      <Header />
      <Groups />
      <Features_Card />
      <Events />
    </>
  );
};
export default Layout;

export function Header() {
  return (
    <>
      <div className="px-[5%]  w-full h-[90vh] grid grid-cols-1 lg:grid-cols-2 justify-center content-center ">
        <div className=" max-sm:text-center">
          <h3 className="font-bold text-[12vw] lg:text-8xl tracking-tighter leading-[12vw] lg:leading-[6vw]">
            one <br />
            destination
          </h3>
          <p className="text-gray-500 ">
            for all things related to engineering for free
          </p>

          <Image
            className="flex py-6 object-contain md:hidden"
            src="/images/collezian_ai.png"
          />
          <Button
            className="items-center p-6 my-6 text-sm  text-black shadow-md hover:shadow-xl border-1 dark:text-white max-w-min"
            color="primary"
            variant="flat"
            startContent={<GoPeople />}
            size='sm'
            radius="full"
          >
            <Link
              className="text-black dark:text-white"
              href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5"
              target="_blank"
            >
              Join Community
            </Link>
          </Button>
        </div>

        <Image
          className="hidden object-cover lg:flex"
          src="/images/collezian_ai.png"
        />
      </div>
    </>
  );
}

export function Features_Card() {
  return (
    <section className="my-16">
      <center className="my-8">
        <h1 className="text-2xl ">Categories</h1>
        <p className="text-sm text-gray-500 mb-4 px-[10%] ">
          useful categories for your engineering journey
        </p>
      </center>

      <div className=" flex scrollbar-hide overflow-scroll card  gap-8 px-[5%] content-stretch ">
        <motion.div
          whileHover={{ scale: 0.9 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          key={1}
          className=" min-w-[320px] gap-12 m-auto shadow-md  transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2"
        >
          <Image
            className=" object-cover aspect-[16/9]  ease-in duration-350 delay-0  z-0 w-full h-full "
            src={image1}
            radius="none"
            alt="collezian-study-materials-image"
          />

          <div className="grid justify-center justif p-[5%] ">
            <h1>Study Materials</h1>
            <p className="text-sm text-gray-500">
              Free engineering study materials, including PYQs, Syllabus and
              notes.
            </p>
            <Link
              as={NavLink}
              to="Materials"
              className="mt-2 text-sm font-semibold cursor-pointer"
              color="primary"
              variant="flat"
            >
              Explore Materials
              <MdOutlineArrowRight />{" "}
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 0.9 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          key={2}
          className=" min-w-[300px] content-start h-full gap-12 m-auto shadow-md  transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2"
        >
          <Image
            className="object-cover  aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full "
            src={image2}
            radius="none"
            alt="collezian-golu-ai-image"
          />

          <div className="grid justify-center p-[5%]">
            <h1>GOLU AI</h1>
            <p className="text-sm text-gray-500">
              Effortless learning, endless possibilities. Meet GOLU ai: Your
              personal study buddy.
            </p>
            <Link
              as={NavLink}
              to="/Events"
              className="mt-2 text-sm font-semibold cursor-pointer"
              color="primary"
              variant="flat"
            >
              Say Hello!
              <MdOutlineArrowRight />{" "}
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          key={3}
          className=" min-w-[300px] content-start h-full gap-12 m-auto shadow-md  transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2"
        >
          <Image
            className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full "
            src={image3}
            radius="none"
            alt=""
          />

          <div className="grid justify-center p-[5%]">
            <h1>Contests & Events</h1>
            <p className="text-sm text-gray-500">
              Provides a comprehensive list of upcoming coding contests and tech
              events.
            </p>
            <Link
              as={NavLink}
              to="/Events"
              className="mt-2 text-sm font-semibold cursor-pointer"
              color="primary"
              variant="flat"
            >
              {" "}
              View Events
              <MdOutlineArrowRight />{" "}
            </Link>
          </div>
        </motion.div>
      </div>

      <center>
        <span className="text-4xl">. . .</span>
      </center>
    </section>
  );
}

export const Groups = () => {
  return (
    <>
      <section className="mb-16">
        {/* <header className="flex flex-col items-center text-lg">
          <Image src="/gif/people.gif" height={50} width={50} />
          Recommended Groups
        </header> */}

        <center className="my-8">
          <h1 className="text-2xl ">Groups</h1>
          <p className="text-sm text-gray-500 mb-4 px-[10%] ">
            Join interesting groups to stay updated
          </p>
        </center>

        <div className="snap-mandatory snap-x scrollbar-hide overflow-scroll groups flex justify-center my-6 gap-8 ">
          <Link
            className="snap-center min-w-[50px]"
            href="https://t.me/collezian_bcece_le"
          >
            <Image
              src="/Groups_Image/collezian_dsa.jpg"
              height={80}
              width={80}
            />
          </Link>

          <Link
            className="snap-center min-w-[50px]"
            href="https://t.me/collezian_bcece_le"
          >
            <Image
              src="/Groups_Image/bcece_le_quiz.png"
              height={80}
              width={80}
            />
          </Link>

          <Link
            className="snap-center min-w-[50px]"
            href="https://t.me/collezian_bcece_le"
          >
            <Image
              src="/Groups_Image/off_campus_placements.jpg"
              height={80}
              width={80}
            />
          </Link>

          <Link
            className="snap-center min-w-[50px]"
            href="https://t.me/collezian_bcece_le"
          >
            <Image
              src="/Groups_Image/off_campus_placements.jpg"
              height={80}
              width={80}
            />
          </Link>
        </div>
      </section>
    </>
  );
};
