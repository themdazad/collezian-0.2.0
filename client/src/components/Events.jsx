import { Link, Image } from "@nextui-org/react";   
import { Carousel } from "flowbite-react";
import { MdOutlineArrowRight } from "react-icons/md";


const event_data = [
    {image:"/events/techkshitizThumbnail.jpg",
        tittle:"TechKshitiz '24",
        description:"Last Date - 30 June 2024",
        registration_link:"https://techkshitiz.in/government-engineering-college-siwan/total/events/list",
    },
       
    {image:"/logo/Collezian.svg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    {image:"/logo/Collezian.svg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    {image:"/logo/Collezian.svg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    
    
];

const Syllabus = () => {
    return (
        <>
            {/* Events  */}
           
            <div className="m-auto mt-8 mx-[5%]  aspect-[4/3] overflow-hidden  shadow-xl rounded-3xl relative lg:aspect-[2.73/1]">
            <Carousel leftControl="" rightControl="">
                
                <img alt="banner_image" className="object-cover w-full h-full in" src="/events/TechKshitizBanner.jpg" />
                <img alt="banner_image" className="object-cover w-full h-full in" src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
               
            </Carousel>
            </div>
            

            <div className="py-12">
                <h2 className="text-lg md:text-3xl font-bold text-center  CardTittle ">Latest Events</h2>
                {/* <p className="px-4 my-4 text-sm text-justify CardTittle lg:text-center">We aim to be your one-stop destination for all things related to Engineering. Here&apos;s what you can expect to find on our platform.</p> */}


                <div className="snap-mandatory snap-x flex scrollbar-hide overflow-scroll  px-[5%]  gap-4 py-6 ">
                    {
                        event_data.map((event,i) => (
                            <div key={i} className="shadow-md hover:shadow-lg transition-shadow duration-350  snap-center min-w-[200px] max-w-[240px] h-full  gap-8 m-auto  bg-white/5 border border-zinc-300/40 rounded-3xl  overflow-clip"> 
                              <Image className="z-0 object-cover aspect-[4/3] w-full" src={event.image}  radius="none" alt="" />
                                <div className="flex flex-col w-full m-auto p-[5%]">
                                    <h1 className="font-bold uppercase">{event.tittle.length === 0 ? "Exited !" :event.tittle} </h1>
                                    <p className="text-sm ">{event.description.length === 0 ? "For the events in Bihar" :event.description}</p>
                                    <Link href={event.registration_link} target="_blank" className=" text-sm cursor-pointer" color="primary" variant="flat"
                                    >
                                        {event.registration_link.length === 0 ? "Coming Soon" : "Register Now"} <MdOutlineArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                    
                   
                    
                </div>
            </div>
        </>
    );
}

export default Syllabus
