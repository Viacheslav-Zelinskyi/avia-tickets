import { Button } from "antd";
import strings from "../strings";
import "./steps.scss";

interface IFourthStepProps {
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
  label: string;
  setPeopleCounter: React.Dispatch<React.SetStateAction<any>>;
  peopleCounter: any;
}

const FourthStep = ({
  setCurrentStep,
  currentStep,
  setPeopleCounter,
  peopleCounter,
}: IFourthStepProps) => (
  <div className="step__wrapper">
    <div className="step__container">
      <div>
        <PeopleCounter
          label={strings.adult}
          setPeopleCounter={setPeopleCounter}
          peopleCounter={peopleCounter}
        />
        <PeopleCounter
          label={strings.childrens}
          setPeopleCounter={setPeopleCounter}
          peopleCounter={peopleCounter}
        />
        <PeopleCounter
          label={strings.infants}
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
  label,
  setPeopleCounter,
  peopleCounter,
}: IPeopleCounterProps) => (
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
);

export default FourthStep;
