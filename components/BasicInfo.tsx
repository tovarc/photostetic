const BasicInfo = ({...props}) => {
  return (
    <>
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
    </>
  );
};

export default BasicInfo;
