
import {Button,Input, Image, Link } from "@nextui-org/react";
import { PiPasswordFill } from "react-icons/pi";

export const Signup = () => {
  return (
    <>
      <div className="grid justify-center h-screen grid-cols-1 g:grid-cols-2 pitems-center form-container">
        <div className="w-full h-full gap-4 bg-[url('/images/collezian_cloud.png')] bg-slate-950 rounded-3xl  bg-contain bg-no-repeat bg-center image-container form-contents">
         
        </div>
        <div className="grid h-full gap-4 form-container form-contents">
          <div className="text-right register-now">Not a member?<Link>Register now</Link></div>
          <div className="form">
            <div className="text-center tittle">
              <h1 className="text-3xl font-semibold">Hello Dear,</h1>
              <p>Welcome to collezian community !
              </p>
            </div>
            <div className="input-fields">
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MailIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);
