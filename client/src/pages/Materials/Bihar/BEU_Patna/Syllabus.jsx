import {Accordion, AccordionItem} from "@nextui-org/react";
export const BEU_Syllabus = () => {
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

 
  return (
    <>
      <center>
        <h1 className=" text-2xl font-bold " >BEU B.Tech Syllabus</h1>
        <p className="text-sm text-gray-500 mb-4 px-[10%] ">Bihar Engineering University, Patna</p>
      </center>

      <section className="px-[5%] md:px-[10%]">
      <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Electrical Engineering">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle={
          <span>
            Press to expand and download syllabus from semester 1 to 8
          </span>
        }
        title="Mechanical Engineering"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Civil Engineering">
        {defaultContent}
      </AccordionItem>
    </Accordion>
      </section>
    </>
  );
};
