import { CgPen } from "react-icons/cg"
import { MdBook } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { Button} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
export const BEU_Notes = () => {
  return (
    <>
      <div className="py-6 px-[5%]">
        <p className="text-3xl font-bold text-center CardTittle text-sky-600 flex justify-center"><CgPen />Notes</p>
        <h2 className="text-center font-semibold text-sky-600">Bihar Engineering University, Patna</h2>
      </div>
 
 {/* Need to add searchBar to filter Notes  */}

      <section className="px-[5%] grid grid-cols-2 ">
        <div className="card bg-gray-200 p-4 rounded-xl">
          <div className="tittle text-xl font-bold">Name of Subject</div>
          <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus iusto error temporibus?</div>
          <div className="buttons flex gap-4 mt-2">
            <NavLink to="/Materials/Bihar/SBTE/Syllabus">
              <Button className="items-center text-sm max-w-min rounded-xl" color="primary" variant="flat" >
                <MdBook/>
                Read
              </Button>
            </NavLink>
            <NavLink to="/Materials/Bihar/SBTE/Syllabus">
              <Button className="items-center text-sm max-w-min rounded-xl " color="primary" variant="flat" >
              <MdDownload/>
                Download
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
