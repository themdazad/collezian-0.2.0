
import { Carousel } from "flowbite-react";
import { Button, Link } from "@nextui-org/react"
import { GoPeople } from "react-icons/go";


const Home = () => {

    return (
        <>
            <div className="w-full grid justify-items-center py-16 bg-white" >
                <Carousel className=" lg:aspect-[2.73/1] aspect-[4/3] " leftControl=" " rightControl=" ">

                    <div className="object-contain h-full w-full bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164307.jpg?t=st=1715369417~exp=1715373017~hmac=ecf7b99c9bd1c790bb1e29ca8616292834e06ce104ea100909dc93068706e121&w=826')]"></div>
                    <img className="object-contain h-full w-full" src="https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164314.jpg?t=st=1715370688~exp=1715374288~hmac=f60ab9c7a72d2f862fc8b54861732c8ab3544d1892c13fbbe3a3ea097781b0b2&w=826" />
                    <img className="object-contain h-full w-full" src="https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164311.jpg?t=st=1715370759~exp=1715374359~hmac=54a783e933b3562528d806d13b793dabda6a8a9c17e0f10f1b9b6366d9f502e9&w=826" />

                </Carousel>
                <Button className="items-center " color="primary" variant="ghost" startContent={<GoPeople />}>
                    <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link>
                </Button>


            </div>
        </>
    )
}

export default Home