import { Button, Link } from "@nextui-org/react";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const data = [

    {
        tittle: "Polytechnic",
        description: "Access engineering study materials, latest syllabus PDF, notes, and more.",
        image: "https://img.freepik.com/free-photo/anime-school-building-illustration_23-2151150991.jpg?t=st=1715710899~exp=1715714499~hmac=5f1206ff522872642f018993dee4dcb1103dfd5c022cf25a41224505299ce0ab&w=360",
        link: "Explore Materials",
        btn_link1:"",
        btn_link2:"",
        btn_link3:"",
        
    },
   
    {
        tittle: "B.Tech",
        description: "Stay updated with the latest exam results and academic achievements.",
        image: "https://img.freepik.com/free-photo/school-students-digital-art-style-education-day_23-2151164373.jpg?t=st=1715710796~exp=1715714396~hmac=d85184a6f81517718684552d176e6cd04275a66e2c3afda39c22aced3155ad11&w=740",
        link: "Check Results",
        btn_link1:"",
        btn_link2:"",
        btn_link3:"",
    },
];

export default function Materials(){
    return (
        <>
            {/* Materials  */}
            <div className="py-12 px-[5%]">            
            <h2 className="text-3xl font-bold text-center uppercase CardTittle text-sky-600">Free Engineering Materials</h2>
           
            <h2 className="py-6 text-2xl font-semibold text-sky-600">Bihar Engineering</h2>
            <div className="grid grid-cols-1 gap-6 mb-12 card md:grid-cols-2 lg:grid-cols-3 content-stretch">
               {/* Bihar Polytechnic card-1 / */}
               <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src="https://img.freepik.com/free-photo/anime-school-building-illustration_23-2151150991.jpg?t=st=1715710899~exp=1715714499~hmac=5f1206ff522872642f018993dee4dcb1103dfd5c022cf25a41224505299ce0ab&w=360" alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="py-2 text-lg font-semibold uppercase">Polytechnic</h1>
                            <p className="text-sm">
                            Access engineering study materials, latest syllabus PDF, notes, and more.
                            </p>
                            <div className="flex gap-2 mt-4 lint_buttons">
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >Syllabus</Button>
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >Notes</Button>
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >PYQs</Button>
                            </div>
                            </div>
                    </div>
                    
                    {/* BCECE LE card-2  */}
                    <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src="https://img.freepik.com/free-photo/caucasian-male-studying-literature-indoors-library-generated-by-ai_188544-38939.jpg?t=st=1715711129~exp=1715714729~hmac=c76e59c46801b768505df735e6f4beac756f4ebccc1e5496d82f5b810ad7d6b5&w=826" alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="py-2 text-lg font-semibold uppercase">BCECE LE 2025</h1>
                            <p className="text-sm">
                            Take the next step in your educational journey! Explore BCECE LE resources and materials.
                            </p>
                            <div className="flex gap-2 mt-4 lint_buttons">
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >Syllabus</Button>
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >Join Telegram</Button>
                            </div>
                            </div>
                    </div>
                    {/*BTech card-3  */}
                    <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src="https://img.freepik.com/free-photo/school-students-digital-art-style-education-day_23-2151164373.jpg?t=st=1715710796~exp=1715714396~hmac=d85184a6f81517718684552d176e6cd04275a66e2c3afda39c22aced3155ad11&w=740" alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1 className="py-2 text-lg font-semibold uppercase">B.Tech</h1>
                            <p className="text-sm">
                            Stay updated with the latest exam results and academic achievements.
                            </p>
                            <div className="flex gap-2 mt-4 lint_buttons">
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >
                                <NavLink as={Link} to="Syllabus">
                                    Syllabus
                                </NavLink>

                                </Button>
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >Resources</Button>
                            <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >PYQs</Button>
                            </div>
                            </div>
                    </div>
            </div>

           

            {/* State  */}
            <h2 className="py-4 text-xl font-semibold text-sky-600">UP Engineering</h2>
            <div className="flex gap-6 mb-6 overflow-scroll card snap-mandatory snap-x scrollbar-hide content-stretch">
                {data.map((data, i) => {
                    return (
                        <div key={i} className="gap-12 m-auto border shadow-sm snap-center border-zinc-300/10 border--600 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        
                        <div className="grid justify-center p-[5%]">
                            <h1 className="py-2 text-lg font-semibold uppercase">{data.tittle}</h1>
                            <p className="text-sm">
                                {data.description}
                            </p>
                            <Link  href={data.link} target="_blank" className="mt-4 cursor-pointer" color="primary" variant="flat">Check Results<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>
                    )
                })}
            </div>

            {/* Other State  */}
            <h2 className="flex py-4 overflow-scroll text-xl font-semibold snap-mandatory snap-x scrollbar-hide text-sky-600">New Delhi Engineering</h2>
            <div className="grid grid-cols-1 gap-6 mb-6 card md:grid-cols-2 lg:grid-cols-3">
                {data.map((data, i) => {
                    return (

                        <div key={i} className="gap-12 m-auto border shadow-sm snap-center border-zinc-300/10 border--600 hover:shadow-xl bg-white/5 rounded-xl overflow-clip">
                        
                        <div className="grid justify-center p-[5%]">
                            <h1 className="py-2 text-lg font-semibold uppercase">{data.tittle}</h1>
                            <p className="text-sm">
                                {data.description}
                            </p>
                            <Link  href={data.link} target="_blank" className="mt-4 cursor-pointer" color="primary" variant="flat">Check Results<MdOutlineArrowRight /> </Link>
                        </div>
                    </div>
                    )
                })}
            </div>
            </div>
        </>
    );
}


