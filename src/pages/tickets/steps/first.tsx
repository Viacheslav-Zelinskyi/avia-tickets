import { Select, Button } from "antd";
import React from "react";
import strings from "../strings";
import "./steps.scss";

interface ICountrySelector {
  placeholder: string;
  countries: Array<Object>;
}

interface IFirstStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
}

const { Option } = Select;

const FirstStep = ({ setCurrentStep, currentStep }: IFirstStepProps) => (
  <div className="step__wrapper">
    <div className="step__container">
      <CountrySelector placeholder={strings.from} countries={[]} />
      <CountrySelector placeholder={strings.to} countries={[]} />
    </div>
    <div className="step__submit">
      <Button
        type="primary"
        size="large"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        {strings.submit}
      </Button>
    </div>
  </div>
);

const CountrySelector = ({ placeholder, countries }: ICountrySelector) => (
  <Select placeholder={placeholder} size="large" className="step__selector">
    {countries.map((country: any) => (
      <Option value={country.name.common}>{country.name.common}</Option>
    ))}
  </Select>
);

export default FirstStep;
