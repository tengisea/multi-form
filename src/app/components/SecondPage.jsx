import { Back, Continue, Header, Input } from ".";

export const SecondPage = ({ addStep, Header, Input, onChange, prevStep }) => {
  return (
    <div className="flex flex-col w-114 h-163.75 p-8 justify-between items-start rounded-lg bg-white">
      <div className="flex flex-col gap-3">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Email</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="email"
              placeholder="Your email"
              name="email"
              onChange={onChange}
              label="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Phone Number</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="number"
              placeholder="Your phone number"
              name="phoneNumber"
              onChange={onChange}
              label="phoneNumber"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Password</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="password"
              placeholder="Your password"
              name="password"
              onChange={onChange}
              label="password"
              minlength="6"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="flex font-semibold">Confirm password</div>
            <div className="text-[#E14942]">*</div>
          </div>
          <div className="">
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={onChange}
              label="confirmPassword"
              minlength="6"
            />
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
