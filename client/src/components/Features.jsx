import { Button } from "@nextui-org/react"; 

const data = [
    {
        tittle: "GOLU AI",
        description: " assist in your learning process, stay organized and on track with your assignments and deadlines. Explicabo optio dolore, reprehenderit incidunt fuga vitae saepe dolorem corrupti totam.",
        image: "/images/blue-cyborg.jpg",
        link:"Free Chat"
    },
    
    {
        tittle: "Engineering Materials",
        description: " assist in your learning process, stay organized and on track with your assignments and deadlines. Explicabo optio dolore, reprehenderit incidunt fuga vitae saepe dolorem corrupti totam.",
        image: "/images/book.jpg",
        link:"Explore"
    },
    {
        tittle: "Study groups",
        description: " assist in your learning process, stay organized and on track with your assignments and deadlines. Explicabo optio dolore, reprehenderit incidunt fuga vitae saepe dolorem corrupti totam.",
        image: "/images/AI.jpg",
        link:"Join Groups "
    },
];

const Features = () => {
    return (
        <>
            {/* Features  */}
            <h2 className="CardTittle text-3xl font-bold uppercase text-center">Feature</h2>
            <p className="CardTittle my-4 text-center">We aim to be your one-stop destination for all things related to Engineering. Here`$apos`s what you can expect to find on our platform.</p>
                
            {data.map(
                (data,index) => {
                    return (
                        <div key={index} className="max-w-full gap-8  py-[64px] m-auto grid lg:grid-cols-2 grid-cols-1  ">
                       
                            <div >
                                <img className=" ease-in duration-200 delay-0 hover:-rotate-3  z-0 w-full h-full hover:scale-90  object-cover" src={data.image} alt="" />
                            </div>

                            <div >
                                <h1 className="uppercase text-2xl font-semibold">{data.tittle}</h1>
                                <p className="py-4 " >
                                    {data.description}
                                </p>
                            <Button color="primary" variant="flat">{data.link}</Button>
                            </div>
                        </div>
                    )

                }

            )}



        </>
    );
}

export default Features
