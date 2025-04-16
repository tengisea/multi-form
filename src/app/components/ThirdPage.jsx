"use client";
import { useRef, useState } from "react";
import { Continue, Header, Input, Back } from ".";
import Image from "next/legacy/image";
import { Images, X } from "lucide-react";

const isEmpty = (value) => !value?.trim();
const validateStepThree = ({ dateOfBirth, profileImage }) => {
  const validationErrors = {};

  if (isEmpty(dateOfBirth)) {
    validationErrors.DateOfBirth = "Enter your date of birth";
  }

  if (isEmpty(profileImage)) {
    validationErrors.profileImage = "Please choose your profile pictue";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;
  return { isFormValid, validationErrors };
};

export const ThirdPage = ({
  prevStep,
  addStep,
  onChange,
  formErrors,
  formValues,
  updateFormErrors,
}) => {
  const { dateOfBirth, profileImage } = formValues;
  const { dateOfBirth: errorDateOfBirth, profileImage: errorProfileImage } =
    formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepThree(formValues);

    if (isFormValid) {
      prevStep();
      addStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-114 h-163.75 p-8 justify-between items-start rounded-lg bg-white"
    >
      <div className="flex flex-col gap-3">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="date"
              name="dateOfBirth"
              onChange={onChange}
              label="Date of birth"
              error={errorDateOfBirth}
            />
          </div>
          <div hidden onChange={handleInputChange}>
            <Input
              ref={inputImageRef}
              type="file"
              placeholder="Add image"
              name="profileImage"
              onChange={onChange}
              label="Profile Image"
              error={errorProfileImage}
            />
          </div>
          <div
            className={`flex flex-col relative items-center justify-center gap-y-2 cursor-pointer bg-[#F8F8F8] h-[180px] border rounded-md border-solid ${
              isDragging
                ? "border-dashed border-black border-1"
                : "solid  border-0"
            }`}
            onClick={openBrowse}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {previewLink ? (
              <div className="flex">
                <Image
                  src={previewLink}
                  layout="fill"
                  alt=""
                  className="object-cover"
                />
                <button onClick={clearImage}>
                  <X
                    size={26}
                    color="#ffffff"
                    className="p-1.25 z-10 bg-black rounded-full absolute inset-0 m-1 "
                  />
                </button>
              </div>
            ) : (
              <div
                className="flex flex-col justify-center items-center"
                onClick={openBrowse}
              >
                <Images size={16} color="#000000" />
                "Browse or Drop Image"
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <Back prevStep={prevStep} />
        <Continue  />
      </div>
    </form>
  );
};
