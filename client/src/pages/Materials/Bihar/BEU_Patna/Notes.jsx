import { MdBook } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { Button, Input } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const notes_data = [
  {
    tittle: "Subject",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, commodi!",
    uploaded: "01 JAN 2025",
    owner: "collezian",
  },
  {
    tittle: "Subject",
    description:
      "  Data is coming from local API. consectetur adipisicing elit. Delectus, commodi!",
    uploaded: "01 JAN 2025",
    owner: "collezian",
  },
  {
    tittle: "Subject",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, commodi!",
    uploaded: "01 JAN 2025",
    owner: "collezian",
  },
  {
    tittle: "Subject",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, commodi!",
    uploaded: "01 JAN 2025",
    owner: "collezian",
  },
  {
    tittle: "Subject",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, commodi!",
    uploaded: "01 JAN 2025",
    owner: "collezian",
  },
];

export const BEU_Notes = () => {
  const [data, setData] = useState(notes_data);
  return (
    <>
      <header className="my-12 text-center">
        <h1 className="text-4xl font-bold text-sky-600 " >Notes</h1>
        <p className=" text-gray-500 mb-4 px-[10%] ">Bihar Engineering University, Patna</p>
      </header>
      {/* Need to add searchBar to filter Notes  latter */}
     
      
      <section className=" py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
        {data.map((notes, i) => {
          return (
            <div
              key={i}
              className="p-4 border shadow-sm border-zinc-300/50 hover:shadow-xl bg-white/5 card rounded-xl"
            >
              <div className="font-semibold uppercase notesTittle">
                {notes.tittle}-{i + 1}
              </div>
              <div className=" text-gray-500 description">
                {notes.description}
              </div>
              <div className="flex gap-4 mt-4 buttons">
                <NavLink>
                  <Button
                    isDisabled
                    className="items-center  max-w-min rounded-xl"
                    size="sm"
                    color="primary"
                    variant="flat"
                  >
                    <MdBook />
                    Read
                  </Button>
                </NavLink>
                <NavLink>
                  <Button
                    isDisabled
                    className="items-center  max-w-min rounded-xl "
                    size="sm"
                    color="primary"
                    variant="flat"
                  >
                    <MdDownload />
                    Download
                  </Button>
                </NavLink>
              </div>
              <div className="cardFooter text-[12px] flex text-gray-500 mt-2 gap-4">
                <p>Uploaded: {notes.uploaded}</p>
                <p>
                  By: <a>@{notes.owner}</a>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
