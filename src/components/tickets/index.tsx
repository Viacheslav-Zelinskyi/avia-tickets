import "./tickets.scss";
import { Steps } from "antd";
import { useEffect, useState } from "react";
import stepContent from "./steps";
import strings from "./strings";
import { IPeopleCounter, ITicket } from "../../models/ticket_interfaces";
import { getCountries } from "../../api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const Tickets = () => {
  const ticket: ITicket = useSelector((store: any) => store.ticket);

  const navigate = useNavigate();

  const [countries, setCountries] = useState<Array<Object>>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isRoundTrip, setIsRoundTrip] = useState<number>(1);
  const [peopleCounter, setPeopleCounter] = useState<IPeopleCounter>({
    adult: 0,
    childrens: 0,
    infants: 0,
  });

  useEffect(() => {
    getCountries()
      .then((countries) => setCountries(countries))
      .catch((err) => alert(err));
  }, []);

  const stepProps = {
    setCurrentStep: setCurrentStep,
    currentStep: currentStep,
    setIsRoundTrip: setIsRoundTrip,
    isRoundTrip: isRoundTrip,
    setPeopleCounter: setPeopleCounter,
    peopleCounter: peopleCounter,
    countries: countries,
    ticket: ticket,
    navigate: navigate,
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
