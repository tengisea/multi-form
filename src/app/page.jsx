"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  LastPage,
} from "./components";
import { initialFormValue } from "@/constants/constant";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormValue);

  useEffect(() => {
    try {
      const savedForm = localStorage.getItem("formValues");
      if (savedForm) {
        const parsed = JSON.parse(savedForm);
        setFormValues(parsed);
        setCurrentStep(parsed.step ?? 0);
      }
    } catch (error) {
      console.error("Local storage error:", error);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

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

  const addStep = () => {
    localStorage.setItem("formValues",JSON.stringify({ ...formValues, step: currentStep + 1 })
    );
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const Steps = [FirstPage, SecondPage, ThirdPage, LastPage];
  const CurrentStepComponent = Steps[currentStep];

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
          <CurrentStepComponent
            addStep={addStep}
            prevStep={prevStep}
            onChange={handleInputChange}
            formValues={formValues}
            formErrors={formErrors}
            handleInputChange={handleInputChange}
            updateFormErrors={updateFormErrors}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
