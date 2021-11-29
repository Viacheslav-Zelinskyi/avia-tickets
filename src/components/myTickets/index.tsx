import { Button as ButtonBase, Table } from "antd";
import { useState } from "react";
import { TFunction, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IPeopleCounter } from "../../models/ticket_interfaces";
import { addTicket } from "../../redux/reducers/allTickets";
import { getDateFromTimestamp } from "../../utils/date.helpers";
import { exportToJson, uploadJson } from "../../utils/download.helpers";
import EditTicket from "./editTicket";
import "./myTickets.scss";

interface IButton {
  text: string;
  onClick: (e: any) => void;
}

interface IEditMode {
  id: number | null;
  mode: boolean;
}

const MyTickets = () => {
  const [editMode, setEditMode] = useState<IEditMode>({
    id: null,
    mode: false,
  });

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const tickets: Array<Object> = useSelector((store: any) => store.allTickets);

  const uploadTickets = () => {
    uploadJson((ticket: Array<Object>) => {
      dispatch(addTicket(ticket));
    });
  };

  return (
    <div className="mytickets__wrapper">
      {editMode.mode ? (
        <EditTicket
          id={editMode.id}
          closeEditor={() => setEditMode({ mode: false, id: null })}
        />
      ) : null}
      <div className="mytickets__table">
        <Table dataSource={tickets} columns={columns(t, setEditMode)} />
      </div>
      <div className="mytickets__btnWrapper">
        <div className="mytickets__btnBlock">
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

const actionBtnBlock = (record: any, t: TFunction, setEditMode: any) => (
  <div className="mytickets__actionBtnBlock">
    <Button
      text={t("myTickets.edit")}
      onClick={() => setEditMode({ mode: true, id: record.id })}
    />
    <Button
      text={t("myTickets.saveJSON")}
      onClick={() => exportToJson(record)}
    />
  </div>
);

const showPassengers = (passengers: IPeopleCounter, t: TFunction) =>
  `${t("myTickets.adult") + passengers.adult} ${
    t("myTickets.childrens") + passengers.childrens
  } ${t("myTickets.infants") + passengers.infants}`;

const showDepartureDate = (timestamp: number | undefined, record: any) => {
  if (timestamp) {
    return getDateFromTimestamp(timestamp, record.fromTimezone);
  }
};

const showReturnDate = (timestamp: number | undefined, record: any) => {
  if (timestamp) {
    return getDateFromTimestamp(timestamp, record.destinationTimezone);
  }
};

const columns = (t: TFunction, setEditMode: any) => [
  {
    title: t("myTickets.id"),
    dataIndex: "id",
    key: "id",
    editable: true,
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
    render: showDepartureDate,
  },
  {
    title: t("myTickets.returnDate"),
    dataIndex: "returnDate",
    key: "returnDate",
    render: showReturnDate,
  },
  {
    title: t("myTickets.passengers"),
    dataIndex: "passengers",
    key: "passengers",
    render: (passengers: IPeopleCounter) => showPassengers(passengers, t),
  },
  {
    title: t("myTickets.actions"),
    dataIndex: "action",
    key: "action",
    render: (value: any, record: Object) =>
      actionBtnBlock(record, t, setEditMode),
  },
];

export default MyTickets;
