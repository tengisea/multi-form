import { Back, Continue, Input, Header } from ".";

const isEmpty = (value) => !value?.trim();
const validateStepTwo = ({ email, phoneNumber, password, confirmPassword }) => {
  const validationErrors = {};

  if (isEmpty(email)) {
    validationErrors.email = "Enter your email";
  }

  if (isEmpty(phoneNumber)) {
    validationErrors.phoneNumber = "Enter your phone number";
  } else if (!phoneNumber.length === 8) {
    validationErrors.phoneNumber = "Phone number must be 8 digits";}

    if (isEmpty(password)) {
      validationErrors.password = "Enter your password";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (isEmpty(confirmPassword)) {
      validationErrors.confirmPassword = "Please confirm password";
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    const isFormValid = Object.keys(validationErrors).length === 0;
    return { isFormValid, validationErrors };
  }

export const SecondPage = ({
  addStep,
  onChange,
  prevStep,
  formErrors,
  formValues,
  updateFormErrors,
}) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;

  const {
    email: errorEmail,
    phoneNumber: errorPhoneNumber,
    password: errorPassword,
    confirmPassword: errorConfirmPassword,
  } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepTwo(formValues);

    if (isFormValid) {
      addStep();
      return;
    }

    updateFormErrors(validationErrors);
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
              type="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={onChange}
              label="Email"
              error={errorEmail}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="number"
              placeholder="Your phone number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
              label="Phone Number"
              error={errorPhoneNumber}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="password"
              placeholder="Your password"
              name="password"
              value={password}
              onChange={onChange}
              label="Password"
              minlength="6"
              error={errorPassword}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              label="Confirm password"
              minlength="6"
              error={errorConfirmPassword}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <Back prevStep={prevStep}/>
        <Continue />
      </div>
    </form>
  );
};
