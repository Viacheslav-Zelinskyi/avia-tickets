import "./Tickets.scss";
import { Button, DatePicker, Steps, TimePicker } from "antd";
import { Select } from "antd";
import { useState } from "react";

const { Step } = Steps;
const { Option } = Select;

const Tickets = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepContent = [
    <div>
      <div className="tickets__step">
        <Select
          placeholder="From"
          size="large"
          className="tickets__step--selector"
        ></Select>
        <Select
          placeholder="To"
          size="large"
          className="tickets__step--selector"
        ></Select>
      </div>
      <div className="tickets__step--submit">
        <Button
          type="primary"
          size="large"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Submit
        </Button>
      </div>
    </div>,
    <div>
      <div className="tickets__step">
        <DatePicker size="large" className="tickets__step--selector" />
        <TimePicker
          size="large"
          format="HH:mm"
          minuteStep={15}
          className="tickets__step--selector"
        />
      </div>
      <div className="tickets__step--submit">
        <Button
          type="primary"
          size="large"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Submit
        </Button>
      </div>
    </div>,
  ];
  return (
    <div className="tickets__wrapper">
      <div className="tickets__container">
        <Steps current={currentStep}>
          <Step title="Choosing a path" />
          <Step title="Choosing a date" />
          <Step title="Flight selection" />
          <Step title="Who's coming?" />
          <Step title="Tickets summary" />
        </Steps>
        {stepContent[currentStep]}
      </div>
    </div>
  );
};

export default Tickets;
