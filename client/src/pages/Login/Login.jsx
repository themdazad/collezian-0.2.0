import { Button,Link } from "@nextui-org/react";
import { FaGithub,FaGoogle } from "react-icons/fa";


export const Login = () => {

  return (
    <>
      <div className=" px-[5%] py-8 grid justify-center grid-cols-1 lg:grid-cols-2 items-center form-container">
        <div className="w-full  h-full gap-4 bg-[url('https://img.freepik.com/premium-vector/student-college-boy-sleeping-books-vector-illustration-doodle-line-art_969863-21316.jpg?w=500')] rounded-3xl overflow-hidden bg-contain bg-white bg-no-repeat bg-center image-container form-contents"></div>
        <div className="grid h-full gap-4 form-container form-contents">
          <div className="text-right register-now">
            Not a member?<Link>Register now</Link>
          </div>
          <div className="form">
            <div className="text-center tittle my-8">
              <h1 className="text-3xl font-semibold">Hello Dear,</h1>
              <p>Welcome to collezian community !</p>
            </div>

            {/* login-Form  */}
            <div className="input-fields lg:mx-[20%]">
              <form action="#" className="flex flex-col space-y-5">
                
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email address:{user[0]["username"]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-4 bg-transparent py-2 transition duration-300 border rounded-xl  "
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="px-4 bg-transparent py-2 transition duration-300 border rounded-xl  "
                  />
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 transition duration-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    className="w-full px-4 py-2 font-semibold"
                  >
                    Log in
                  </Button>
                </div>
                <div className="flex flex-col space-y-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14" />
                    <span className="font-normal text-gray-500">
                      or
                    </span>
                    <span className="h-px bg-gray-400 w-14" />
                  </span>

                  <div className="login-with-icons flex text-3xl space-x-4 justify-center">
                    <a href="#"><FaGoogle /></a>
                    <a href="#"><FaGithub /></a>
                  </div>
                </div>
              </form>
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
