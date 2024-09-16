"use client";
import { useState } from "react";
import Image from "next/image";
import { CompanyName, CompanyFinance } from ".";

const FormStep = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex justify-center min-h-[100vh] h-full bg-gray-200">
      <div>
        <div className="flex justify-center mt-8 mb-3">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={100}
            height={56}
            className="mb-6"
          />
        </div>
        <div
          className={`w-[93vw] md:w-[560px] ${
            step === 1 ? "h-full max-h-[500px]" : "min-h-[480px]"
          } bg-white rounded-lg shadow-lg p-8 relative mb-8`}
        >
          {/* Tabs on top */}
          <div className="flex justify-between items-center mb-6 relative">
            <div className="flex w-full gap-2">
              <div className={`w-[49%] bg-[#F1F4F0] rounded-[8px] py-1`}></div>
              <div className={`w-[49%] bg-[#F1F4F0] rounded-[8px] py-1`}></div>
            </div>
            {/* Tab Slider */}
            <div
              className={`absolute inset-0 w-[49%] h-1 bg-secondary rounded-[8px] py-1 transition-transform duration-500 ease-out`}
              style={{ transform: `translateX(${step === 2 ? "104%" : "0"})` }}
            />
          </div>

          {/* Step 1: Company Name */}
          {step === 1 && <CompanyName handleNextStep={handleNextStep} />}

          {/* Step 2: Upload Financials */}
          {step === 2 && <CompanyFinance handlePrevStep={handlePrevStep} />}
        </div>
      </div>
    </div>
  );
};

export default FormStep;
