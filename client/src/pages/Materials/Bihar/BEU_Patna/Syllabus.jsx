import { Accordion, AccordionItem, Button } from "@nextui-org/react";
export const BEU_Syllabus = () => {
  
  return (
    <>
      <center>
        <h1 className=" text-2xl font-bold " >BEU B.Tech Syllabus</h1>
        <p className="text-sm text-gray-500 mb-4 px-[10%] ">Bihar Engineering University, Patna</p>
      </center>

      <section className="px-[5%] md:px-[15%]">
        <Accordion>
          <AccordionItem a className="gap-4" key="1" aria-label="Accordion 1" subtitle="Click here to expand" title="Electrical Engineering">
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button  variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>

          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            subtitle="Click here to expand"
            title="Electrical and Electronics Engineering"
          >
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>
          
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            subtitle="Click here to expand"
            title="Electroncis and Communication Engineering"
          >
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>

          <AccordionItem key="4" aria-label="Accordion 4" subtitle="Click here to expand " title="Computer Science and Engineering ">
          <span>
            <p className="text-sm">Core</p>
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>
            <span>
            <p className="text-sm">IoT</p>
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>
            <span>
            <p className="text-sm">AI & ML</p>
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>
            <span>
            <p className="text-sm">Data Science</p>
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span><span>
            <p className="text-sm">Cyber Security</p>
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
            </span>

          </AccordionItem>


          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            subtitle="Click here to expand"
            title="Mechanical Engineering"
          >
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            subtitle="Click here to expand"
            title="Civil Engineering"
          >
            <div className="pdf_download_btn flex gap-4 my-2">
              <Button isDisabled variant="flat" color="primary" >1st </Button>
              <Button isDisabled variant="flat" color="primary" >2nd </Button>
              <Button isDisabled variant="flat" color="primary" >3rd </Button>
              <Button isDisabled variant="flat" color="primary" >4th </Button>
              <Button isDisabled variant="flat" color="primary" >5th </Button>
              <Button isDisabled variant="flat" color="primary" >6th </Button>
              <Button isDisabled variant="flat" color="primary" >7th </Button>
              <Button isDisabled variant="flat" color="primary" >8th </Button>
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};
