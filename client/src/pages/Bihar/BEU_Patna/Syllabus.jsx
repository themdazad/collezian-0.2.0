import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
export const BEU_Syllabus = () => {
  const [hidden, setHidden] = useState(true);
  function toggle() {
    if (hidden == true) {
      setHidden(false);
    } else setHidden(true);
  }
  return (
    <>
      <section className="py-6 px-[5%]">
        <p className="text-3xl font-bold text-center CardTittle text-sky-600 flex justify-center">
          <FiPaperclip />
          Syllabus
        </p>
        <h2 className="text-center font-semibold text-sky-600">
          Bihar Engineering University, Patna
        </h2>
      </section>
      <section>
        <div className=" bg-gray-200 p-4 " onClick={toggle}>
          <h2>Electrical Engineering</h2>
          <div className={hidden ? "hidden" : ""}>
            <p>Dropdown Item</p>
          </div>
        </div>
      </section>
    </>
  );
};
