import { ChevronRight } from "lucide-react";

export const Continue = ({}) => {
  return (
    <button
      type="submit"
      className=" flex flex-1 w-full h-11.5 px-3 py-2.5 justify-center items-center rounded-md bg-[#121316] text-white hover:opacity-80 gap-1 transition-all duration-300"
    >
      <ChevronRight color="#ffffff" />
      Continue
    </button>
  );
};
