
import { Sidebar } from "flowbite-react";
import { LuUploadCloud } from "react-icons/lu";
import {Link, Outlet} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Sidebar className="col-span-3 max-md:hidden " aria-label="">
        <h1 className="text-center text-2xl font-bold ">Engineering</h1>
        <hr className="my-2" />
        <Sidebar.Items >
          <Sidebar.ItemGroup>
            {/* also will be on loop */}
            <Link to="EE"><Sidebar.Item >Electrical Engineering</Sidebar.Item></Link>
            <Link to="ME"><Sidebar.Item >Mechanical Engineering</Sidebar.Item></Link>
            <Link to="CE"><Sidebar.Item >Civil Engineering</Sidebar.Item></Link>
            <Link to="CSE"><Sidebar.Item >CS and Engineering</Sidebar.Item></Link>
            <Link to="ECE"><Sidebar.Item >ECE</Sidebar.Item></Link>
            <Link to="EEE"><Sidebar.Item >EEE</Sidebar.Item></Link>
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