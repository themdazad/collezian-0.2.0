import { Link } from "@nextui-org/react";
import { MdOutlineArrowRight } from "react-icons/md";

const data = [

    {
        tittle: "Polytechnic (Diploma)",
        description: "Access engineering study materials, latest syllabus PDF, notes, and more.",
        image: "https://img.freepik.com/free-photo/anime-school-building-illustration_23-2151150991.jpg?t=st=1715710899~exp=1715714499~hmac=5f1206ff522872642f018993dee4dcb1103dfd5c022cf25a41224505299ce0ab&w=360",
        link: "Explore Materials"
    },
    {
        tittle: "BCECE LE Prepration",
        description: "Take the next step in your educational journey! Explore BCECE LE resources and materials.",
        image: "https://img.freepik.com/free-photo/caucasian-male-studying-literature-indoors-library-generated-by-ai_188544-38939.jpg?t=st=1715711129~exp=1715714729~hmac=c76e59c46801b768505df735e6f4beac756f4ebccc1e5496d82f5b810ad7d6b5&w=826",
        link: "Free Resources"
    },
    {
        tittle: "B.Tech (Engineering)",
        description: "Stay updated with the latest exam results and academic achievements.",
        image: "https://img.freepik.com/free-photo/school-students-digital-art-style-education-day_23-2151164373.jpg?t=st=1715710796~exp=1715714396~hmac=d85184a6f81517718684552d176e6cd04275a66e2c3afda39c22aced3155ad11&w=740",
        link: "Check Results"
    },
];

export default function Materials(){
    return (
        <>
            {/* Materials  */}
            <div className="py-12">            
            <h2 className="CardTittle text-3xl font-bold uppercase text-center">Bihar Engineering Materials</h2>
            <p className="CardTittle my-4 text-center text-sm px-4">We aim to be your one-stop destination for all things related to Engineering.</p>

            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 px-[5%] content-stretch">
                {data.map((data, index) => {
                    return (
                        <div key={index} className="content-start h-full  gap-12 m-auto shadow-sm hover:shadow-lg bg-white border border-gray-300 rounded-3xl  overflow-clip">
                            <div>
                                <img className="object-cover aspect-[16/9] lg:aspect-[4/3] ease-in duration-200 delay-0  z-0 w-full h-full hover:-translate-y-4 " src={data.image} alt="" />
                            </div>


                            <div className="grid justify-center p-[5%]">
                                <h1 className="uppercase text-lg font-semibold py-2">{data.tittle}</h1>
                                <p className="text-sm">
                                    {data.description}
                                </p>
                                <Link className="mt-4" color="primary" variant="flat">  {data.link} <MdOutlineArrowRight /> </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </>
    );
}


