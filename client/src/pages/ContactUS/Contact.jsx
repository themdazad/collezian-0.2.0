import {Button} from "@nextui-org/react";

export default function Contact() {
  return (
    <>
     <Button className="items-center p-6 text-sm max-w-min rounded-2xl" color="primary" variant="flat" startContent={<GoPeople />}>
                        <Link href="https://chat.whatsapp.com/HmEXaa6y1zE1Rdi60n7VA5" target="_blank">Join Community</Link>
                    </Button>
    </>
  );
}
