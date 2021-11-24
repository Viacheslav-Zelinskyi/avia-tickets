import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { IPeopleCounter } from "../../../models/ticket_interfaces";
import { setPassengers } from "../../../redux/reducers/ticket";
import "./steps.scss";

interface ISelectPassengersProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  setPeopleCounter: React.Dispatch<React.SetStateAction<any>>;
  peopleCounter: IPeopleCounter;
}

interface IPeopleCounterProps {
  labels: string[];
  setPeopleCounter: React.Dispatch<React.SetStateAction<any>>;
  peopleCounter: any;
}

enum passengersType {
  adult,
  childrens,
  infants,
}

const SelectPassengers = ({
  setCurrentStep,
  currentStep,
  setPeopleCounter,
  peopleCounter,
}: ISelectPassengersProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const savePassengersNumber = () => {
    setCurrentStep(currentStep + 1);

    dispatch(setPassengers(peopleCounter));
  };

  return (
    <div className="step__wrapper">
      <div className="step__container">
        <div>
          <PeopleCounter
            labels={[
              t("tickets.adult"),
              t("tickets.childrens"),
              t("tickets.infants"),
            ]}
            setPeopleCounter={setPeopleCounter}
            peopleCounter={peopleCounter}
          />
        </div>
      </div>
      <div className="step__submit">
        <Button type="primary" size="large" onClick={savePassengersNumber}>
          {t("tickets.submit")}
        </Button>
      </div>
    </div>
  );
};

const PeopleCounter = ({
  labels,
  setPeopleCounter,
  peopleCounter,
}: IPeopleCounterProps) => (
  <div>
    {labels.map((label: string, index: number) => (
      <div className="step__peopleCounter">
        <h2>{label}</h2>
        <div className="step__counterBtn">
          <Button
            shape="circle"
            onClick={() =>
              setPeopleCounter({
                ...peopleCounter,
                [passengersType[index]]:
                  peopleCounter[passengersType[index]] - 1,
              })
            }
          >
            -
          </Button>
          <span>{peopleCounter[passengersType[index]]}</span>
          <Button
            shape="circle"
            onClick={() =>
              setPeopleCounter({
                ...peopleCounter,
                [passengersType[index]]:
                  peopleCounter[passengersType[index]] + 1,
              })
            }
          >
            +
          </Button>
        </div>
      </div>
    ))}
  </div>
);

export default SelectPassengers;
