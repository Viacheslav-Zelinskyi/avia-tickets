import "./tickets.scss";
import { Steps } from "antd";
import { useState } from "react";
import stepContent from "./steps";
import strings from "./strings";

const { Step } = Steps;

const Tickets = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRoundTrip, setIsRoundTrip] = useState(1);
  const [peopleCounter, setPeopleCounter] = useState({
    adult: 0,
    childrens: 0,
    infants: 0,
  });
  const stepProps = {
    setCurrentStep: setCurrentStep,
    currentStep: currentStep,
    setIsRoundTrip: setIsRoundTrip,
    isRoundTrip: isRoundTrip,
    setPeopleCounter: setPeopleCounter,
    peopleCounter: peopleCounter,
  };
  return (
    <div className="tickets__wrapper">
      <div className="tickets__container">
        <Steps current={currentStep}>
          <Step title={strings.firstStep} />
          <Step title={strings.secondStep} />
          <Step title={strings.thirdStep} />
          <Step title={strings.fourthStep} />
          <Step title={strings.fifthStep} />
        </Steps>
        {stepContent[currentStep](stepProps)}
      </div>
    </div>
  );
};

export default Tickets;
