import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [basicInfo, setBasicInfo] = useState(true);
  const [uploadImages, setUploadImages] = useState(false);
  const [finalize, setFinalize] = useState(false);

  const showBasicInfo = (): void => {
    setBasicInfo(true);
    setUploadImages(false);
    setFinalize(false);
  };

  const showUploadImages = (): void => {
    setUploadImages(true);
    setBasicInfo(false);
    setFinalize(false);
  };

  const showFinalize = (): void => {
    setFinalize(true);
    setBasicInfo(false);
    setUploadImages(false);
  };

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
          <Link href="https://photostetic.com/">
            <a className="border-2 px-6 py-2 border-gray-700 font-medium">
              Go back to Photostetic
            </a>
          </Link>
        </div>
      </header>

      <main>
        {basicInfo && (
          <div>
            <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10">
              <div className="w-full shadow-lg py-5 px-10 mr-5 ">
                <div className="flex items-center justify-between z-10 relative">
                  <div className="absolute top-[23%] -z-20 left-0 h-2 bg-gray-200 w-[630px] ml-6"></div>
                  <div className="absolute top-[23%] -z-10 left-0 h-2 bg-black w-0 ml-6"></div>

                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 flex items-center justify-center border-2 border-black bg-black text-white rounded-full">
                      1
                    </span>
                    <span>Basic info</span>
                  </div>
                  <div className="flex flex-col items-center font-medium text-gray-400">
                    <span className="w-8 h-8 flex items-center justify-center bg-white  border-2 border-gray-400 rounded-full">
                      3
                    </span>
                    <span>Upload images</span>
                  </div>
                  <div className="flex flex-col items-center font-medium text-gray-400">
                    <span className="w-8 h-8 flex items-center justify-center bg-white  border-2 border-gray-400 rounded-full">
                      3
                    </span>
                    <span>Finalize</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">Total</p>
                  <span className="font-semibold flex items-center text-xl">
                    <span className="text-xs -mt-1">$</span>45.00
                  </span>
                </div>
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
              <button
                onClick={showUploadImages}
                className="bg-black text-white px-4 py-3 font-medium flex items-center justify-between w-[200px] rounded-sm ml-auto mb-28"
              >
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
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.08331 9H20.7183"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Upload Images */}
        {uploadImages && (
          <>
            <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10">
              <div className="w-full shadow-lg py-5 px-10 mr-5 ">
                <div className="flex items-center justify-between z-10 relative">
                  <div className="absolute top-[23%] -z-20 left-0 h-2 bg-gray-200 w-[630px] ml-6"></div>
                  <div className="absolute top-[23%] -z-10 left-0 h-2 bg-black w-[330px] ml-6"></div>

                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 flex items-center justify-center border-2 border-black bg-black text-white rounded-full">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Basic info</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 flex items-center justify-center border-2 border-black bg-black text-white rounded-full">
                      2
                    </span>
                    <span>Upload images</span>
                  </div>
                  <div className="flex flex-col items-center font-medium text-gray-400">
                    <span className="w-8 h-8 flex items-center justify-center bg-white  border-2 border-gray-400 rounded-full">
                      3
                    </span>
                    <span>Finalize</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">Total</p>
                  <span className="font-semibold flex items-center text-xl">
                    <span className="text-xs -mt-1">$</span>45.00
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-[885px] mx-auto">
              <h1 className="text-3xl font-semibold mb-5">Upload images</h1>

              <div className="shadow-lg p-4 grid grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="h-96 bg-gray-200 mb-3"></div>
                  <p>
                    Image1.png
                    <span className="text-red-500 underline ml-3 cursor-pointer">
                      Delete
                    </span>
                  </p>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    className="w-full bg-gray-100 p-3 border"
                  >
                    <option value="">Select room type*</option>
                    <option value="">Room type 1</option>
                    <option value="">Room type 2</option>
                  </select>

                  <p className="text-xl font-medium my-4">Furniture</p>
                  <p className="mb-3">
                    Choose style or Select furniture set from our{" "}
                    <a href="" className="font-medium underline">
                      Catalogue
                    </a>
                  </p>

                  <div className="grid grid-cols-2">
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="modern"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="modern">Modern</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="industrial"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="industrial">Industrial</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="traditional"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="traditional">Traditional</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="beach"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="beach">Beach</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="scandinavian"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="scandinavian">Scandinavian</label>
                    </div>
                  </div>

                  <p className="text-xl font-medium my-4">Optional</p>

                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="image"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="image" className="mr-auto">
                      Image enhancement
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>2.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="clutter"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="clutter" className="mr-auto">
                      Clutter removal
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>10.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="empty"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="empty" className="mr-auto">
                      Empty room (remove everything)
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>25.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="modify"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="modify" className="mr-auto">
                      Modify wall color or floor style
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>25.00
                    </span>
                  </div>
                  <textarea
                    name=""
                    id=""
                    placeholder="add comments or any additional remarks here"
                    className="resize-none w-full bg-gray-100 border p-4 placeholder:text-gray-800 mt-2"
                  ></textarea>
                </div>
              </div>
              <div className="shadow-lg p-4 grid grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="h-96 bg-gray-200 mb-3"></div>
                  <p>
                    Image1.png
                    <span className="text-red-500 underline ml-3 cursor-pointer">
                      Delete
                    </span>
                  </p>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    className="w-full bg-gray-100 p-3 border"
                  >
                    <option value="">Select room type*</option>
                    <option value="">Room type 1</option>
                    <option value="">Room type 2</option>
                  </select>

                  <p className="text-xl font-medium my-4">Furniture</p>
                  <p className="mb-3">
                    Choose style or Select furniture set from our{" "}
                    <a href="" className="font-medium underline">
                      Catalogue
                    </a>
                  </p>

                  <div className="grid grid-cols-2">
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="modern"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="modern">Modern</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="industrial"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="industrial">Industrial</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="traditional"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="traditional">Traditional</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="beach"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="beach">Beach</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="scandinavian"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="scandinavian">Scandinavian</label>
                    </div>
                  </div>

                  <p className="text-xl font-medium my-4">Optional</p>

                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="image"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="image" className="mr-auto">
                      Image enhancement
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>2.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="clutter"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="clutter" className="mr-auto">
                      Clutter removal
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>10.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="empty"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="empty" className="mr-auto">
                      Empty room (remove everything)
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>25.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="modify"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="modify" className="mr-auto">
                      Modify wall color or floor style
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>25.00
                    </span>
                  </div>
                  <textarea
                    name=""
                    id=""
                    placeholder="add comments or any additional remarks here"
                    className="resize-none w-full bg-gray-100 border p-4 placeholder:text-gray-800 mt-2"
                  ></textarea>
                </div>
              </div>
              <div className="shadow-lg p-4 grid grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="h-96 bg-gray-200 mb-3"></div>
                  <p>
                    Image1.png
                    <span className="text-red-500 underline ml-3 cursor-pointer">
                      Delete
                    </span>
                  </p>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    className="w-full bg-gray-100 p-3 border"
                  >
                    <option value="">Select room type*</option>
                    <option value="">Room type 1</option>
                    <option value="">Room type 2</option>
                  </select>

                  <p className="text-xl font-medium my-4">Furniture</p>
                  <p className="mb-3">
                    Choose style or Select furniture set from our{" "}
                    <a href="" className="font-medium underline">
                      Catalogue
                    </a>
                  </p>

                  <div className="grid grid-cols-2">
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="modern"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="modern">Modern</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="industrial"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="industrial">Industrial</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="traditional"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="traditional">Traditional</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="beach"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="beach">Beach</label>
                    </div>
                    <div className="mb-3">
                      <input
                        type="radio"
                        name="furniture"
                        id="scandinavian"
                        className="mr-3 accent-black"
                      />
                      <label htmlFor="scandinavian">Scandinavian</label>
                    </div>
                  </div>

                  <p className="text-xl font-medium my-4">Optional</p>

                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="image"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="image" className="mr-auto">
                      Image enhancement
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>2.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="clutter"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="clutter" className="mr-auto">
                      Clutter removal
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>10.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="empty"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="empty" className="mr-auto">
                      Empty room (remove everything)
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>25.00
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      name="image"
                      id="modify"
                      className="mr-3 accent-black"
                    />
                    <label htmlFor="modify" className="mr-auto">
                      Modify wall color or floor style
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>25.00
                    </span>
                  </div>
                  <textarea
                    name=""
                    id=""
                    placeholder="add comments or any additional remarks here"
                    className="resize-none w-full bg-gray-100 border p-4 placeholder:text-gray-800 mt-2"
                  ></textarea>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="px-5 py-3 bg-gray-100  rounded-sm font-medium">
                  Upload more images
                </button>
              </div>
            </div>

            <div className="max-w-[885px] mx-auto mt-40">
              <div className="flex items-center justify-between">
                <button
                  onClick={showBasicInfo}
                  className="px-4 py-2 font-medium flex items-center w-[200px] rounded-sm mb-28"
                >
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-5"
                  >
                    <path
                      d="M8.16499 16.0817L1.08333 9L8.16499 1.91833"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.9167 9H1.28167"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>
                <button
                  onClick={showFinalize}
                  className="bg-black text-white px-4 py-3 font-medium flex items-center justify-between w-[200px] rounded-sm mb-28"
                >
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
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.08331 9H20.7183"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}

        {finalize && (
          <>
            <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10">
              <div className="w-full shadow-lg py-5 px-10 mr-5 ">
                <div className="flex items-center justify-between z-10 relative">
                  <div className="absolute top-[23%] -z-20 left-0 h-2 bg-gray-200 w-[630px] ml-6"></div>
                  <div className="absolute top-[23%] -z-10 left-0 h-2 bg-black w-[630px] ml-6"></div>

                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 flex items-center justify-center border-2 border-black bg-black text-white rounded-full">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Basic info</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 flex items-center justify-center border-2 border-black bg-black text-white rounded-full">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Upload images</span>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                      3
                    </span>
                    <span>Finalize</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">Total</p>
                  <span className="font-semibold flex items-center text-xl">
                    <span className="text-xs -mt-1">$</span>45.00
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-[885px] mx-auto mb-10">
              <h1 className="text-3xl font-semibold mb-3">Finalize Job</h1>
              <p className="mb-8">
                Please enter the following details to complete the job.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-[300px]">
                <div>
                  <label htmlFor="name" className="mb-2 block">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    className="w-full border px-6 py-3 bg-gray-100 placeholder:text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="w-full border px-6 py-3 bg-gray-100 placeholder:text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    className="w-full border px-6 py-3 bg-gray-100 placeholder:text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company name"
                    className="w-full border px-6 py-3 bg-gray-100 placeholder:text-gray-800"
                  />
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="conditions"
                  id="conditions"
                  className="accent-black"
                />
                <label htmlFor="conditions" className="ml-3">
                  I agree to the Photostetic{" "}
                  <Link href="/">
                    <a className="font-semibold underline">
                      terms and conditions
                    </a>
                  </Link>{" "}
                  and{" "}
                  <Link href="/">
                    <a className="font-semibold underline">privacy policy</a>
                  </Link>
                  .
                </label>
              </div>
            </div>
            <div className="max-w-[885px] mx-auto mb-10">
              <div className="flex items-center justify-between">
                <button
                  onClick={showUploadImages}
                  className="px-4 py-2 font-medium flex items-center w-[200px] rounded-sm mb-28"
                >
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-5"
                  >
                    <path
                      d="M8.16499 16.0817L1.08333 9L8.16499 1.91833"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.9167 9H1.28167"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>
                <button className="bg-black text-white px-4 py-3 font-medium rounded-sm mb-28">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
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
