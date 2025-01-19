import { Button, Link } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-[540px] px-[5%] grid place-content-center ">
      <div className="text-center place-content-center  space-y-6">
        <h3 className=" text-6xl font-bold">Collezian Community</h3>

        <p className="text-2xl text-gray-500 ">
          We provides software solutions to colleges <br /> and helps students
          improve their skills on .
        </p>
        <Button
          as={Link}
          className="items-center shadow-md border-1max-w-min"
          href="#"
          target="_blank"
          color="primary"
          variant="flat"
          size="lg"
          startContent={""}
        >
          Learn More
        </Button>
      </div>
      {/* <Image className="max-md:hidden object-cover justify-self-center" width={700} height={700} src="/images/collezian_ai.png" /> */}
    </div>
  );
};

export default Hero;
