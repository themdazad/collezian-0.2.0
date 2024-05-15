import { Link } from "@nextui-org/react";
import { MdOutlineArrowRight } from "react-icons/md";
import { Carousel } from "flowbite-react";

const image1 = "https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164378.jpg?t=st=1715367635~exp=1715371235~hmac=e902115f9106b161051057a3beeeac44e2cc42efcb27a186e21b1e2a47664b30&w=740";
const image2 = "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164365.jpg?t=st=1715367255~exp=1715370855~hmac=6616b045dc59ed9880ec92f36067d364b27266aef0dbddfd46f5fba17ac27f44&w=740";
const image3 = "https://img.freepik.com/premium-photo/floral-selfcare-human-brain-tree-generative-ai_94628-12606.jpg?w=740";


const Events = () => {
    return (
        <>
            {/* Features  */}
            <div className="h-[250px] -mb-[250px] bg-sky-100"></div>
            <div className="m-auto  aspect-[16/9] overflow-hidden lg:w-[80%] w-[95%] shadow-xl rounded-3xl relative lg:aspect-[2.73/1]">
            <Carousel leftControl=" " rightControl=" ">

                
                <img className="object-cover  in h-full w-full" src="/events/techkshitiz_banner.jpg" />
                <img className="object-cover  in h-full w-full" src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                {/* <img className="object-cover  in h-full w-full" src="https://images.unsplash.com/photo-1510384742052-1abcb6282645?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
                {/* <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

            </Carousel>
            </div>
            


            <div className="py-12">
                <h2 className="CardTittle text-3xl font-bold uppercase text-center">Upcoming Events</h2>
                {/* <p className="CardTittle my-4 lg:text-center text-sm text-justify px-4">We aim to be your one-stop destination for all things related to Engineering. Here&apos;s what you can expect to find on our platform.</p> */}

                <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-[5%] content-stretch">
                    <div key={1} className="content-start h-full  gap-12 m-auto shadow-sm hover:shadow-lg bg-white border border-gray-300 rounded-3xl  overflow-clip"> 
                        <div>
                            <img className=" hover:animate-bounce object-cover aspect-[4/3] ease-in duration-200 delay-0  z-0 w-full h-full " src={image1} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="uppercase text-lg font-semibold py-2">TechKshitiz '24</h1>
                            <p className="text-sm">
                                Access engineering study materials, including textbooks, lecture notes, and tutorials.
                            </p>
                            <Link to="Materials" className="cursor-pointer mt-4" color="primary" variant="flat">Register Now<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Events
