import { Table } from "antd";
import "./MyTickets.scss";

const MyTickets = () => {
  return (
    <div className="mytickets__wrapper">
      <div className="mytickets__table">
          <Table dataSource={[]} columns={columns}/>
      </div>
    </div>
  );
};

const columns = [
    {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
      },
      {
        title: 'To',
        dataIndex: 'to',
        key: 'to',
      },
      {
        title: 'Departure date',
        dataIndex: 'departure',
        key: 'departure',
      },
      {
        title: 'Arrive date',
        dataIndex: 'arrive',
        key: 'arrive',
      },
      {
        title: 'Passengers',
        dataIndex: 'passengers',
        key: 'passengers',
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
      },
];

export default MyTickets;