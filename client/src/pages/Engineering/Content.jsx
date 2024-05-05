/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export const Content = (props) => {
  return (
    <>
     <div className="content col-span-12 lg:col-span-8">
        {/*  Title Name  */}
        {/*  Banner: Carousel  */}

        {/* Credits  */}
        <h1 className="text-3xl">{props.title}</h1>

        <div className="Introduction  my-4 ">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur, ipsa fuga officia molestias suscipit minus, cupiditate dolorem tenetur dicta itaque tempore et quos aliquam voluptatibus dolor est quidem vero sed sit. Ad et quae non quis aperiam reiciendis, consequatur minus facere a enim dicta.</p>
        </div>


        <div className="grid items-center lg:grid-cols-3 grid-cols-1 gap-12 md:gap-6 my-12 ">
          <Card isFooterBlurred className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Lectures</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Watch
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Question Bank</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Get Free
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Syllabus</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Download
              </Button>
            </CardFooter>
          </Card>
        </div>



      </div>
    </>
  )
}
