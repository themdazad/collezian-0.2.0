import { Link } from "@nextui-org/react";
import { MdOutlineArrowRight } from "react-icons/md";

import { Carousel } from "flowbite-react";

const image1 = "https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164378.jpg?t=st=1715367635~exp=1715371235~hmac=e902115f9106b161051057a3beeeac44e2cc42efcb27a186e21b1e2a47664b30&w=740";
const image2 = "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164365.jpg?t=st=1715367255~exp=1715370855~hmac=6616b045dc59ed9880ec92f36067d364b27266aef0dbddfd46f5fba17ac27f44&w=740";
const image3 = "https://img.freepik.com/premium-photo/floral-selfcare-human-brain-tree-generative-ai_94628-12606.jpg?w=740";


const Features = () => {
    return (
        <>
            {/* Features  */}

            <Carousel className="m-auto -mt-[100px] overflow-hidden w-[70%] shadow-xl rounded-3xl relative lg:aspect-[2.73/1] aspect-[4/3] " leftControl=" " rightControl=" ">

                {/* <div className="object-cover h-full w-full bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164307.jpg?t=st=1715369417~exp=1715373017~hmac=ecf7b99c9bd1c790bb1e29ca8616292834e06ce104ea100909dc93068706e121&w=826')]"/> */}
                {/* <img className="object-contax  in h-full w-full" src="https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164314.jpg?t=st=1715370688~exp=1715374288~hmac=f60ab9c7a72d2f862fc8b54861732c8ab3544d1892c13fbbe3a3ea097781b0b2&w=826" />
            <img className="object-contain h-full w-full" src="https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164311.jpg?t=st=1715370759~exp=1715374359~hmac=54a783e933b3562528d806d13b793dabda6a8a9c17e0f10f1b9b6366d9f502e9&w=826" /> */}

            </Carousel>


            <div className="py-12">
                <h2 className="CardTittle text-3xl font-bold uppercase text-center">our visions</h2>
                <p className="CardTittle my-4 lg:text-center text-sm text-justify px-4">We aim to be your one-stop destination for all things related to Engineering. Here&apos;s what you can expect to find on our platform.</p>

                <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-[5%] content-stretch">
                    <div key={1} className="content-start h-full  gap-12 m-auto shadow-sm hover:shadow-lg bg-white border border-gray-300 rounded-3xl  overflow-clip">
                        <div>
                            <img className="object-cover aspect-[4/3] ease-in duration-200 delay-0  z-0 w-full h-full hover:-translate-y-4 " src={image1} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="uppercase text-lg font-semibold py-2">Engineering Materials</h1>
                            <p className="text-sm">
                                Access engineering study materials, including textbooks, lecture notes, and tutorials.
                            </p>
                            <Link to="Materials" className="cursor-pointer mt-4" color="primary" variant="flat">Explore Materials<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>

                    <div key={2} className="content-start h-full  gap-12 m-auto shadow-sm hover:shadow-lg bg-white border border-gray-300 rounded-3xl  overflow-clip">
                        <div>
                            <img className="object-cover aspect-[4/3] ease-in duration-200 delay-0  z-0 w-full h-full hover:-translate-y-4 " src={image2} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="uppercase text-lg font-semibold py-2">Career Roadmaps</h1>
                            <p className="text-sm">
                                Plan your academic and professional journey with our curated roadmaps.
                            </p>
                            <Link className="mt-4 cursor-pointer" color="primary" variant="flat"> View Roadmaps<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>

                    <div key={3} className="content-start h-full  gap-12 m-auto shadow-sm hover:shadow-lg bg-white border border-gray-300 rounded-3xl  overflow-clip">
                        <div>
                            <img className="object-cover aspect-[4/3] ease-in duration-200 delay-0  z-0 w-full h-full hover:-translate-y-4 " src={image3} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="uppercase text-lg font-semibold py-2">Exam Results</h1>
                            <p className="text-sm">
                                Stay updated with the latest exam results and academic achievements.
                            </p>
                            <Link className="mt-4 cursor-pointer" color="primary" variant="flat">Check Results<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features
