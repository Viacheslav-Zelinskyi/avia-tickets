import { Select, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setDestination, setFrom } from "../../../redux/reducers/ticket";
import strings from "../strings";
import "./steps.scss";

interface ICountrySelector {
  placeholders: Array<string>;
  countries: Array<Object>;
}

interface ISelectPathProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  countries: Array<Object>;
}

const { Option } = Select;

const SelectPath = ({
  setCurrentStep,
  currentStep,
  countries,
}: ISelectPathProps) => (
  <div className="step__wrapper">
    <div className="step__container">
      <CountrySelector
        placeholders={[strings.from, strings.to]}
        countries={countries}
      />
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

const CountrySelector = ({ placeholders, countries }: ICountrySelector) => {
  const dispatch = useDispatch();
  const setTravelRoute = (country: string, placeholder: string) => {
    if (placeholder === "From") dispatch(setFrom(country));
    else dispatch(setDestination(country));
  };
  return (
    <>
      {placeholders.map((placeholder) => (
        <Select
          placeholder={placeholder}
          size="large"
          className="step__selector"
          onChange={(country: string) => setTravelRoute(country, placeholder)}
        >
          {countries.map((country: any) => (
            <Option value={country.name.common}>{country.name.common}</Option>
          ))}
        </Select>
      ))}
    </>
  );
};

export default SelectPath;
