
import { Button, Link } from "@nextui-org/react"
import { GoPeople } from "react-icons/go";

 export default function Home(){

    return (
        <>
            <div className="w-full min-h-[60vh] grid justify-center content-center " >
                <div className="text-center">
                    <h2 className="text-3xl  uppercase">your <br /><b className="text-sky-600">one-stop destination</b> <br />for all things related to Engineering</h2>
                    {/* <h2 className="text-4xl font-['syne'] font-bold uppercase">Join <br/>Engineer&apos;s Community</h2> */}
                   
                    <Button className="items-center my-6 p-6 text-sm max-w-min rounded-2xl" color="primary" variant="flat" startContent={<GoPeople />}>
                        <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

