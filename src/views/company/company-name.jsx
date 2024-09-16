"use client";
import { useState } from "react";
import { Button } from "@/components";
import { Input } from "@material-tailwind/react";

const CompanyName = ({ handleNextStep }) => {
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="flex flex-col h-full justify-between gap-8">
      <div>
        <h1 className="text-[32px] font-mulish mt-4 mb-8 font-bold text-primary">
          Create your first report
        </h1>
        <p className="font-mulish font-bold text-[20px] text-primary">
          What is the Company name?
        </p>
        <div className="mt-3">
          <Input
            label="Company name"
            color="#E4E4E7"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-fit ml-auto mb-8">
        <Button
          handleClick={handleNextStep}
          isDisable={!companyName}
          text="Continue"
          isFull
        />
      </div>
    </div>
  );
};

export default CompanyName;
