import { useRef, ChangeEvent, useContext } from "react";
import Image from "next/image";
import { CartContext } from "../context/CartContext";

const UploadImages = () => {
  const { total, setTotal, images, setImages } = useContext(CartContext);

  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    for (let i = 0; i < e.target.files.length; i++) {
      const image: any = e.target.files[i];

      image["preview"] = URL.createObjectURL(image);

      const form = {
        furniture: "",
        optional: {
          imageEnhancement: {
            active: false,
            price: 2,
          },
          clutterRemoval: {
            active: false,
            price: 10,
          },
          emptyRoom: {
            active: false,
            price: 25,
          },
          wallColor: {
            active: false,
            price: 25,
          },
        },
        comments: "",
      };

      image["form"] = form;

      setImages((t: any) => [...t, image]);
    }
  };

  // const deleteImages = (image: any): void => {
  //   const sum = Object.values(image.form.optional)
  //     .map((e: any) => e.active && e.price)
  //     .reduce((a: any, b: any) => a + b);

  //   setTotal(total - sum);

  //   const updatedImages = images.filter(
  //     (e: any) => e.preview !== image.preview
  //   );

  //   setImages(updatedImages);

  //   console.log(images);
  // };

  const updateForm = (event: any, image: any, option: any): void => {
    const currentImage = images.filter((x: any) => x.preview === image.preview);

    currentImage[0].form[option] = event?.target.value;
  };
  const updateOptionalForm = (event: any, image: any, option: any): void => {
    const currentImage = images.filter((x: any) => x.preview === image.preview);
    const checked = event?.target.checked;

    currentImage[0].form.optional[option].active = checked;

    checked
      ? setTotal(total + currentImage[0].form.optional[option].price)
      : setTotal(total - currentImage[0].form.optional[option].price);
  };

  const furnitureOptions: string[] = [
    "Modern",
    "Industrial",
    "Traditional",
    "Scandinavian",
    "Beach",
  ];

  const optionalOptions: { option: string; name: string; price: number }[] = [
    { option: "imageEnhancement", name: "Image enhancement", price: 2 },
    { option: "clutterRemoval", name: "Clutter removal", price: 10 },
    { option: "emptyRoom", name: "Empty room (remove everything)", price: 25 },
    {
      option: "wallColor",
      name: "Modify wall color or floor style",
      price: 25,
    },
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
              accept=".jpg,.jpeg,.png"
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
                  <span className="text-red-500 underline ml-3 cursor-pointer">
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

                {optionalOptions.map((option, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <input
                      onClick={(e) =>
                        updateOptionalForm(e, image, option.option)
                      }
                      type="checkbox"
                      name={`${option.name.toLowerCase()}${images.indexOf(
                        image
                      )}`}
                      id={`${option.name.toLowerCase()}${images.indexOf(
                        image
                      )}`}
                      className="mr-3 accent-black"
                    />
                    <label
                      htmlFor={`${option.name.toLowerCase()}${images.indexOf(
                        image
                      )}`}
                      className="mr-auto"
                    >
                      {option.name}
                    </label>
                    <span className="font-bold flex items-center">
                      <span className="text-xs -mt-1">$</span>
                      {option.price}
                    </span>
                  </div>
                ))}

                {image.form.optional.wallColor.active && (
                  <textarea
                    onChange={(e) => updateForm(e, image, "comments")}
                    name=""
                    id=""
                    placeholder="add comments or any additional remarks here"
                    className="resize-none w-full bg-gray-100 border p-4 placeholder:text-gray-800 mt-2"
                  ></textarea>
                )}
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
              accept=".jpg,.jpeg,.png"
              multiple
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImages;
