import { Continue, Input, Header } from ".";

const isEmpty = (value) => !value?.trim();
const validateStepOne = ({ firstName, lastName, username }) => {
  const validationErrors = {};

  if (isEmpty(firstName)) {
    validationErrors.firstName = "Enter your first name";
  }

  if (isEmpty(lastName)) {
    validationErrors.lastName = "Enter your last name";
  }

  if (isEmpty(username)) {
    validationErrors.username = "Enter your username";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;
  return { isFormValid, validationErrors };
};

export const FirstPage = ({
  addStep,
  onChange,
  formErrors,
  formValues,
  updateFormErrors,
}) => {
  const { firstName, lastName, username } = formValues;
  const {
    firstName: errorFirstName,
    lastName: errorLastName,
    username: errorUsername,
  } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepOne(formValues);

    if (isFormValid) {
      addStep()
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
        <Header/>
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="text"
              placeholder="Your first name"
              name="firstName"
              value={firstName}
              onChange={onChange}
              label="First name"
              error={errorFirstName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="text"
              value={lastName}
              placeholder="Your last name"
              name="lastName"
              onChange={onChange}
              label="Last name"
              error={errorLastName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Input
              type="text"
              placeholder="Your username"
              name="username"
              onChange={onChange}
              label="Username"
              value={username}
              error={errorUsername}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <Continue/>
      </div>
    </form>
  );
};
