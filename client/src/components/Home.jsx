
import { Button, Link } from "@nextui-org/react"
import { GoPeople } from "react-icons/go";


const Home = () => {

    return (
        <>
            <div className="w-full min-h-[550px] grid justify-center content-center p-16 bg-sky-100 " >
            <div className="text-center">
            <h2 className="text-[56px] font-bold">Join Student Community</h2>
                <Button className="items-center text-sm max-w-min py-6 rounded-2xl" color="primary" variant="flat" startContent={<GoPeople />}>
                    <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join here</Link>
                </Button>
            </div>              
            </div>
        </>
    )
}

export default Home