import { Button as ButtonBase, Table } from "antd";
import { TFunction, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IPeopleCounter } from "../../models/ticket_interfaces";
import { addTicket } from "../../redux/reducers/allTickets";
import { getDateFromTimestamp } from "../../utils/date.helpers";
import { exportToJson, uploadJson } from "../../utils/download.helpers";
import "./myTickets.scss";

interface IButton {
  text: string;
  onClick: (e: any) => void;
}

const MyTickets = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const tickets: Array<Object> = useSelector((store: any) => store.allTickets);

  const uploadTickets = () => {
    uploadJson((tickets: Array<Object>) => {
      tickets.map((ticket) => dispatch(addTicket(ticket)));
    });
  };

  return (
    <div className="mytickets__wrapper">
      <div className="mytickets__table">
        <Table dataSource={tickets} columns={columns(t)} />
      </div>
      <div className="mytickets__btnWrapper">
        <div className="mytickets__btnBlock">
          <Button
            text={t("myTickets.saveJSON")}
            onClick={(e) => exportToJson(tickets)}
          />
          <Button text={t("myTickets.uploadJSON")} onClick={uploadTickets} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ text, onClick }: IButton) => (
  <ButtonBase type="primary" onClick={onClick}>
    {text}
  </ButtonBase>
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
    title: t("common.from"),
    dataIndex: "from",
    key: "from",
  },
  {
    title: t("common.to"),
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
