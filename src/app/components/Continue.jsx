import { ChevronRight } from "lucide-react";

export const Continue = ({addStep}) => {
  return (
    <div className="w-100 flex py-2.5 px-3 justify-center items-center rounded-md bg-[#121316] text-white " >
      <button className="flex gap-1" onClick={addStep}>
        Continue
        <ChevronRight color="#ffffff"/>
      </button>
    </div>
  );
};
