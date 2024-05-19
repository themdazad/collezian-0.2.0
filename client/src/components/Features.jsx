import { Link } from "@nextui-org/react";
import { MdOutlineArrowRight } from "react-icons/md";

const image1 = "https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164378.jpg?t=st=1715367635~exp=1715371235~hmac=e902115f9106b161051057a3beeeac44e2cc42efcb27a186e21b1e2a47664b30&w=740";
const image2 = "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164365.jpg?t=st=1715367255~exp=1715370855~hmac=6616b045dc59ed9880ec92f36067d364b27266aef0dbddfd46f5fba17ac27f44&w=740";
const image3 = "https://img.freepik.com/premium-photo/floral-selfcare-human-brain-tree-generative-ai_94628-12606.jpg?w=740";


const Features = () => {
    return (
        <>

            <div>
                <h2 className="text-2xl font-bold text-center text-blue-600 uppercase CardTittle ">Explore More</h2>
                <p className="px-4 my-4 text-sm text-justify CardTittle lg:text-center">We aim to be your one-stop destination for all things related to Engineering. Here&apos;s what you can expect to find on our platform.</p>

                <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-[5%] content-stretch">
                    <div key={1} className="content-start h-full gap-12 m-auto border shadow-sm border-zinc-300/40 border--600 hover:shadow-xl bg-white/5 rounded-xl overflow-clip"> 
                        <div>
                            <img className=" object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src={image1} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="text-lg font-semibold uppercase ">Engineering Materials</h1>
                            <p className="text-sm">
                                Access engineering study materials, including textbooks, lecture notes, and tutorials.
                            </p>
                            <Link to="Materials" className="mt-4 cursor-pointer" color="primary" variant="flat">Explore Materials<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>

                    <div key={2} className="content-start h-full gap-12 m-auto border shadow-sm border-zinc-300/40 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src={image2} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="text-lg font-semibold uppercase">Career Roadmaps</h1>
                            <p className="text-sm">
                                Plan your academic and professional journey with curated roadmaps.
                            </p>
                            <Link className="mt-4 cursor-pointer" color="primary" variant="flat"> View Roadmaps<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>

                    <div key={3} className="content-start h-full gap-12 m-auto border shadow-sm border-zinc-300/40 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full" src={image3} alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="text-lg font-semibold uppercase ">Exam Results</h1>
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
