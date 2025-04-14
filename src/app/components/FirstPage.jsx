import { Continue } from ".";

export const FirstPage = ({ addStep, Header, Input, onChange }) => {
  return (
    <div className="flex flex-col w-120 h-163.75 p-8 justify-between items-start rounded-lg bg-white">
      <div className="">
        <Header />
        <div className="flex flex-col gap-2">
          <div className="flex">First name</div>
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
          <div className="flex">Last name</div>
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
          <div className="flex">Username</div>
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
      <Continue addStep={addStep}/>
    </div>
  );
};
