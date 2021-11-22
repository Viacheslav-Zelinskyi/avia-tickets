import { Button as ButtonBase, Table } from "antd";
import "./myTickets.scss";
import strings from "./strings";

interface IButton {
  text: string;
}

const MyTickets = () => {
  return (
    <div className="mytickets__wrapper">
      <div className="mytickets__table">
        <Table dataSource={[]} columns={columns} />
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

const columns = [
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Departure date",
    dataIndex: "departure",
    key: "departure",
  },
  {
    title: "Arrive date",
    dataIndex: "arrive",
    key: "arrive",
  },
  {
    title: "Passengers",
    dataIndex: "passengers",
    key: "passengers",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

export default MyTickets;
