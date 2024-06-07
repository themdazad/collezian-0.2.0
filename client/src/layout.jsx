import { Image, Button, Link } from "@nextui-org/react"
import { GoPeople } from "react-icons/go";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const image1 = "https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164378.jpg?t=st=1715367635~exp=1715371235~hmac=e902115f9106b161051057a3beeeac44e2cc42efcb27a186e21b1e2a47664b30&w=740";
const image2 = "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164365.jpg?t=st=1715367255~exp=1715370855~hmac=6616b045dc59ed9880ec92f36067d364b27266aef0dbddfd46f5fba17ac27f44&w=740";
const image3 = "https://img.freepik.com/premium-photo/floral-selfcare-human-brain-tree-generative-ai_94628-12606.jpg?w=740";

const Layout = () => {
  return (
    <>
      <Header />
      <Features_Card />

    </>
  )
}; export default Layout;


export function Header() {
  return (
    <>
      <div className=" w-full h-[450px] bg-[url('/images/smoke.png')] bg-contain  bg-no-repeat grid justify-center content-center " 
      style={{
           backdropFilter: 'blur(8px)' // Adjust blur radius as needed
      }}
      >
        <div className="text-center">
          <h2 className="mt-4 text-xl font-bold">COLLEZIAN</h2>
          <h2 className="mt-4 text-5xl md:text-6xl uppercase font-black text-gray-900">one-stop destination</h2>
          <h2 className="mt-4 text-xl font-bold ">for all things related to engineering</h2>

          <Button className="items-center my-6 p-6 text-sm font-semibold text-gray-800 max-w-min shadow-md rounded-3xl" color="none" variant="flat" startContent={<GoPeople />} 
          style={{
            background: 'rgba(255, 255, 255, 0.6)', // Adjust color and opacity as needed
            backdropFilter: 'blur(5px)' // Adjust blur radius as needed
          }}>
            <Link className="text-gray-800" href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export function Features_Card() {
  return (
    <>
      <p className="py-2 text-center text-xl font-bold ">Here you can find!</p>

        <div className="snap-mandatory snap-x flex scrollbar-hide overflow-scroll card  gap-8 px-[5%] content-stretch ">
          <div key={1} className="snap-center min-w-[350px] gap-12 m-auto shadow-md hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2">

            <Image className=" object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full "  src={image1} radius="none" alt="" />

            <div className="grid justify-center justif p-[5%] bg-gray-100">
              <h1 className=" font-semibold uppercase ">Study Materials</h1>
              <p className="text-gray-700 text-sm">
                Access all state engineering study materials, including PYQs, Syllabus and notes.
              </p>
              <Link as={NavLink} to="Materials" className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat">Explore Materials<MdOutlineArrowRight /> </Link>
            </div>
          </div>

          <div key={2} className="snap-center min-w-[350px] content-start h-full gap-12 m-auto shadow-md hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2">

            <Image className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full " src={image2}  radius="none" alt="" />

            <div className="grid justify-center p-[5%] bg-gray-100">
              <h1 className=" font-semibold uppercase">Contests & Events</h1>
              <p className="text-gray-700 text-sm">
              Provides a comprehensive list of upcoming coding contests and tech events. 
              </p>
              <Link className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat"> View Events<MdOutlineArrowRight /> </Link>
            </div>
          </div>

          <div key={3} className="snap-center min-w-[350px] content-start h-full gap-12 m-auto shadow-md hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2">

            <Image className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full" src={image3} radius="none" alt="" />


            <div className="grid justify-center p-[5%] bg-gray-100">
              <h1 className=" font-semibold uppercase ">Exam Results</h1>
              <p className="text-gray-700 text-sm">
                Stay updated with the latest exam results and academic achievements.
              </p>
              <Link className="mt-2 text-sm cursor-pointer font-semibold" color="primary" variant="flat">Check Results<MdOutlineArrowRight /> </Link>
            </div>
          </div>

          

        </div>

        <center>
          <Image className=" " src="/gif/dotted-line.png" width={60} />
        </center>
      
    </>
  );
}