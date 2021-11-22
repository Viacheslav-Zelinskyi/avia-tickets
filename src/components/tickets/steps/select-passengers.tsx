import { Button } from "antd";
import strings from "../strings";
import "./steps.scss";

interface ISelectPassengersProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  setPeopleCounter: React.Dispatch<React.SetStateAction<any>>;
  peopleCounter: {
    adult: number;
    childrens: number;
    infants: number;
  };
}

interface IPeopleCounterProps {
  labels: string[];
  setPeopleCounter: React.Dispatch<React.SetStateAction<any>>;
  peopleCounter: any;
}

const SelectPassengers = ({
  setCurrentStep,
  currentStep,
  setPeopleCounter,
  peopleCounter,
}: ISelectPassengersProps) => (
  <div className="step__wrapper">
    <div className="step__container">
      <div>
        <PeopleCounter
          labels={[strings.adult, strings.childrens, strings.infants]}
          setPeopleCounter={setPeopleCounter}
          peopleCounter={peopleCounter}
        />
      </div>
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

const PeopleCounter = ({
  labels,
  setPeopleCounter,
  peopleCounter,
}: IPeopleCounterProps) => (
  <div>
    {labels.map((label: string) => (
      <div className="step__peopleCounter">
        <h2>{label[0].toUpperCase() + label.slice(1)}: </h2>
        <div className="step__counterBtn">
          <Button
            shape="circle"
            onClick={() =>
              setPeopleCounter({
                ...peopleCounter,
                [label]: peopleCounter[label] - 1,
              })
            }
          >
            -
          </Button>
          <span>{peopleCounter[label]}</span>
          <Button
            shape="circle"
            onClick={() =>
              setPeopleCounter({
                ...peopleCounter,
                [label]: peopleCounter[label] + 1,
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
