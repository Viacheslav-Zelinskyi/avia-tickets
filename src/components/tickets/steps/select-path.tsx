import { Select, Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ITicket } from "../../../models/ticket_interfaces";
import {
  setDestination,
  setDestinationTimezone,
  setFrom,
  setFromTimezone,
} from "../../../redux/reducers/ticket";
import "./steps.scss";

interface ICountrySelector {
  values: Array<string>;
  countries: Array<any>;
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

  const setTravelRoute = (index: number, value: string) => {
    if (value === CountrySelectorType.From) {
      dispatch(setFrom(countries[index].name.common));
      dispatch(setFromTimezone(countries[index].timezones[0]));
    } else {
      dispatch(setDestination(countries[index].name.common));
      dispatch(setDestinationTimezone(countries[index].timezones[0]));
    }
  };

  return (
    <>
      {values.map((value) => (
        <Select
          placeholder={value}
          size="large"
          className="step__selector"
          onChange={(index: number) => setTravelRoute(index, value)}
        >
          {countries.map((country: any, index: number) => (
            <Option value={index}>{country.name.common}</Option>
          ))}
        </Select>
      ))}
    </>
  );
};

export default SelectPath;
