import { Link,Image } from "@nextui-org/react";
import { Carousel } from "flowbite-react";
import { MdOutlineArrowRight } from "react-icons/md";
import { motion } from "framer-motion"


const event_data = [
    {
        image: "/events/techkshitizThumbnail.jpg",
        tittle: "TechKshitiz '24",
        description: "First ever technical event organizing by Government Engineering College, Siwan",
        last_date: "Last Date - 30 June 2024",
        registration_link: "https://techkshitiz.in/government-engineering-college-siwan/total/events/list",
    },

    // {image:"/events/techkshitizThumbnail.jpg",
    //     tittle:"",
    //     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ducimus.",
    //     last_date:"Not Announced",
    //     registration_link:"",
    // },


];

const Syllabus = () => {
    return (
        <>
            <div className="my-16 px-[5%]">
            <center className="my-8">
                    <h1 className="text-2xl ">College Events</h1>
                    <p className="text-sm text-gray-500 mb-4 px-[10%] ">Best way to expand network and enhanced skills</p>
                </center>

                <div className="m-auto overflow-hidden  shadow-xl rounded-3xl relative aspect-[16/9] md:aspect-[2.73/1]">
                    <Carousel leftControl="" rightControl="">

                        <img alt="banner_image" className="object-cover w-full h-full in" src="/events/TechKshitizBanner.jpg" />
                        <img alt="banner_image" className="object-cover w-full h-full in" src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                    </Carousel>
                </div>

                <h1 className="m-4 mt-6 text-lg font-semibold ">Events Schedule</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        event_data.map((event, i) => (
                            <motion.div
                            whileHover={{ scale: 0.9 }}
                            onHoverStart={e => {}}
                            onHoverEnd={e => {}} key={i} className="z-0 relative shadow-md hover:shadow-lg transition-shadow duration-350  min-w-[250px] h-full  gap-8 m-auto  bg-white/5  rounded-3xl">
                            
                                <div className="flex flex-col w-full m-auto p-[5%]">
                                    <h1>{event.tittle.length === 0 ? "Coming Soon" : event.tittle} </h1>
                                    <p className="text-sm text-gray-500">{event.description.length === 0 ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ducimus." : event.description}</p>
                                    <h3 className="my-1 text-sm text-danger">{event.tittle.length === 0 ? "---" : event.last_date} </h3>
                                    <Link href={event.registration_link} target="_blank" className="text-sm font-semibold cursor-pointer " color="primary" variant="flat"
                                    >
                                        {event.tittle.length === 0 ? "Add Your College Event" : "Register Now"} <MdOutlineArrowRight />
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    }



                </div>
            </div>
        </>
    );
}

export default Syllabus
