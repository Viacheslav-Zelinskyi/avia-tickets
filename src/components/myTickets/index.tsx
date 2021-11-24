import { Button as ButtonBase, Table } from "antd";
import { TFunction, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IPeopleCounter } from "../../models/ticket_interfaces";
import { getDateFromTimestamp } from "../../utils/date.helpers";
import "./myTickets.scss";

interface IButton {
  text: string;
}

const MyTickets = () => {
  const { t } = useTranslation();

  const tickets: Array<Object> = useSelector((store: any) => store.allTickets);

  return (
    <div className="mytickets__wrapper">
      <div className="mytickets__table">
        <Table dataSource={tickets} columns={columns(t)} />
      </div>
      <div className="mytickets__btnWrapper">
        <div className="mytickets__btnBlock">
          <Button text={t("myTickets.saveJSON")} />
          <Button text={t("myTickets.uploadJSON")} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ text }: IButton) => (
  <ButtonBase type="primary">{text}</ButtonBase>
);

const showPassengers = (passengers: IPeopleCounter, t: TFunction) =>
  `${t("myTickets.adult") + passengers.adult} ${
    t("myTickets.childrens") + passengers.childrens
  } ${t("myTickets.infants") + passengers.infants}`;

const showDate = (timestamp: number | undefined) =>
  timestamp ? getDateFromTimestamp(timestamp) : null;

const columns = (t: TFunction) => [
  {
    title: t("myTickets.id"),
    dataIndex: "id",
    key: "id",
  },
  {
    title: t("myTickets.from"),
    dataIndex: "from",
    key: "from",
  },
  {
    title: t("myTickets.to"),
    dataIndex: "to",
    key: "to",
  },
  {
    title: t("myTickets.departureDate"),
    dataIndex: "departureDate",
    key: "departureDate",
    render: showDate,
  },
  {
    title: t("myTickets.returnDate"),
    dataIndex: "returnDate",
    key: "returnDate",
    render: showDate,
  },
  {
    title: t("myTickets.passengers"),
    dataIndex: "passengers",
    key: "passengers",
    render: (passengers: IPeopleCounter) => showPassengers(passengers, t),
  },
  {
    title: t("myTickets.actions"),
    dataIndex: "actions",
    key: "actions",
  },
];

export default MyTickets;
