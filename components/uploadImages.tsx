import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";

const UploadImages = () => {
  const [images, setImages]: any = useState([]);

  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    for (let i = 0; i < e.target.files.length; i++) {
      const image: any = e.target.files[i];

      image["preview"] = URL.createObjectURL(image);

      const form = {
        furniture: "",
        clutterRemoval: false,
        comments: "",
      };

      image["form"] = form;

      setImages((t: any) => [...t, image]);
    }
  };

  const deleteImages = (image: any): void => {
    setImages(images.filter((e: any) => e !== image));
  };

  const updateForm = (event: any, image: any, option: any): void => {
    const foundIndex = images.filter((x: any) => x.preview === image.preview);

    foundIndex[0].form[option] = event?.target.value;

    console.log(images);
  };

  const furnitureOptions: string[] = [
    "Modern",
    "Industrial",
    "Traditional",
    "Scandinavian",
    "Beach",
  ];

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    hiddenFileInput?.current?.click();
  };

  return (
    <>
      <div className="max-w-[885px] mx-auto">
        <h1 className="text-3xl font-semibold mb-5">Upload images</h1>

        {!images.length && (
          <>
            <div
              onClick={handleClick}
              className="border-dashed border-2 text-center p-10 cursor-pointer"
            >
              <p className="m-0 text-2xl text-gray-400 font-medium">
                Upload images
              </p>
            </div>
            <input
              type="file"
              name=""
              id=""
              ref={hiddenFileInput}
              onChange={handleImages}
              multiple
              className="hidden"
            />
          </>
        )}

        <div>
          {images.map((image: any, index: any) => (
            <div
              key={index}
              className="shadow-lg p-4 grid grid-cols-2 gap-4 mb-5"
            >
              <div>
                <div className="h-96 w-full overflow-hidden bg-gray-200 mb-3">
                  <Image
                    src={image.preview}
                    key={index}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <p>
                  {image.name}
                  <span
                    className="text-red-500 underline ml-3 cursor-pointer"
                    onClick={() => deleteImages(image)}
                  >
                    Delete
                  </span>
                </p>
              </div>
              <div>
                <select name="" id="" className="w-full bg-gray-100 p-3 border">
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
                  {furnitureOptions.map((option, index) => (
                    <div key={index} className="mb-3">
                      <input
                        type="radio"
                        name={`furniture${images.indexOf(image)}`}
                        id={`${option.toLowerCase()}${images.indexOf(image)}`}
                        value={option.toLowerCase()}
                        className="mr-3 accent-black"
                        onClick={(e) => updateForm(e, image, "furniture")}
                      />
                      <label
                        htmlFor={`${option.toLowerCase()}${images.indexOf(
                          image
                        )}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
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
          ))}
        </div>

        {images.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={handleClick}
              className="px-5 py-3 bg-gray-100  rounded-sm font-medium"
            >
              Upload more images
            </button>
            <input
              type="file"
              name=""
              id=""
              ref={hiddenFileInput}
              onChange={handleImages}
              className="hidden"
              multiple
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImages;
