import { Select, Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ITicket } from "../../../models/ticket_interfaces";
import { setDestination, setFrom } from "../../../redux/reducers/ticket";
import "./steps.scss";

interface ICountrySelector {
  values: Array<string>;
  countries: Array<Object>;
}

interface ISelectPathProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  countries: Array<Object>;
  ticket: ITicket;
}

enum CountrySelectorType {
  From = "From",
  To = "To",
}

const { Option } = Select;

const SelectPath = ({
  setCurrentStep,
  currentStep,
  countries,
  ticket,
}: ISelectPathProps) => {
  const { t } = useTranslation();

  return (
    <div className="step__wrapper">
      <div className="step__container">
        <CountrySelector
          values={[CountrySelectorType.From, CountrySelectorType.To]}
          countries={countries}
        />
      </div>
      <div className="step__submit">
        <Button
          type="primary"
          size="large"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={!(ticket.from && ticket.to)}
        >
          {t("common.submit")}
        </Button>
      </div>
    </div>
  );
};

const CountrySelector = ({ values, countries }: ICountrySelector) => {
  const dispatch = useDispatch();

  const setTravelRoute = (country: string, value: string) => {
    if (value === CountrySelectorType.From) dispatch(setFrom(country));
    else dispatch(setDestination(country));
  };

  return (
    <>
      {values.map((value) => (
        <Select
          placeholder={value}
          size="large"
          className="step__selector"
          onChange={(country: string) => setTravelRoute(country, value)}
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
