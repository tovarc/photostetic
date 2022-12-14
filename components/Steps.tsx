import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Steps = ({ ...props }) => {
  const { total } = useContext(CartContext);

  return (
    <>
      {props.step === 0 && (
        <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10 sticky top-0 pt-5 bg-white z-20">
          <div className="w-full shadow-lg py-5 px-10 mr-5 ">
            <div className="flex items-center justify-between z-10 relative">
              <div className="absolute top-[19.5%] -z-20 left-0 h-2 bg-gray-200 w-[630px] ml-6"></div>

              <div className="flex flex-col items-center font-medium">
                <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                  1
                </span>
                <span className="mt-2">Basic info</span>
              </div>

              <div className="flex flex-col items-center font-medium">
                <span className="w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 text-gray-300 rounded-full">
                  2
                </span>
                <span className="mt-2">Upload images</span>
              </div>
              <div className="flex flex-col items-center font-medium">
                <span className="w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 text-gray-300 rounded-full">
                  3
                </span>
                <span className="mt-2">Finalize</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">Total</p>
              <span className="font-semibold flex items-center text-xl">
                <span className="text-xs -mt-1">$</span>
                {total}.00
              </span>
            </div>
          </div>
        </div>
      )}
      {props.step === 1 && (
        <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10 sticky top-0 pt-5 bg-white z-20">
          <div className="w-full shadow-lg py-5 px-10 mr-5 ">
            <div className="flex items-center justify-between z-10 relative">
              <div className="absolute top-[19.5%] -z-20 left-0 h-2 bg-gray-200 w-[630px] ml-6"></div>
              <div className="absolute top-[19.5%] -z-10 left-0 h-2 bg-black w-[315px] ml-6"></div>

              <div className="flex flex-col items-center font-medium">
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
                <span className="mt-2">Basic info</span>
              </div>

              <div className="flex flex-col items-center font-medium">
                <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                  2
                </span>
                <span className="mt-2">Upload images</span>
              </div>
              <div className="flex flex-col items-center font-medium">
                <span className="w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 text-gray-300 rounded-full">
                  3
                </span>
                <span className="mt-2">Finalize</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">Total</p>
              <span className="font-semibold flex items-center text-xl">
                <span className="text-xs -mt-1">$</span>
                {total}.00
              </span>
            </div>
          </div>
        </div>
      )}
      {props.step === 2 && (
        <div className="flex items-center justify-between max-w-[885px] mx-auto mb-10 sticky top-0 pt-5 bg-white z-20">
          <div className="w-full shadow-lg py-5 px-10 mr-5 ">
            <div className="flex items-center justify-between z-10 relative">
              <div className="absolute top-[19.5%] -z-20 left-0 h-2 bg-gray-200 w-[630px] ml-6"></div>
              <div className="absolute top-[19.5%] -z-10 left-0 h-2 bg-black w-[630px] ml-6"></div>

              <div className="flex flex-col items-center font-medium">
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
                <span className="mt-2">Basic info</span>
              </div>

              <div className="flex flex-col items-center font-medium">
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
                <span className="mt-2">Upload images</span>
              </div>
              <div className="flex flex-col items-center font-medium">
                <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full">
                  3
                </span>
                <span className="mt-2">Finalize</span>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gray-100 w-[7rem] shadow-md h-[96px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">Total</p>
              <span className="font-semibold flex items-center text-xl">
                <span className="text-xs -mt-1">$</span>
                {total}.00
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
