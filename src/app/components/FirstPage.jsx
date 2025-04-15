import { Continue } from ".";

export const FirstPage = ({ addStep, Header, Input, onChange }) => {
  return (
    <div className="flex flex-col w-114 h-163.75 p-8 justify-between items-start rounded-lg bg-white">
      <div className="flex flex-col gap-3">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">First name</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="Your first name"
              name="First name"
              onChange={onChange}
              label="First name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Last name</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="Your last name"
              name="Last name"
              onChange={onChange}
              label="Last name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Username</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="Your username"
              name="Username"
              onChange={onChange}
              label="Username"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <Continue addStep={addStep} />
      </div>
    </div>
  );
};
