
import {Card,CardFooter, CardHeader, Image, Button} from "@nextui-org/react";

export default function Result() {
  return (
    <div className="max-w-full m-auto">
        <h1 className="m-6 text-2xl font-bold">Result</h1>
        
    <div className=" gap-6 grid grid-cols-12 grid-rows-3 m-6">
      {/* State Board of Technical Education Patna  */}
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Result 2024</p>
        <h4 className="text-black font-medium text-2xl">SBTE, Bihar</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full hover:scale-105  object-cover"
        src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-sm">1st, 3rd & 5th</p>
          <p className="text-black text-sm">Result Availble</p>
        </div>
        <Button className="" color="primary" radius="full" size="sm">
          Not Available
        </Button>
      </CardFooter>
    </Card>
  
    {/* Bihar Engineering University , Patna  */}
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Result</p>
        <h4 className="text-black font-medium text-2xl">Bihar Engineering University, Patna</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background" 
        className="z-0 w-full h-full hover:scale-105  object-cover"
        src="https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_1280.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-sm">Semester 3rd, 5th</p>
          <p className="text-black text-sm">Result Availble</p>
        </div>
        <Button className="" color="primary" radius="full" size="sm">
          Check Result
        </Button>
      </CardFooter>
    </Card>
   
  </div>
  </div>
  );
}
