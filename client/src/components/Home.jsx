
import { Carousel } from "flowbite-react";
import { Button, Link } from "@nextui-org/react"
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {
    
    return (
        <div className="py-12">               
                <div className=" my-8 h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel leftControl=" " rightControl=" ">
                    <img src="/images/coming-soon.png" />
                       <img src="/images/coming-soon.png" />
                       <img src="/images/coming-soon.png" />
                       <img src="/images/coming-soon.png" />
                    </Carousel>
                </div>
            <div className="mb-8 grid justify-items-center" >            
                <Button className="mt-8" color="primary" variant="bordered" startContent={<FaWhatsapp />}>
                 <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link> 
                </Button>
            </div>    
        </div>
    )
}   

export default Home