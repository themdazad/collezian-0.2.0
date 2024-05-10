import { Button, Link } from "@nextui-org/react"; 
import { MdOutlineArrowRight } from "react-icons/md";

const data = [
      
    {
        tittle: "Engineering Materials",
        description: "Access engineering study materials, including textbooks, lecture notes, and tutorials.",
        image: "https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164378.jpg?t=st=1715367635~exp=1715371235~hmac=e902115f9106b161051057a3beeeac44e2cc42efcb27a186e21b1e2a47664b30&w=740",
        link:"Explore Materials"
    },
    {
        tittle: "Career Roadmaps",
        description: "Plan your academic and professional journey with our curated roadmaps.",
        image: "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164365.jpg?t=st=1715367255~exp=1715370855~hmac=6616b045dc59ed9880ec92f36067d364b27266aef0dbddfd46f5fba17ac27f44&w=740",
        link:"View Roadmaps"
    },
  {
        tittle: "Exam Results",
        description: "Stay updated with the latest exam results and academic achievements.",
        image: "/images/AI.jpg",
        link:"Check Results"
    },
];

const Features = () => {
    return (
        <>
            {/* Features  */}
            <h2 className="CardTittle text-3xl font-bold uppercase text-center">Feature</h2>
            <p className="CardTittle my-4 text-center">We aim to be your one-stop destination for all things related to Engineering. <br/>Here&apos;s what you can expect to find on our platform.</p>
                
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 px-[5%] content-start">
            {data.map((data,index) => {
    return (
        <div key={index} className="max-w-full content-start gap-12 m-auto hover:shadow-lg border border-gray-300 rounded-3xl overflow-clip">

                <img className="object-cover aspect-[4/3] ease-in duration-200 delay-0 hover:-rotate-3 z-0 w-full h-full hover:scale-90 " src={data.image} alt="" />
            

            <div className="grid justify-center p-[5%]">
                <h1 className="uppercase text-lg font-semibold py-2">{data.tittle}</h1>
                <p className="text-sm">
                    {data.description}
                </p>
                <Link className="mt-4 text-sm" color="primary" variant="flat">  {data.link} <MdOutlineArrowRight /> </Link>
            </div>
        </div>
    )
})}
            </div>



        </>
    );
}

export default Features
