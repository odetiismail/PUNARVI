import React,{useRef,useEffect} from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
//   const ref = useRef(null);

//   const Hi = () => {
//     ref.current?.scrollIntoView({behavior: 'smooth'});
//   };

//   useEffect(()=>Hi(),[])

  return (
    <div className="w-full p-4">
      <div className=" container m-auto  gap-8 grid grid-cols-2 max-sm:grid-cols-1">
        <div className="p-4 shadow-md shadow-gray-600 ">
          <p className="border-b-2 border-gray-300 pb-2 max-sm:pb-1">
            NEW CUSTOMER
          </p>
          <p className=" p-2 pt-4 text-gray-500">
            By creating an account on our website, you will be able to shop
            faster, be up to date on an orders status, and keep track of the
            orders you have previously made.
          </p>
          <div className="pt-10">
            <button
              type="button"
              className="text-white bg-blue-700
             hover:bg-blue-800 focus:ring-4
              focus:ring-blue-300 font-medium 
              rounded-lg text-sm px-8 py-2.5 me-2 

              mb-2 dark:bg-blue-600
               dark:hover:bg-blue-700 
               focus:outline-none dark:focus:ring-blue-800
               "
            >
              <Link to="/register">REGISTER</Link>
            </button>
          </div>
        </div>
        
        {/*Login Form */}
        <div>
          <div className="p-4 shadow-md shadow-gray-600 ">
            <form className="p-4 mx-auto">
              <div className="mb-5">
                <p className="border-b-2 border-gray-300 pb-2 max-sm:pb-1">
                  NEW CUSTOMER
                </p>
                <label
                 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                 
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};