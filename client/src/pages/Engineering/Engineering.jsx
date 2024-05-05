
import { Sidebar } from "flowbite-react";
import { LuUploadCloud } from "react-icons/lu";
import {Outlet} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Sidebar className="col-span-3 max-md:hidden " aria-label="">
        <h1 className="text-center text-2xl font-bold ">Engineering</h1>
        <hr className="my-2" />
        <Sidebar.Items >
          <Sidebar.ItemGroup>
            {/* also will be on loop */}
            <Sidebar.Item  href="ee">Electrical Engineering</Sidebar.Item>
            <Sidebar.Item href="me">Mechanical Engineering</Sidebar.Item>
            <Sidebar.Item href="ce">Civil Engineering</Sidebar.Item>
            <Sidebar.Item href="cse">CS and Engineering</Sidebar.Item>
            <Sidebar.Item href="ece">ECE</Sidebar.Item>
            <Sidebar.Item href="eee">EEE</Sidebar.Item>
          </Sidebar.ItemGroup>
          {/* After horizontal seperator line */}
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={LuUploadCloud}>
              Contribute
            </Sidebar.Item>

          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

    </>
  )
}



function Content() {
  return (
    <>
      <Outlet/>   
    </>
  )
}

function Engineering() {
  return (
    <div className=" grid grid-cols-12 gap-6 max-md:px-[5%] ">
      {Dashboard()}
      {Content()}
    </div>
  )
}

export default Engineering