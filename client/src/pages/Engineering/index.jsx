
import { LuUploadCloud } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className=" col-span-3 max-md:hidden " aria-label="">
        <div className="sideBar-items sticky top-0 bg-sky-600/15 p-6 max-sm:-translate-x-[95%] hover:translate-x-0 transition-transform duration-500 ease-in-out">
          <h1 className="text-center text-2xl font-bold"> Engineering</h1>
          <hr className="my-2" />
          <div className="sidebar-list flex flex-col gap-4  my-4">
            
              {/* also will be on loop */}
              <Link to="EE">Electrical Engineering</Link>
              <Link to="ME">Mechanical Engineering</Link>
              <Link to="CE">Civil Engineering</Link>
              <Link to="CSE">CS and Engineering</Link>
              <Link to="ECE">ECE</Link>
              <Link to="EEE">EEE</Link>
            
          </div>
        </div>
      </div>

      
    </>
  )
}
              

 
function Content() {
  return (
    <>
      <Outlet />
    </>
  )
}

function Engineering() {
  return (
    <div className="grid grid-cols-12 gap-6 max-md:px-[5%] ">
      {Dashboard()}
      {Content()}
    </div>
  )
}

export default Engineering