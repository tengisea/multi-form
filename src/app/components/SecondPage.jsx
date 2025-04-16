import { Back, Continue, Input } from ".";

export const SecondPage = ({
  addStep,
  Header,
  onChange,
  prevStep,
  formErrors,
  formValues,
  updateFormErrors,
}) => {
  const isEmpty = (value) => !value?.trim();
  const validateStepTwo = ({
    email,
    phoneNumber,
    password,
    confirmPassword,
  }) => {
    const validationErrors = {};

    if (isEmpty(email)) {
      validationErrors.email = "Enter your email";
    }

    if (isEmpty(phoneNumber)) {
      validationErrors.phoneNumber = "Enter your phone number";
    }

    if (isEmpty(password)) {
      validationErrors.password = "Enter your password";
    }

    if (isEmpty(confirmPassword)) {
      validationErrors.confirmPassword = "Repeat your password";
    }

    const isFormValid = Object.keys(validationErrors).length === 0;
    return { isFormValid, validationErrors };
  };

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
              onChange={onChange}
              label="Password"
              minlength="6"
              error={errorPassword}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={onChange}
              label="Confirm password"
              minlength="6"
              error={errorConfirmPassword}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <Back/>
        <Continue />
      </div>
    </form>
  );
};
