import { Accordion, AccordionItem, Button } from "@nextui-org/react";
export const BEU_PYQS = () => {
  return (
    <>
      <header className="my-16 text-center">
        <h1 className="text-4xl font-bold text-sky-600 " >Question Bank</h1>
        <p className=" text-gray-500 mb-4 px-[10%] ">Bihar Engineering University, Patna</p>
      </header>

      <section className="px-[5%]">
        <Accordion variant="splitted">
          <AccordionItem
            a
            className="gap-4"
            key="1"
            aria-label="Accordion 1"
            subtitle="Click here to expand"
            title="Electrical Engineering"
          >
            <div className="flex gap-4 my-2 pdf_download_btn">
              <Accordion>
                <AccordionItem
                 
                  className="gap-4"
                 
                  aria-label="Accordion 1"
                  subtitle=""
                  title="Analog Electronics"
                >
                  <div className="flex gap-4 my-2 pdf_download_btn">
                    
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2023
                    </Button>
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2022
                    </Button>
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2021
                    </Button>
                    <Button isDisabled  size="sm" variant="flat" color="primary">
                      2020
                    </Button>
                    
                  </div>
                </AccordionItem>
              </Accordion>
             
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};
