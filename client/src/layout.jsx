import { Image, Button, Link } from "@nextui-org/react"
import { GoPeople } from "react-icons/go";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Events from "./components/Events"

const image1 = "https://img.freepik.com/free-photo/front-view-stacked-books-earth-globe-open-book-pencils-education-day_23-2149241018.jpg?w=740&t=st=1717795530~exp=1717796130~hmac=bd7486b8ade9fcbdf05d3f9ed1335b1c496fd200f752021ff295a9936dcb2479";
const image2 = "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-anthropomorphic-robot_23-2151008358.jpg?t=st=1717847879~exp=1717851479~hmac=b76d32c9ea1517dad635132090b857df3b1b9af79069f2d3f158bc7f10ca23e3&w=740";
const image3 = "https://img.freepik.com/premium-photo/unrecognizable-man-takes-photo-with-his-phone-music-concert_78636-1005.jpg?w=740";

const Layout = () => {
  return (
    <>
      <Header />
      <Features_Card />
      <Events/>
    </>
  )
}; export default Layout;


export function Header() {
  return (
    <>
      <div className="px-[5%] py-[100px] w-full grid grid-cols-1 lg:grid-cols-2 justify-center content-center "  >
        <div className=" max-sm:text-center ">
          <h3 className="mt-4 text-6xl md:text-8xl  font-bold">one <br/>destination</h3>
          <p>for all things related to engineering for free</p>

          <Button className="items-center my-6 p-6 text-sm font-semibold  max-w-min shadow-md rounded-3xl" color="none" variant="outlined" startContent={<GoPeople />} 
          style={{
            background: 'rgba(255, 255, 255, 0.6)', // Adjust color and opacity as needed
            backdropFilter: 'blur(5px)' // Adjust blur radius as needed
          }}>
            <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link>
          </Button>
        </div>
          <div>
          <Image className="object-fit light:hidden lg:flex" src="/images/collezian_cloud.png"/>
          </div>

         
          </div>
    </>
  )
}


export function Features_Card() {
  return (
    <>
      {/* <p className="text-center text-lg md:text-3xl font-bold ">Here you can find!</p> */}

        <div className="snap-mandatory snap-x flex scrollbar-hide overflow-scroll card  gap-8 py-2 px-[5%] content-stretch ">
          <div key={1} className="snap-center min-w-[300px] gap-12 m-auto shadow-md lg:hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2">

            <Image className=" object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full "  src={image1} radius="none" alt="" />

            <div className="grid justify-center justif p-[5%] ">
              <h1 className=" font-semibold  ">Study Materials</h1>
              <p className="text-gray-500 text-sm">
                Free engineering study materials, including PYQs, Syllabus and notes.
              </p>
              <Link as={NavLink} to="Materials" className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat">Explore Materials<MdOutlineArrowRight /> </Link>
            </div>
          </div>

          <div  key={2} className="snap-center min-w-[300px] content-start h-full gap-12 m-auto shadow-md lg:hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2">

            <Image className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full " src={image2}  radius="none" alt="" />

            <div className="grid justify-center p-[5%]">
              <h1 className=" font-semibold ">GOLU AI</h1>
              <p className="text-gray-500 text-sm">
              Effortless learning, endless possibilities. Meet GOLU ai: Your personal study buddy. 
              </p>
              <Link as={NavLink} to="/Events" className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat">Say Hello!<MdOutlineArrowRight /> </Link>
            </div>
          </div>
          <div  key={3} className="snap-center min-w-[300px] content-start h-full gap-12 m-auto shadow-md lg:hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2">

            <Image className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full " src={image3}  radius="none" alt="" />

            <div className="grid justify-center p-[5%]">
              <h1 className=" font-semibold ">Contests & Events</h1>
              <p className="text-gray-500 text-sm">
              Provides a comprehensive list of upcoming coding contests and tech events. 
              </p>
              <Link as={NavLink} to="/Events" className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat"> View Events<MdOutlineArrowRight /> </Link>
            </div>
          </div>  
          

        </div>

        <center>
          <Image className=" " src="/gif/dotted-line.png" width={60} />
        </center>
      
    </>
  );
}