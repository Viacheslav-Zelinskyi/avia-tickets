import { Button, DatePicker, Radio, Select } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { PeopleCounter } from "../..";
import { getCountries } from "../../../api";
import { ITicket } from "../../../models/ticket_interfaces";
import { updateTicket } from "../../../redux/reducers/allTickets";
import "./editTicket.scss";

interface IEditTicketProps {
  id: number | null;
  closeEditor: () => void;
}

interface ICountrySelectorProps {
  countries: Array<any>;
  placeholders: Array<string>;
  defaultValues: Array<string>;
  onChange: any;
}

const { Option } = Select;

const dateFormat = "DD.MM.YYYY HH:mm";

const EditTicket = ({ id, closeEditor }: IEditTicketProps) => {
  const ticket: ITicket = useSelector((store: any) =>
    store.allTickets.find((ticket: any) => ticket.id === id)
  );

  const dispatch = useDispatch();
  const [updatedTicket, setUpdatedTicket] = useState<ITicket>(ticket);
  const [countries, setCountries] = useState([]);
  const [peopleCounter, setPeopleCounter] = useState(ticket.passengers);
  const [isOneWayTicket, setIsOneWayTicket] = useState(!ticket.returnDate);
  const { t } = useTranslation();

  useEffect(() => {
    getCountries()
      .then((countries) => setCountries(countries))
      .catch((err) => alert(err));
  }, []);

  const setCountry = (country: string, index: any) => {
    if (index === 0) setUpdatedTicket({ ...updatedTicket, from: country });
    else setUpdatedTicket({ ...updatedTicket, to: country });
  };

  const saveTicket = () => {
    dispatch(
      updateTicket({
        id: id,
        ticket: { ...updatedTicket, passengers: peopleCounter },
      })
    );

    closeEditor();
  };

  return (
    <div className="editTicket__wrapper" onClick={closeEditor}>
      <div className="editTicket__container" onClick={stopPropagation}>
        <h1>{t("editTicket.title") + id}</h1>
        <CountrySelector
          countries={countries}
          placeholders={[t("common.from"), t("common.to")]}
          defaultValues={[ticket.from, ticket.to]}
          onChange={setCountry}
        />
        <div className="editTicket__select">
          <span>{t("editTicket.departureDate")}</span>
          <DatePicker
            showTime
            size="large"
            defaultValue={moment(ticket.departureDate * 1000)}
            format={dateFormat}
            minuteStep={15}
            className="step__selector"
            onChange={(date: any) =>
              setUpdatedTicket({ ...updatedTicket, departureDate: date.unix() })
            }
          />
        </div>
        <div className="editTicket__select">
          <Radio.Group
            className="editTicket__radio"
            defaultValue={isOneWayTicket ? 0 : 1}
            onChange={(e) => setIsOneWayTicket(!e.target.value)}
          >
            <Radio value={1}>{t("tickets.roundTrip")}</Radio>
            <Radio value={0}>{t("tickets.oneWay")}</Radio>
          </Radio.Group>
          {!isOneWayTicket ? (
            <>
              <span>{t("editTicket.returnDate")}</span>
              <DatePicker
                showTime
                size="large"
                defaultValue={moment(ticket.returnDate * 1000)}
                format={dateFormat}
                minuteStep={15}
                className="step__selector"
                onChange={(date: any) =>
                  setUpdatedTicket({
                    ...updatedTicket,
                    returnDate: date.unix(),
                  })
                }
              />
            </>
          ) : null}
        </div>
        <div className="editTicket__peopleCounter">
          <PeopleCounter
            labels={[
              t("tickets.adult"),
              t("tickets.childrens"),
              t("tickets.infants"),
            ]}
            setPeopleCounter={setPeopleCounter}
            peopleCounter={peopleCounter}
          />
        </div>
        <div className="editTicket__btnBlock">
          <Button size="large" onClick={saveTicket}>
            {t("common.update")}
          </Button>
          <Button size="large" danger onClick={closeEditor}>
            {t("common.cancel")}
          </Button>
        </div>
      </div>
    </div>
  );
};

const CountrySelector = ({
  countries,
  placeholders,
  defaultValues,
  onChange,
}: ICountrySelectorProps) => (
  <div className="countrySelector__wrapper">
    {placeholders.map((value, index) => (
      <div className="countrySelector__select">
        <span>{value}:</span>
        <Select
          placeholder={value}
          defaultValue={defaultValues[index]}
          size="large"
          className="step__selector"
          onChange={(value) => onChange(value, index)}
        >
          {countries.map((country: any) => (
            <Option value={country.name.common}>{country.name.common}</Option>
          ))}
        </Select>
      </div>
    ))}
  </div>
);

const stopPropagation = (event: any) => {
  event.stopPropagation();
};

export default EditTicket;
