"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  LastPage,
  Header,
  Input,
} from "./components";
import { initialFormValue } from "@/constants/constant";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValue);

  console.log("formvalues", formValues);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const addStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const CurrentStepComponents = [FirstPage, SecondPage, ThirdPage, LastPage][
    currentStep
  ];

  return (
    <div className="flex justify-center min-h-screen">
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
            Input={Input}
            formValues={formValues}
            onChange={handleInputChange}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
