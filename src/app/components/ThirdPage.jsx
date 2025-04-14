import { Continue, Header, Input } from ".";

export const ThirdPage = ({ prevStep, addStep, onChange }) => {
  return (
    <div className="flex flex-col w-120 h-163.75 p-8 justify-between items-start rounded-lg bg-white">
      <div className="">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex">Date of birth</div>
          <div className="">
            <Input
              type="date"
              placeholder="yyyy.mm.dd"
              name="dateOfBirth"
              onChange={onChange}
              label="dateOfBirth"
            />
          </div>
        </div>
      </div>
      <Continue addStep={addStep} />
    </div>
  );
};
