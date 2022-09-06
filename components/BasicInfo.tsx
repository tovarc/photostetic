import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const BasicInfo = () => {
  const { jobName, setJobName } = useContext(CartContext);

  return (
    <>
      <div className="max-w-[885px] mx-auto">
        <h1 className="text-3xl font-semibold mb-5">Add basic info</h1>

        <label htmlFor="job" className="mb-2 block">
          Job Name
        </label>
        <input
          onChange={(e) => setJobName(e.target.value)}
          type="text"
          name="job"
          id="job"
          value={jobName}
          placeholder="Enter Job Name"
          className="w-full border px-6 py-3 bg-gray-100 placeholder:text-gray-800"
        />
      </div>
    </>
  );
};

export default BasicInfo;
