import "./Tickets.scss";
import { Button, Card, DatePicker, Radio, Steps, TimePicker } from "antd";
import { Select } from "antd";
import { useState } from "react";

const { Step } = Steps;
const { Option } = Select;

const Tickets = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRoundTrip, setIsRoundTrip] = useState(1);
  const [peopleCounter, setPeopleCounter] = useState({
    adult: 0,
    children: 0,
    inframs: 0,
  });
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
    <div>
      <div className="flightslist">
        <Radio.Group
          className="flightslist__radio"
          defaultValue={1}
          onChange={(e) => setIsRoundTrip(e.target.value)}
        >
          <Radio value={1}>Round-trip</Radio>
          <Radio value={0}>One-way</Radio>
        </Radio.Group>
        {isRoundTrip ? (
          <div>
            <h2 className="tickets__header">Select date: </h2>
            <div className="tickets__step">
              <DatePicker size="large" className="tickets__step--selector" />
              <TimePicker
                size="large"
                format="HH:mm"
                minuteStep={15}
                className="tickets__step--selector"
              />
            </div>
          </div>
        ) : null}
        <div className="tickets__step--submit">
          <Button
            type="primary"
            size="large"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>,
    <>
      <div className="tickets__counterContainer">
        <div>
          <div className="tickets__peopleCounter">
            <h2>Adult: </h2>
            <Button
              shape="circle"
              onClick={() =>
                setPeopleCounter({
                  children: peopleCounter.children,
                  inframs: peopleCounter.inframs,
                  adult: peopleCounter.adult - 1,
                })
              }
            >
              -
            </Button>
            <span>{peopleCounter.adult}</span>
            <Button
              shape="circle"
              onClick={() =>
                setPeopleCounter({
                  children: peopleCounter.children,
                  inframs: peopleCounter.inframs,
                  adult: peopleCounter.adult + 1,
                })
              }
            >
              +
            </Button>
          </div>
          <div className="tickets__peopleCounter">
            <h2>Children: </h2>
            <Button
              shape="circle"
              onClick={() =>
                setPeopleCounter({
                  children: peopleCounter.children - 1,
                  inframs: peopleCounter.inframs,
                  adult: peopleCounter.adult,
                })
              }
            >
              -
            </Button>
            <span>{peopleCounter.children}</span>
            <Button
              shape="circle"
              onClick={() =>
                setPeopleCounter({
                  children: peopleCounter.children + 1,
                  inframs: peopleCounter.inframs,
                  adult: peopleCounter.adult,
                })
              }
            >
              +
            </Button>
          </div>
          <div className="tickets__peopleCounter">
            <h2>Inframs: </h2>
            <Button
              shape="circle"
              onClick={() =>
                setPeopleCounter({
                  children: peopleCounter.children,
                  inframs: peopleCounter.inframs - 1,
                  adult: peopleCounter.adult,
                })
              }
            >
              -
            </Button>
            <span>{peopleCounter.inframs}</span>
            <Button
              shape="circle"
              onClick={() =>
                setPeopleCounter({
                  children: peopleCounter.children,
                  inframs: peopleCounter.inframs + 1,
                  adult: peopleCounter.adult,
                })
              }
            >
              +
            </Button>
          </div>
        </div>
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
    </>,
    <div className="tickets__summaryContainer">
      <Card title="Summary: " type="inner">
        <p>From: Minsk</p>
        <p>To: Kyiv</p>
        <p>Departure date and time: 18.11.2021 15:15 (UTC + 3:00)</p>
        <p>Arrival date and time: 18.11.2021 18:00 (UTC + 2:00)</p>
        <p>Date of return departure: 25.11.2021 10:00 (UTC + 2:00)</p>
        <p>Passengers:</p>
        <ul style={{ marginTop: "-15px" }}>
          <li>Adult: 2</li>
          <li>Inframs: 1</li>
          <li>Childrens: 1</li>
        </ul>
        <div className="tickets__step--submit">
          <Button
            type="primary"
            size="large"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Buy
          </Button>
        </div>
      </Card>
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
