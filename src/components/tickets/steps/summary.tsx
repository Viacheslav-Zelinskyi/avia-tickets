import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { ITicket } from "../../../models/ticket_interfaces";
import { addTicket } from "../../../redux/reducers/allTickets";
import { clearTicket } from "../../../redux/reducers/ticket";
import { myTicketsPath } from "../../../routes";
import { getDateFromTimestamp } from "../../../utils/date.helpers";
import strings from "../strings";
import "./steps.scss";

interface ISummaryProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  ticket: ITicket;
  navigate: NavigateFunction;
}

const Summary = ({ ticket, navigate }: ISummaryProps) => {
  const dispatch = useDispatch();

  const buyTicket = () => {
    dispatch(addTicket(ticket));
    dispatch(clearTicket());
    
    navigate(myTicketsPath);
  };

  return (
    <div className="step__summaryContainer">
      <Card className="step__summaryCard" title={strings.summary} type="inner">
        <p>{strings.from + ": " + ticket.from}</p>
        <p>{strings.to + ": " + ticket.to}</p>
        <p>
          {strings.departureAt + getDateFromTimestamp(ticket.departureDate)}
        </p>
        <p>
          {ticket.returnDate
            ? strings.returnAt + getDateFromTimestamp(ticket.returnDate)
            : null}
        </p>
        <span>{strings.passengers}</span>
        <ul>
          <li>{strings.Adult + ticket?.passengers.adult}</li>
          <li>{strings.Childrens + ticket?.passengers.childrens}</li>
          <li>{strings.Infants + ticket?.passengers.infants}</li>
        </ul>
        <div className="step__submitWrapper">
          <div className="step__submit">
            <Button type="primary" size="large" onClick={buyTicket}>
              {strings.buy}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Summary;
