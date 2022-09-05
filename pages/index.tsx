import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import BasicInfo from "../components/BasicInfo";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Steps from "../components/Steps";
import UploadImages from "../components/uploadImages";

const Home: NextPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step === 2) return;
    setStep(step + 1);
  };
  const prevStep = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  return (
    <>
      <Header />

      <main>
        <Steps step={step} />

        {step === 0 && <BasicInfo nextStep={nextStep} prevStep={prevStep} />}

        {/* Upload Images */}
        {step === 1 && <UploadImages nextStep={nextStep} prevStep={prevStep} />}

        {step === 2 && (
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
          </>
        )}

        <Buttons step={step} nextStep={nextStep} prevStep={prevStep} />
      </main>

      <Footer />
    </>
  );
};

export default Home;
