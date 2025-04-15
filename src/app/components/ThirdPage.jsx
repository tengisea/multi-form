"use client";
import { useRef, useState } from "react";
import { Continue, Header, Input, Back } from ".";
import Image from "next/legacy/image";
import { X } from "lucide-react";

export const ThirdPage = ({ prevStep, addStep, onChange }) => {
  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");
  const [tempFile, setTempFile] = useState({});

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleInputChange = (event) => {
    const file = Array.from(event.target.files)[0];

    if (file) {
      setTempFile(file);
      setPreviewLink(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    setPreviewLink(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const clearImage = () => {
    setPreviewLink("");
    setTempFile({});
    inputImageRef.current.value = "";
  };

  return (
    <div className="flex flex-col w-114 h-163.75 p-8 justify-between items-start rounded-lg bg-white">
      <div className="flex flex-col gap-3">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Date of birth</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="date"
              name="dateOfBirth"
              onChange={onChange}
              label="dateOfBirth"
            />
          </div>
          <div className="flex">
            <div className="flex font-semibold">Profile Image</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div
            className=""
            hidden
            onChange={handleInputChange}
            ref={inputImageRef}
          >
            <Input
              type="file"
              placeholder="Add image"
              name="profileImage"
              onChange={onChange}
              label="profileImage"
            />
          </div>
          <div
            className={`flex flex-col relative items-center justify-center gap-y-2 cursor-pointer bg-[#F8F8F8] h-[180px] border rounded-md border-solid ${
              isDragging ? "dashed border-black" : "solid bg-[#F8F8F8]"
            }`}
            onClick={openBrowse}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {previewLink ? (
              <div className="flex">
                <Image src={previewLink} layout="fill" alt="" />
                <button onClick={clearImage} className="flex items-end justify-end">
                  <X
                    size={30}
                    color="#ffffff"
                    className="p-1.5 z-10 bg-black rounded-full "
                  />
                </button>
              </div>
            ) : (
             <div className="flex flex-col justify-center">
               <Image size={16} color="#000000" />
               "Browse or Drop Image"
             </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <Back prevStep={prevStep} />
        <Continue addStep={addStep} />
      </div>
    </div>
  );
};
