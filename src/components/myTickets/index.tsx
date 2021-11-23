import { Button as ButtonBase, Table } from "antd";
import { useSelector } from "react-redux";
import { IPeopleCounter } from "../../models/ticket_interfaces";
import { getDateFromTimestamp } from "../../utils/date.helpers";
import "./myTickets.scss";
import strings from "./strings";

interface IButton {
  text: string;
}

const MyTickets = () => {
  const tickets: Array<Object> = useSelector((store: any) => store.allTickets);

  return (
    <div className="mytickets__wrapper">
      <div className="mytickets__table">
        <Table dataSource={tickets} columns={columns} />
      </div>
      <div className="mytickets__btnWrapper">
        <div className="mytickets__btnBlock">
          <Button text={strings.saveJSON} />
          <Button text={strings.uploadJSON} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ text }: IButton) => (
  <ButtonBase type="primary">{text}</ButtonBase>
);

const showPassengers = (passengers: IPeopleCounter) =>
  `${strings.adult + passengers.adult} ${
    strings.childrens + passengers.childrens
  } ${strings.infants + passengers.infants}`;

const showDate = (timestamp: number | undefined) =>
  timestamp ? getDateFromTimestamp(timestamp) : null;

const columns = [
  {
    title: strings.id,
    dataIndex: "id",
    key: "id",
  },
  {
    title: strings.from,
    dataIndex: "from",
    key: "from",
  },
  {
    title: strings.to,
    dataIndex: "to",
    key: "to",
  },
  {
    title: strings.departureDate,
    dataIndex: "departureDate",
    key: "departureDate",
    render: showDate,
  },
  {
    title: strings.returnDate,
    dataIndex: "returnDate",
    key: "returnDate",
    render: showDate,
  },
  {
    title: strings.passengers,
    dataIndex: "passengers",
    key: "passengers",
    render: showPassengers,
  },
  {
    title: strings.actions,
    dataIndex: "actions",
    key: "actions",
  },
];

export default MyTickets;
