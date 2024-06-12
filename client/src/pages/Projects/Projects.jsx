"use client";

import { Carousel } from "flowbite-react";
import { CgProfile } from "react-icons/cg";
import { FiDownloadCloud } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import {Button} from "@nextui-org/react";


function Projects() {
  return (
    <div className="grid md:grid-cols-12 gap-6 lg:px-[15%] pt-12">
   
     
      <div className="content lg:col-span-8">
        {/* Project Title Name  */}
        {/* Project Banner: Carousel  */}
        {/* About Project  */}
        {/* Project Goals */}
        {/* Credits  */}


        <h1 className="text-3xl">Student’s Project Tittle</h1>

        <div className="h-56 my-6 sm:h-64 xl:h-80 2xl:h-96">
      {/* <Carousel leftControl="left" rightControl="right"> */}
      <Carousel leftControl=" " rightControl=" " >
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
        </div>

        <div className="my-12 Introduction ">
          <h2 className="my-4 text-2xl font-bold">Introduction</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur, ipsa fuga officia molestias suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        <div className="my-12 Background">
          <h2 className="my-4 text-lg font-semibold">Background</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatu dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        <div className="my-12 Needs">
          <h2 className="my-4 text-lg font-semibold">Needs</h2>
          <p>Lorem ipsum, dolor suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>

        <div className="my-12 Future">
          <h2 className="my-4 text-lg font-semibold">Future Goals</h2>
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

        
          <div className="flex gap-4 buttons">
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