import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { IPeopleCounter } from "../../models/ticket.interfaces";
import './peopleCounter.scss'

interface IPeopleCounterProps {
  labels: string[];
  setPeopleCounter: React.Dispatch<React.SetStateAction<IPeopleCounter | undefined>>;
  peopleCounter: any;
}

enum passengersType {
  adult,
  childrens,
  infants,
}

const PeopleCounter = ({
  labels,
  setPeopleCounter,
  peopleCounter,
}: IPeopleCounterProps) => {
  const increaseCounter = (index: number) =>
    setPeopleCounter({
      ...peopleCounter,
      [passengersType[index]]: peopleCounter[passengersType[index]] + 1,
    });

  const decreaseCounter = (index: number) => {
    setPeopleCounter({
      ...peopleCounter,
      [passengersType[index]]:
        peopleCounter[passengersType[index]] <= 0
          ? 0
          : peopleCounter[passengersType[index]] - 1,
    });
  };

  return (
    <div>
      {labels.map((label: string, index: number) => (
        <div className="peopleCounter">
          <h2>{label}</h2>
          <div className="peopleCounter__counterBtn">
            <Button shape="circle" onClick={() => decreaseCounter(index)}>
              <MinusOutlined />
            </Button>
            <span>{peopleCounter[passengersType[index]]}</span>
            <Button shape="circle" onClick={() => increaseCounter(index)}>
              <PlusOutlined />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleCounter;
