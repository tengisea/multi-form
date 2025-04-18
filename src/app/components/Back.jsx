import { ChevronLeft } from "lucide-react";

export const Back = ({ prevStep }) => {
  return (
    <button
      type="button"
      onClick={prevStep}
      className="w-32 flex py-2.5 px-3 justify-center items-center rounded-md bg-white border-[#CBD5E1] border-1 text-black gap-1 hover:bg-gray-100"
    >
      <ChevronLeft color="#000000" />
      Back
    </button>
  );
};
