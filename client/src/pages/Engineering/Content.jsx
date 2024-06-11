/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export const Content = (props) => {

  return (
    <>
      <div className="content col-span-12 lg:col-span-8">
        {/*  Title Name  */}
        {/*  Banner: Carousel  */}

        {/* Credits  */}
        <h1 className="text-3xl">{Object(props)?.title}</h1>

        <div className="Introduction  my-4 ">
          <p>{Object(props)?.description}</p>
        </div>


        <div className="grid items-center lg:grid-cols-3 grid-cols-1 gap-12 md:gap-6 my-12 ">
          <Card isFooterBlurred className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny uppercase font-bold">New</p>

            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full saturate-0  hover:saturate-100"
              src="https://t4.ftcdn.net/jpg/06/41/37/65/240_F_641376563_9KW5QvTyX6FNbOhRk7uyts94u9sTJKoZ.jpg"
            />
            <CardFooter className="absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-tiny">Available soon</p>
                <h4 className="font-medium text-2xl">Notes</h4>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Watch
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[300px] ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny  uppercase font-bold">New</p>

            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full -translate-y-6  object-cover saturate-0  hover:saturate-100"
              src="https://t3.ftcdn.net/jpg/02/67/45/06/240_F_267450681_r9mVbhsvh0ni5GQ4qvFPZ2SOraUOX7AE.jpg"
            />
            <CardFooter className="absolute bg-black/15 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className=" text-tiny">Available soon.</p>
                <h4 className=" font-medium text-2xl">Question Bank</h4>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Get Free
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[300px] bg-trans">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>

            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-80 -translate-y-6 object-cover saturate-0  hover:saturate-100 "
              src="https://t4.ftcdn.net/jpg/03/56/63/49/240_F_356634993_sJwTXf8KHyIebFhdByJNJRwBQ27Lw2Bf.jpg"
            />
            <CardFooter className="absolute bg-black/15 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <h4 className="font-medium text-2xl">Syllabus</h4>
              </div>;
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
