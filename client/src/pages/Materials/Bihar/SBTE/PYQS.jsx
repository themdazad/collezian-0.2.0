import { Accordion, AccordionItem, Button } from "@nextui-org/react";
export const SBTE_PYQS = () => {
  return (
    <>
      <center>
        <h1 className="text-2xl font-bold ">Question Bank</h1>
        <p className="text-sm text-gray-500 mb-4 px-[10%] ">
          State Board Of Technical Education, Patna
        </p>
      </center>

      <section className="px-[5%]  md:px-[15%]">
        <Accordion>
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
