"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  LastPage,
  Header,
} from "./components";
import { initialFormValue } from "@/constants/constant";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState((initialFormValue) => {
    try {
      const savedForm = localStorage.getItem("formValues");

      return savedForm ? JSON.parse(savedForm) : 0;
    } catch (error) {
      console.error("Local storage error:", error);

      return 0;
    }
  });

  const [formErrors, setFormErrors] = useState(initialFormValue);

  const updateFormErrors = (errors) => {
    setFormErrors((previousErrors) => ({ ...previousErrors, ...errors }));
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    setFormErrors((previousErrors) => ({ ...previousErrors, [name]: "" }));
    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: files && files.length ? files[0] : value,
    }));
  };

  useEffect(() => {
    const formValuesFromStorage = localStorage.getItem("formValues");
    const parsedValues = JSON.parse(formValuesFromStorage);
    setFormValues(parsedValues);
    setCurrentStep(parsedValues.step ?? 0);
  }, []);

  const addStep = () => {
    localStorage.setItem(
      "formValues",
      JSON.stringify({ ...formValues, step: currentStep + 1 })
    );

    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const CurrentStepComponents = [FirstPage, SecondPage, ThirdPage, LastPage][
    currentStep
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <CurrentStepComponents
            addStep={addStep}
            prevStep={prevStep}
            Header={Header}
            formValues={formValues}
            onChange={handleInputChange}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            updateFormErrors={updateFormErrors}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
