import { Continue, Header, Input } from ".";

export const SecondPage = ({addStep, Header, Input, onChange, prevStep}) => {
  return (
     <div className="flex flex-col w-120 h-163.75 p-8 justify-between items-start rounded-lg bg-white">
       <div className="">
         <Header />
         <div className="flex flex-col gap-2">
           <div className="flex">Email</div>
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
           <div className="flex">Phone Number</div>
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
           <div className="flex">Password</div>
           <div className="">
             <Input
               type="text"
               placeholder="Your password"
               name="password"
               onChange={onChange}
               label="password"
             />
           </div>
         </div>
         <div className="flex flex-col gap-2">
           <div className="flex">Confirm password</div>
           <div className="">
             <Input
               type="text"
               placeholder="Confirm password"
               name="confirmPassword"
               onChange={onChange}
               label="confirmPassword"
             />
           </div>
         </div>
       </div>
       <Continue addStep={addStep}/>
     </div>
   );
 };
 
