const Buttons = ({ ...props }) => {
  return (
    <>
      <div className="max-w-[885px] mx-auto my-20">
        <div className="flex items-center justify-between">
          {props.step !== 0 && (
            <button
              onClick={props.prevStep}
              className="px-4 py-2 font-medium flex items-center w-[200px] rounded-sm mb-28"
            >
              <svg
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-5 w-5 h-5"
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
          )}
          {props.step !== 2 && (
            <button
              onClick={props.nextStep}
              className="bg-black text-white px-4 py-3 font-medium rounded-sm mb-28 ml-auto  flex items-center w-[200px]"
            >
              Next
              <svg
                className="ml-auto w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Buttons;
