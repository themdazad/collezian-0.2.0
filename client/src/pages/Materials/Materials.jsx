import { Button, Link } from "@nextui-org/react";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const data = [

    {
        tittle: "Polytechnic",
        description: "Access engineering study materials, latest syllabus PDF, notes, and more.",
        image: "https://img.freepik.com/free-photo/anime-school-building-illustration_23-2151150991.jpg?t=st=1715710899~exp=1715714499~hmac=5f1206ff522872642f018993dee4dcb1103dfd5c022cf25a41224505299ce0ab&w=360",
        link: "Explore Materials",
        btn_link1: "",
        btn_link2: "",
        btn_link3: "",

    },

    {
        tittle: "B.Tech",
        description: "Stay updated with the latest exam results and academic achievements.",
        image: "https://img.freepik.com/free-photo/school-students-digital-art-style-education-day_23-2151164373.jpg?t=st=1715710796~exp=1715714396~hmac=d85184a6f81517718684552d176e6cd04275a66e2c3afda39c22aced3155ad11&w=740",
        link: "Check Results",
        btn_link1: "",
        btn_link2: "",
        btn_link3: "",
    },
];

export default function Materials() {
    return (
        <>
            {/* Materials  */}
            <div className="py-6 px-[5%]">
                <p className="text-4xl font-semibold text-center CardTittle">Study Materials</p>
                <h2 className="text-sm text-center text-gray-500 ">Choose your state and explore engineering resources for free</h2>

                <h2 className="py-6 text-2xl font-semibold ">Bihar Engineering</h2>
                <div className="grid grid-cols-1 gap-6 mb-12 card md:grid-cols-2 lg:grid-cols-3 content-stretch">

                    {/*BTech   */}
                    <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-3xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src="https://img.freepik.com/free-photo/school-students-digital-art-style-education-day_23-2151164373.jpg?t=st=1715710796~exp=1715714396~hmac=d85184a6f81517718684552d176e6cd04275a66e2c3afda39c22aced3155ad11&w=740" alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1>B.Tech</h1>
                            <p className="text-sm text-gray-500">
                                Stay updated with the latest exam results and academic achievements.
                            </p>
                            <div className="flex gap-2 mt-4 lint_buttons">
                                    <NavLink to="/Materials/BEU_Syllabus">
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >
                                        Syllabus
                                </Button>
                                    </NavLink>

                                    <NavLink to="/Materials/BEU_Notes">
                                <Button className="items-center text-sm max-w-min rounded-xl"  size="sm" color="primary" variant="flat" >
                                        Notes
                                </Button>
                                    </NavLink>

                                    <NavLink to="/Materials/BEU_PYQs">
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >
                                        PYQs
                                </Button>
                                    </NavLink>

                            </div>
                        </div>
                    </div>
                    {/* State: Bihar Board Materials / */}
                    <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-3xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src="https://img.freepik.com/free-photo/anime-school-building-illustration_23-2151150991.jpg?t=st=1715710899~exp=1715714499~hmac=5f1206ff522872642f018993dee4dcb1103dfd5c022cf25a41224505299ce0ab&w=360" alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1>Polytechnic</h1>
                            <p className="text-sm text-gray-500">
                                Access engineering study materials, latest syllabus PDF, notes, and more.
                            </p>
                            <div className="flex gap-2 mt-4 lint_buttons">
                                    <NavLink to="/Materials/SBTE_Syllabus">
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >
                                        Syllabus
                                </Button>
                                    </NavLink>

                                    <NavLink to="/Materials/Bihar/SBTE/Notes">
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >
                                        Notes
                                </Button>
                                    </NavLink>

                                    <NavLink to="/Materials/Bihar/SBTE/PYQs">
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >
                                        PYQs
                                </Button>
                                    </NavLink>

                            </div>
                        </div>
                    </div>

                    {/* BCECE LE   */}
                    <div className="gap-12 m-auto border shadow-sm border-zinc-300/10 hover:shadow-xl bg-white/5 rounded-3xl overflow-clip">
                        <div>
                            <img className="object-cover aspect-[16/9] ease-in duration-200 delay-0  z-0 w-full h-full " src="https://img.freepik.com/free-photo/caucasian-male-studying-literature-indoors-library-generated-by-ai_188544-38939.jpg?t=st=1715711129~exp=1715714729~hmac=c76e59c46801b768505df735e6f4beac756f4ebccc1e5496d82f5b810ad7d6b5&w=826" alt="" />
                        </div>


                        <div className="grid justify-center p-[5%]">
                            <h1>BCECE LE 2025</h1>
                            <p className="text-sm text-gray-500">
                                Take the next step in your educational journey! Explore BCECE LE resources and materials.
                            </p>
                            <div className="flex gap-2 mt-4 ">
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >Syllabus</Button>
                                <Button className="items-center text-sm max-w-min rounded-xl" size="sm" color="primary" variant="flat" >Join Telegram</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}


