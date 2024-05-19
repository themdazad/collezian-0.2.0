import { Link } from "@nextui-org/react";   
import { Carousel } from "flowbite-react";


const event_data = [
    {image:"/events/techkshitiz_banner.jpg",
        tittle:"TechKshitiz '24",
        description:"Registration Started",
        registration_link:"https://techkshitiz.in/government-engineering-college-siwan/total/events/list",
    },
       
    {image:"https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    {image:"https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    {image:"https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    {image:"https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        tittle:"",
        description:"",
        registration_link:"",
    },
    
];

const Events = () => {
    return (
        <>
            {/* Events  */}
            <div className="h-[250px] -mb-[250px] "></div>
            <div className="m-auto pt-12  aspect-[16/9] overflow-hidden lg:w-[90%] w-[95%] shadow-xl rounded-2xl relative lg:aspect-[2.73/1]">
            <Carousel leftControl=" " rightControl=" ">
                
                <img className="object-cover  in h-full w-full" src="/events/techkshitiz_banner.jpg" />
                <img className="object-cover  in h-full w-full" src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="object-cover  in h-full w-full" src="https://images.unsplash.com/photo-1510384742052-1abcb6282645?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                {/* <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

            </Carousel>
            </div>
            


            <div className="py-12">
                <h2 className="CardTittle text-2xl font-bold uppercase text-center text-sky-600 ">Upcoming Events</h2>
                {/* <p className="CardTittle my-4 lg:text-center text-sm text-justify px-4">We aim to be your one-stop destination for all things related to Engineering. Here&apos;s what you can expect to find on our platform.</p> */}

{/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-stretch*/}
                <div className="pt-12 px-[2%] md:px-[5%] flex scrollbar-hide overflow-scroll gap-4 md:gap-8 py-6 ">
                    {
                        event_data.map((event,i) => (
                            <div key={i} className="min-w-[300px] max-w-[350px] content-start h-full  gap-12 m-auto shadow-sm hover:shadow-lg bg-white/5 border border-zinc-400 rounded-2xl  overflow-clip"> 
                                <div>
                                    <img className=" object-cover aspect-[4/3] ease-in duration-200 delay-0  z-0 w-full h-full " src={event.image} alt="" />
                                </div>

                                <div className="flex flex-col  w-full m-auto text-center py-1 p-[2%]">
                                    <h1 className="uppercase font-bold">{event.tittle.length === 0 ? "Exited !" :event.tittle} </h1>
                                    <p className=" text-sm">{event.description.length === 0 ? "For the events in Bihar" :event.description}</p>
                                    <Link href={event.registration_link} target="_blank" className="cursor-pointer text-sm self-center py-2" color="primary" variant="flat">
                                        {event.registration_link.length === 0 ? "Coming Soon" : "Register Now"}
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

export default Events
