import { DatePicker, Radio, TimePicker, Button } from "antd";
import strings from "../strings";
import "./steps.scss";

interface ISelectFlightProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  setIsRoundTrip: React.Dispatch<React.SetStateAction<number>>;
  isRoundTrip: number;
}

const SelectFlight = ({
  setCurrentStep,
  currentStep,
  setIsRoundTrip,
  isRoundTrip,
}: ISelectFlightProps) => {
  return (
    <div className="step__wrapper">
      <Radio.Group
        className="step__radio"
        defaultValue={1}
        onChange={(e) => setIsRoundTrip(e.target.value)}
      >
        <Radio value={1}>{strings.roundTrip}</Radio>
        <Radio value={0}>{strings.oneWay}</Radio>
      </Radio.Group>
      <div className="step__container">
        {isRoundTrip ? (
          <div>
            <h2 className="step__header">{strings.selectDate}</h2>
            <div>
              <DatePicker size="large" className="step__selector" />
              <TimePicker
                size="large"
                format="HH:mm"
                minuteStep={15}
                className="step__selector"
              />
            </div>
          </div>
        ) : null}
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
};

export default SelectFlight;
