import { Card, Button } from "antd";
import strings from "../strings";
import "./steps.scss";

interface IFifthStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
}

const FifthStep = ({ setCurrentStep, currentStep }: IFifthStepProps) => (
  <div className="step__summaryContainer">
    <Card className="step__summaryCard" title={strings.summary} type="inner">
      <p>{strings.from + ":"}</p>
      <p>{strings.to + ":"}</p>
      <p>{strings.departureAt}</p>
      <p>{strings.returnAt}</p>
      <span>{strings.passengers}</span>
      <ul>
        <li>{strings.Adult}</li>
        <li>{strings.Childrens}</li>
        <li>{strings.Infants}</li>
      </ul>
      <div className="step__submitWrapper">
        <div className="step__submit">
          <Button
            type="primary"
            size="large"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            {strings.buy}
          </Button>
        </div>
      </div>
    </Card>
  </div>
);

export default FifthStep;
