import { DatePicker, TimePicker, Button } from "antd";
import strings from "../strings";
import "./steps.scss";

interface ISecondStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
}

const SecondStep = ({ setCurrentStep, currentStep }: ISecondStepProps) => (
  <div className="step__wrapper">
    <div className="step__container">
      <DatePicker size="large" className="step__selector" />
      <TimePicker
        size="large"
        format="HH:mm"
        minuteStep={15}
        className="step__selector"
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

export default SecondStep;
