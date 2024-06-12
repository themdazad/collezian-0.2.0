import { Accordion, AccordionItem, Button } from "@nextui-org/react";
export const SBTE_Syllabus = () => {
  
  return (
    <>
      <center>
        <h1 className="text-2xl font-bold " >Bihar Polytechnic Syllabus</h1>
        <p className="text-sm text-gray-500 mb-4 px-[10%] ">State Board of Technical Education, Patna</p>
      </center>

      <section className="px-[5%] md:px-[15%]">
        <Accordion>
          <AccordionItem a className="gap-4" key="1" aria-label="Accordion 1" subtitle="Click here to expand" title="Electrical Engineering">
            <div className="flex gap-4 my-2 pdf_download_btn">
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
            key="2"
            aria-label="Accordion 2"
            subtitle="Click here to expand"
            title="Electroncis and Communication Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
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

          <AccordionItem key="3" aria-label="Accordion 3" subtitle="Click here to expand " title="Computer Science and Engineering ">
          
            <div className="flex gap-4 my-2 pdf_download_btn">
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
            key="5"
            aria-label="Accordion 5"
            subtitle="Click here to expand"
            title="Mechanical Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
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
            <div className="flex gap-4 my-2 pdf_download_btn">
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
