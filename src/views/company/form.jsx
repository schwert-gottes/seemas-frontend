"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@material-tailwind/react";
import { Cross, File, Upload } from "@/icons";
import { Button } from "@/components";
import { useRouter } from "next/navigation";

const FormStep = () => {
  const [step, setStep] = useState(1); // Step 1 as default
  const [companyName, setCompanyName] = useState(""); // For company name input
  const [file, setFile] = useState(null); // For file upload
  const [uploadProgress, setUploadProgress] = useState(0); // For upload progress
  const router = useRouter();

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1); // Move to the next step
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1); // Move to the previous step
    }
  };

  const handleReport = () => {
    router.push("/report");
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    const validFileTypes = [
      "text/csv", // CSV
      "application/vnd.ms-excel", // XLS
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX
    ];

    // Check if the file is one of the valid types
    if (uploadedFile && validFileTypes.includes(uploadedFile.type)) {
      setFile(uploadedFile); // Set the file if it's a valid format
      simulateUpload(); // Simulate file upload progress
    } else {
      alert("Please upload a valid Excel or CSV file");
    }
  };

  // Simulate the file upload progress
  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval); // Stop once 100% is reached
      }
    }, 100); // Progress every 100ms
  };

  // Function to handle file removal
  const handleRemoveFile = () => {
    setFile(null);
    setUploadProgress(0);
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
          {step === 1 && (
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
          )}

          {/* Step 2: Upload Financials */}
          {step === 2 && (
            <div
              className={`flex flex-col justify-between gap-8 ${
                file ? "min-h-[inherit]" : "h-full"
              }`}
            >
              <div>
                <h1 className="text-[32px] font-mulish mt-4 mb-8 font-bold text-primary">
                  Create your first report
                </h1>
                <p className="font-mulish font-bold text-[20px] text-primary">
                  Upload Company Financials
                </p>
                <p className="font-mulish font-medium text-[16px] mb-4 mt-[4px] text-[#3F3F46]">
                  The financials should include a balance sheet, income
                  statement, and ownership structure.
                </p>

                {/* File upload box */}
                {file ? (
                  <div className="border rounded-md px-4 py-4 ">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <File />
                        <div>
                          <p className="text-sm font-medium text-primary font-mulish">
                            {file.name}
                          </p>
                          <p className="text-sm text-[#A1A1AA] font-medium font-mulish">{`${(
                            file.size /
                            (1024 * 1024)
                          ).toFixed(2)} MB`}</p>
                        </div>
                      </div>
                      <div
                        onClick={handleRemoveFile}
                        className="mt-2 cursor-pointer"
                      >
                        <Cross width={10} height={10} />
                      </div>
                    </div>
                    <div className="relative w-full mt-4">
                      <div className="h-2 bg-gray-300 rounded-full">
                        <div
                          className="h-full bg-secondary rounded-full transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className="text-right text-sm font-medium text-primary font-mulish">
                        {uploadProgress}%
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-md px-4 py-12 mb-6 text-center relative">
                    <input
                      type="file"
                      accept=".csv, .xls, .xlsx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="mx-auto w-fit mb-3">
                      <Upload />
                    </div>
                    <p className="text-sm text-[#52525B] font-medium font-mulish mb-1">
                      <span className="text-secondary font-semibold">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-sm text-[#52525B] font-medium font-mulish">
                      Excel or CSV
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-between flex-col xs:flex-row items-center gap-y-8">
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-[12px] leading-none h-fit w-fit rounded-full font-semibold text-base font-mulish text-[#262626] border border-[#E5E5E5] order-last xs:order-first transition-all duration-300 scale-1 hover:scale-[1.025]"
                >
                  Back
                </button>
                <Button
                  handleClick={handleReport}
                  isDisable={!file || uploadProgress < 100}
                  text="Generate Report"
                  isFull
                />
                {/* <Link
                  href={file ? "/report" : ""}
                  className={`px-4 py-3 w-fit rounded-full font-semibold text-base font-mulish text-center ${
                    file && uploadProgress === 100
                      ? "bg-secondary text-white"
                      : "text-[#A1A1AA] cursor-not-allowed bg-[#F4F4F5]"
                  }`}
                  disabled={!file || uploadProgress < 100} // Disable Generate Report button if no file is uploaded or upload not completed
                >
                  Generate Report
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormStep;
