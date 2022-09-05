import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import BasicInfo from "../components/BasicInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Steps from "../components/Steps";
import UploadImages from "../components/uploadImages";

const Home: NextPage = () => {
  const [basicInfo, setBasicInfo] = useState(false);
  const [uploadImages, setUploadImages] = useState(true);
  const [finalize, setFinalize] = useState(false);

  return (
    <>
      <Header />

      <main>
        <Steps />

        {basicInfo && <BasicInfo />}

        {/* Upload Images */}
        {uploadImages && <UploadImages />}

        {finalize && (
          <>
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
                <button className="px-4 py-2 font-medium flex items-center w-[200px] rounded-sm mb-28">
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

      <Footer />
    </>
  );
};

export default Home;
