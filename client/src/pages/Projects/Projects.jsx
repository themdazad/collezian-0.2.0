"use client";

import { Carousel } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { LuUploadCloud } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiDownloadCloud } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import {Button} from "@nextui-org/react";
import { GoSidebarExpand } from "react-icons/go";


function Projects() {
  return (
    <div className="grid md:grid-cols-12 gap-6 max-md:px-[5%] ">
      
      <Sidebar className="relative col-span-3 max-md:hidden  " aria-label="">
      <div className="absolute right-4 "><GoSidebarExpand /></div>
        <h1 className="text-center text-2xl font-bold "> Projects</h1>
        <hr className="my-2" />
      <Sidebar.Items >
        <Sidebar.ItemGroup>
      {/* also will be on loop */}
        <Sidebar.Collapse icon={MdElectricBolt} label="Electrical Engineering ">
            <Sidebar.Item href="#">Project title</Sidebar.Item>
            
        </Sidebar.Collapse>
        

          
        </Sidebar.ItemGroup>
        {/* After horizontal seperator line */}
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={LuUploadCloud}>
            Upload Projects
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
     
      <div className="content lg:col-span-8">
        {/* Project Title Name  */}
        {/* Project Banner: Carousel  */}
        {/* About Project  */}
        {/* Project Goals */}
        {/* Credits  */}


        <h1 className="text-3xl">Student’s Project Tittle</h1>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-6">
      {/* <Carousel leftControl="left" rightControl="right"> */}
      <Carousel leftControl=" " rightControl=" " >
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
        </div>

        <div className="Introduction  my-12 ">
          <h2 className="text-2xl font-bold my-4">Introduction</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur, ipsa fuga officia molestias suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        <div className="Background my-12">
          <h2 className="text-lg font-semibold my-4">Background</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatu dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        <div className="Needs my-12">
          <h2 className="text-lg font-semibold my-4">Needs</h2>
          <p>Lorem ipsum, dolor suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
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
              <CgProfile className="text-[50px]"/>
            </div>

        
          <div className="buttons flex gap-4">
            <Button color="primary" variant="light"><FiDownloadCloud/>Download</Button>
            <Button color="primary" variant="solid"><SlBasket/>Order Now</Button>
          </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects