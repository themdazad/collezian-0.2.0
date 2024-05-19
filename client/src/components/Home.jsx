
import { Button, Link } from "@nextui-org/react"
import { GoPeople } from "react-icons/go";
import { Image } from "@nextui-org/react";

const Home = () => {

    return (
        <>
            <div className="w-full min-h-[60vh] grid justify-center content-center " >
                <div className="text-center">
                    <h2 className="text-5xl font-['syne'] font-bold uppercase">Join <br/>Engineer&apos;s Community</h2>
                    <p className="CardTittle py-8 px-[5%] text-center text-sm">We aim to be your <b className="text-blue-600">one-stop destination</b> for all things related to Engineering.</p>
                    
                    <Button className="items-center p-6 text-sm max-w-min rounded-2xl" color="primary" variant="flat" startContent={<GoPeople />}>
                        <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home