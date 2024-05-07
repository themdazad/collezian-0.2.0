
import { Carousel } from "flowbite-react";
import { LuUploadCloud } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Roadmap() {
  return (
    <div className=" grid md:grid-cols-12 gap-6 max-md:px-[5%]">

      <div className=" col-span-3 max-md:hidden max-h-min " aria-label="">
        <div className="sideBar-items sticky top-0 bg-sky-600/15 p-6 max-sm:-translate-x-[95%] hover:translate-x-0 transition-transform duration-500 ease-in-out ">
          <h1 className="text-center text-2xl font-bold"> Roadmaps</h1>
          <hr className="my-2" />
          <div className="sidebar-list flex flex-col  my-4">
              <ol className="grid gap-4">
                <li>1.Android Development</li>
                <li>2.Software Engineer</li>
                <li>3.Engineering</li>
                </ol>
           
          </div>
        </div>
      </div>

      <div className="content  lg:col-span-8">
        {/* Project Title Name  */}
        {/* Project Banner: Carousel  */}

        {/* Credits  */}
        <h1 className="text-3xl ">Roadmap Tittle</h1>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-6">
          {/* <Carousel leftControl="left" rightControl="right"> */}
          <Carousel indicators={false} leftControl=" " rightControl=" " >
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>

        <div className="Introduction  my-12 ">
          <h2 className="text-2xl font-bold my-4">Introduction</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur, ipsa fuga officia molestias suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        <div className="Future my-12">
          <h2 className="text-lg font-semibold my-4">Future Goals</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur, ipsa fuga officia molestias suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        {/* Creadit  */}
        <div className="Credit">
          <hr />
          <h2 className="my-4">Credits</h2>
          <div className="min-h-[50px] py-4 w-full flex justify-between ">
            <div className="user">
              <CgProfile className="text-[50px]" />
            </div>


            <div className="buttons flex gap-4">
              <Button color="primary" variant="light"><FiDownloadCloud />Download</Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Roadmap