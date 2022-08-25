import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="border-b-2 py-3 mb-5">
        <div className="container mx-auto flex items-center justify-between">
          <img src="assets/logo.svg" alt="" />
          <Link href="/">
            <a className="border-2 px-6 py-2 border-gray-700 font-medium">
              Go back to Photostetic
            </a>
          </Link>
        </div>
      </header>

      <main>
        <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10">
          <div className="flex items-center justify-between w-full shadow-lg py-5 px-10 mr-5">
            <div className="flex flex-col items-center font-medium">
              <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                1
              </span>
              <span>Basic info</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-8 h-8 flex items-center justify-center border-2  text-gray-400 rounded-full">
                2
              </span>
              <span className="text-gray-400">Upload images</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-8 h-8 flex items-center justify-center border-2  text-gray-400 rounded-full">
                3
              </span>
              <span className="text-gray-400">Finalize</span>
            </div>
          </div>

          <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px]">
            <p>Total</p>
            <p>
              <span>$</span>0.00
            </p>
          </div>
        </div>

        <div className="max-w-[885px] mx-auto">
          <h1 className="text-3xl font-semibold mb-5">Add basic info</h1>

          <label htmlFor="job" className="mb-2 block">
            Job Name
          </label>
          <input
            type="text"
            name="job"
            id="job"
            placeholder="Enter Job Name"
            className="w-full border px-6 py-3 bg-gray-100 placeholder:text-gray-800"
          />
        </div>

        <div className="max-w-[885px] mx-auto mt-40">
          <button className="bg-black text-white px-4 py-2 font-medium flex items-center justify-between w-[200px] rounded-sm ml-auto mb-28">
            Next
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.835 1.91821L20.9167 8.99988L13.835 16.0815"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.08331 9H20.7183"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </main>

      <footer>
        <div className="container mx-auto border-t py-2 text-gray-300">
          <p>© Copyright 2022 Photostetic - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
