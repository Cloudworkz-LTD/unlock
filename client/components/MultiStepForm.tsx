import React, { useState } from "react";
import { UnlockButton } from "@/components/ui/unlock-button";

interface FormData {
  // Phase 1
  name: string;
  email: string;

  // Phase 2
  serviceType: string;
  investmentHorizon: string;
  riskTolerance: string;

  // Phase 3
  occupation: string;
  incomeRange: string;
  investmentFrequency: string;

  // Phase 4
  chatDate: string;
  country: string;
}

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    serviceType: "",
    investmentHorizon: "",
    riskTolerance: "",
    occupation: "",
    incomeRange: "",
    investmentFrequency: "",
    chatDate: "",
    country: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Phase1 formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Phase2 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Phase3 formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Phase4 formData={formData} updateFormData={updateFormData} />;
      default:
        return <Phase1 formData={formData} updateFormData={updateFormData} />;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Let's start with your name & email";
      case 2:
        return "What is your primary investment goal?";
      case 3:
        return "Let's confirm a few more details";
      case 4:
        return "Would you like to speak with a consultant?";
      default:
        return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Please provide your name and email address below.";
      case 2:
        return "Help us better understand your investment needs";
      case 3:
        return "Please provide the following information about yourself.";
      case 4:
        return "Please provide your availability for a chat.";
      default:
        return "";
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-[100px] py-0 pb-[100px]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex ${currentStep === 3 || currentStep === 4 ? "min-h-[500px]" : "min-h-[450px]"} p-8 justify-center items-start gap-6 border border-unlock-gray-dark`}
        >
          {/* Left Column - Title, Description, Step Indicator */}
          <div className="flex flex-col justify-between items-start flex-1 self-stretch">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <h2 className="self-stretch text-unlock-light font-aeonik text-2xl md:text-3xl lg:text-4xl font-normal leading-[140%]">
                {getStepTitle()}
              </h2>
              <p className="text-form-light-blue font-aeonik text-sm font-light leading-[150%]">
                {getStepDescription()}
              </p>
            </div>

            {/* Step Indicator */}
            <div className="flex w-[201px] p-6 justify-center items-center gap-2.5">
              <div className="flex items-end">
                <span className="text-unlock-green font-aeonik text-8xl md:text-9xl lg:text-[150px] font-extralight leading-[90%] tracking-[-3px]">
                  {currentStep}
                </span>
                <span className="text-unlock-gray-dark font-aeonik text-4xl md:text-5xl lg:text-[75px] font-light leading-[90%] tracking-[-1.5px] mb-1">
                  /4
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <div className="flex flex-col justify-between items-start flex-1 self-stretch">
            {getStepContent()}

            {/* Navigation Buttons */}
            <div className="flex items-start gap-4">
              <UnlockButton
                variant="outline"
                size="default"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="rounded border border-form-light-blue text-form-light-blue font-medium uppercase tracking-wide hover:bg-form-light-blue hover:text-unlock-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === 1 ? "CANCEL" : "BACK"}
              </UnlockButton>

              <UnlockButton
                size="default"
                onClick={currentStep === 4 ? handleSubmit : nextStep}
                className={`rounded font-medium uppercase tracking-wide ${
                  currentStep === 4
                    ? "bg-unlock-green text-unlock-light hover:bg-unlock-green/90"
                    : "bg-white text-form-blue hover:bg-white/90"
                }`}
              >
                {currentStep === 4 ? "GET STARTED" : "NEXT"}
              </UnlockButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Phase 1: Name and Email
function Phase1({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      {/* Name Field */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="h-[21px] flex-1 text-white font-aeonik text-base font-normal leading-[150%]">
            Your Name
          </label>
        </div>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          placeholder="Enter Full name"
          className="flex py-2.5 px-8 items-center gap-2.5 self-stretch rounded bg-form-input-bg text-form-grey font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none focus:ring-2 focus:ring-unlock-green"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="h-[21px] flex-1 text-white font-aeonik text-base font-normal leading-[150%]">
            Your Email
          </label>
        </div>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="Enter Email Address"
          className="flex py-2.5 px-8 items-center gap-2.5 self-stretch rounded bg-form-input-bg text-form-grey font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none focus:ring-2 focus:ring-unlock-green"
        />
      </div>
    </div>
  );
}

// Phase 2: Investment Goals
function Phase2({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}) {
  const serviceTypes = [
    "Income Generation",
    "Capital Growth",
    "Tax Relief",
    "Diversification",
  ];

  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      {/* Service Type */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 pr-8 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-white font-aeonik text-base font-normal leading-[150%]">
            Service Type
          </label>
        </div>
        <div className="flex px-4 pr-8 items-start content-start gap-1 self-stretch flex-wrap">
          {serviceTypes.map((type) => (
            <div
              key={type}
              onClick={() => updateFormData("serviceType", type)}
              className={`flex py-2 px-5 justify-center items-center gap-1 rounded-md cursor-pointer ${
                formData.serviceType === type
                  ? "border border-white bg-white"
                  : "border border-form-grey"
              }`}
            >
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="5"
                  cy="5.5"
                  r="4.5"
                  fill={formData.serviceType === type ? "#00BB77" : "none"}
                  stroke={formData.serviceType === type ? "white" : "#737373"}
                />
              </svg>
              <span
                className={`font-aeonik text-sm leading-[150%] ${
                  formData.serviceType === type
                    ? "text-unlock-green font-normal"
                    : "text-form-grey font-light"
                }`}
              >
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Horizon */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-white font-aeonik text-base font-normal leading-[150%]">
            Your Investment Horizon
          </label>
        </div>
        <div className="flex py-2.5 px-4 items-center gap-2.5 self-stretch rounded border border-unlock-light">
          <select
            value={formData.investmentHorizon}
            onChange={(e) =>
              updateFormData("investmentHorizon", e.target.value)
            }
            className="flex-1 bg-transparent text-unlock-light font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none"
          >
            <option value="" className="bg-unlock-dark text-unlock-light">
              Select one...
            </option>
            <option value="short" className="bg-unlock-dark text-unlock-light">
              Short term (1-3 years)
            </option>
            <option value="medium" className="bg-unlock-dark text-unlock-light">
              Medium term (3-7 years)
            </option>
            <option value="long" className="bg-unlock-dark text-unlock-light">
              Long term (7+ years)
            </option>
          </select>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47271 10.4708C8.21236 10.7311 7.79025 10.7311 7.5299 10.4708L3.5299 6.47075C3.26955 6.2104 3.26955 5.78829 3.5299 5.52794C3.79025 5.26759 4.21236 5.26759 4.47271 5.52794L8.0013 9.05654L11.5299 5.52794C11.7902 5.26759 12.2124 5.26759 12.4727 5.52794C12.7331 5.78829 12.7331 6.2104 12.4727 6.47075L8.47271 10.4708Z"
              fill="#F5F7F0"
            />
          </svg>
        </div>
      </div>

      {/* Risk Tolerance */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-unlock-light font-aeonik text-base font-normal leading-[150%]">
            Risk Tolerance
          </label>
        </div>
        <textarea
          value={formData.riskTolerance}
          onChange={(e) => updateFormData("riskTolerance", e.target.value)}
          placeholder="Describe your risk tolerance..."
          className="flex h-[78px] py-2.5 px-8 items-start gap-2.5 self-stretch rounded bg-form-input-bg text-form-grey font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none focus:ring-2 focus:ring-unlock-green resize-none"
        />
      </div>
    </div>
  );
}

// Phase 3: Additional Details
function Phase3({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}) {
  const incomeRanges = [
    "Up to £12,570",
    "£12,571 to £50,270",
    "£50,271 to £150,270",
    "Over £150,000",
    "£101,000 -£500,000",
    "£501,000 +",
  ];

  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      {/* Occupation */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-white font-aeonik text-xl font-normal leading-[150%]">
            Occupation
          </label>
        </div>
        <textarea
          value={formData.occupation}
          onChange={(e) => updateFormData("occupation", e.target.value)}
          placeholder="Describe your occupation..."
          className="flex h-[78px] py-2.5 px-8 items-start gap-2.5 self-stretch rounded bg-form-input-bg text-form-grey font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none focus:ring-2 focus:ring-unlock-green resize-none"
        />
      </div>

      {/* Income Range */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 pr-8 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-white font-aeonik text-xl font-normal leading-[150%]">
            Income Range
          </label>
        </div>
        <div className="flex px-4 pr-8 items-start content-start gap-1 self-stretch flex-wrap">
          {incomeRanges.map((range) => (
            <div
              key={range}
              onClick={() => updateFormData("incomeRange", range)}
              className={`flex py-2 px-5 justify-center items-center gap-1 rounded-md cursor-pointer ${
                formData.incomeRange === range
                  ? "border border-white bg-white"
                  : "border border-form-grey"
              }`}
            >
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="5"
                  cy="5.5"
                  r="4.5"
                  fill={formData.incomeRange === range ? "#00BB77" : "none"}
                  stroke={formData.incomeRange === range ? "white" : "#737373"}
                />
              </svg>
              <span
                className={`font-aeonik text-sm leading-[150%] ${
                  formData.incomeRange === range
                    ? "text-unlock-green font-normal"
                    : "text-form-grey font-light"
                }`}
              >
                {range}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Frequency */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-white font-aeonik text-xl font-normal leading-[150%]">
            Investment Frequency
          </label>
        </div>
        <textarea
          value={formData.investmentFrequency}
          onChange={(e) =>
            updateFormData("investmentFrequency", e.target.value)
          }
          placeholder="How often do you invest..."
          className="flex h-[78px] py-2.5 px-8 items-start gap-2.5 self-stretch rounded bg-form-input-bg text-form-grey font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none focus:ring-2 focus:ring-unlock-green resize-none"
        />
      </div>
    </div>
  );
}

// Phase 4: Consultation Preferences
function Phase4({
  formData,
  updateFormData,
}: {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      {/* Preferred Chat Date */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="h-[21px] flex-1 text-white font-aeonik text-base font-normal leading-[150%]">
            Preferred Chat Date
          </label>
        </div>
        <div className="flex py-2.5 px-8 items-center gap-2.5 self-stretch rounded bg-form-input-bg">
          <input
            type="date"
            value={formData.chatDate}
            onChange={(e) => updateFormData("chatDate", e.target.value)}
            className="flex-1 bg-transparent text-form-grey font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none"
          />
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.33464 1.16602C5.70283 1.16602 6.0013 1.46449 6.0013 1.83268V4.49935C6.0013 4.86754 5.70283 5.16602 5.33464 5.16602C4.96645 5.16602 4.66797 4.86754 4.66797 4.49935V1.83268C4.66797 1.46449 4.96645 1.16602 5.33464 1.16602Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6667 1.16602C11.0349 1.16602 11.3333 1.46449 11.3333 1.83268V4.49935C11.3333 4.86754 11.0349 5.16602 10.6667 5.16602C10.2985 5.16602 10 4.86754 10 4.49935V1.83268C10 1.46449 10.2985 1.16602 10.6667 1.16602Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.33203 3.83333C2.96384 3.83333 2.66536 4.13181 2.66536 4.5V13.8333C2.66536 14.2015 2.96384 14.5 3.33203 14.5H12.6654C13.0336 14.5 13.332 14.2015 13.332 13.8333V4.5C13.332 4.13181 13.0336 3.83333 12.6654 3.83333H3.33203ZM1.33203 4.5C1.33203 3.39543 2.22746 2.5 3.33203 2.5H12.6654C13.7699 2.5 14.6654 3.39543 14.6654 4.5V13.8333C14.6654 14.9379 13.7699 15.8333 12.6654 15.8333H3.33203C2.22746 15.8333 1.33203 14.9379 1.33203 13.8333V4.5Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.33203 7.16667C1.33203 6.79848 1.63051 6.5 1.9987 6.5H13.9987C14.3669 6.5 14.6654 6.79848 14.6654 7.16667C14.6654 7.53486 14.3669 7.83333 13.9987 7.83333H1.9987C1.63051 7.83333 1.33203 7.53486 1.33203 7.16667Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.66797 9.83268C4.66797 9.46449 4.96645 9.16602 5.33464 9.16602H5.3413C5.70949 9.16602 6.00797 9.46449 6.00797 9.83268C6.00797 10.2009 5.70949 10.4993 5.3413 10.4993H5.33464C4.96645 10.4993 4.66797 10.2009 4.66797 9.83268Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.33203 9.83268C7.33203 9.46449 7.63051 9.16602 7.9987 9.16602H8.00536C8.37355 9.16602 8.67203 9.46449 8.67203 9.83268C8.67203 10.2009 8.37355 10.4993 8.00536 10.4993H7.9987C7.63051 10.4993 7.33203 10.2009 7.33203 9.83268Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 9.83268C10 9.46449 10.2985 9.16602 10.6667 9.16602H10.6733C11.0415 9.16602 11.34 9.46449 11.34 9.83268C11.34 10.2009 11.0415 10.4993 10.6733 10.4993H10.6667C10.2985 10.4993 10 10.2009 10 9.83268Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.66797 12.5007C4.66797 12.1325 4.96645 11.834 5.33464 11.834H5.3413C5.70949 11.834 6.00797 12.1325 6.00797 12.5007C6.00797 12.8688 5.70949 13.1673 5.3413 13.1673H5.33464C4.96645 13.1673 4.66797 12.8688 4.66797 12.5007Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.33203 12.5007C7.33203 12.1325 7.63051 11.834 7.9987 11.834H8.00536C8.37355 11.834 8.67203 12.1325 8.67203 12.5007C8.67203 12.8688 8.37355 13.1673 8.00536 13.1673H7.9987C7.63051 13.1673 7.33203 12.8688 7.33203 12.5007Z"
              fill="#00BB77"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 12.5007C10 12.1325 10.2985 11.834 10.6667 11.834H10.6733C11.0415 11.834 11.34 12.1325 11.34 12.5007C11.34 12.8688 11.0415 13.1673 10.6733 13.1673H10.6667C10.2985 13.1673 10 12.8688 10 12.5007Z"
              fill="#00BB77"
            />
          </svg>
        </div>
      </div>

      {/* Country */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex px-4 justify-center items-center gap-2.5 self-stretch">
          <label className="flex-1 text-white font-aeonik text-base font-normal leading-[150%]">
            Your Country
          </label>
        </div>
        <div className="flex py-2.5 px-4 items-center gap-2.5 self-stretch rounded border border-unlock-light">
          <select
            value={formData.country}
            onChange={(e) => updateFormData("country", e.target.value)}
            className="flex-1 bg-transparent text-unlock-light font-aeonik text-sm font-light leading-[150%] border-none focus:outline-none"
          >
            <option value="" className="bg-unlock-dark text-unlock-light">
              Select one...
            </option>
            <option value="uk" className="bg-unlock-dark text-unlock-light">
              United Kingdom
            </option>
            <option value="us" className="bg-unlock-dark text-unlock-light">
              United States
            </option>
            <option value="ca" className="bg-unlock-dark text-unlock-light">
              Canada
            </option>
            <option value="au" className="bg-unlock-dark text-unlock-light">
              Australia
            </option>
            <option value="other" className="bg-unlock-dark text-unlock-light">
              Other
            </option>
          </select>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47271 10.4708C8.21236 10.7311 7.79025 10.7311 7.5299 10.4708L3.5299 6.47075C3.26955 6.2104 3.26955 5.78829 3.5299 5.52794C3.79025 5.26759 4.21236 5.26759 4.47271 5.52794L8.0013 9.05654L11.5299 5.52794C11.7902 5.26759 12.2124 5.26759 12.4727 5.52794C12.7331 5.78829 12.7331 6.2104 12.4727 6.47075L8.47271 10.4708Z"
              fill="#F5F7F0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
