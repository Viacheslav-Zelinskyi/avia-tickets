import { DatePicker, TimePicker, Button } from "antd";
import strings from "../strings";
import "./steps.scss";

interface ISelectDateProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
}

const timeFormat = "HH:mm";

const SelectDate = ({ setCurrentStep, currentStep }: ISelectDateProps) => (
  <div className="step__wrapper">
    <div className="step__container">
      <DatePicker size="large" className="step__selector" />
      <TimePicker
        size="large"
        format={timeFormat}
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

export default SelectDate;
