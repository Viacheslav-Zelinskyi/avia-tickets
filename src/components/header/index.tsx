import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { aboutPath, homePath, myTicketsPath, ticketsPath } from "../../routes";
import Dropdown from "react-dropdown";
import "./header.scss";
import "react-dropdown/style.css";
import { useTranslation } from "react-i18next";
import { languages } from "../../utils/i18n";

interface IHeaderLink {
  text: string;
  route: string;
}

const Header = () => {
  const { t, i18n } = useTranslation();

  const languagesOptions = [
    { value: languages.en, label: t("header.english") },
    { value: languages.ru, label: t("header.russian") },
  ];

  return (
    <div className="header__wrapper">
      <div className="header__links">
        <HeaderLink text={t("header.home")} route={homePath} />
        <HeaderLink text={t("header.tickets")} route={ticketsPath} />
        <HeaderLink text={t("header.myTickets")} route={myTicketsPath} />
        <HeaderLink text={t("header.about")} route={aboutPath} />
      </div>
      <div>
        <Dropdown
          value={i18n.language}
          options={languagesOptions}
          onChange={(arg) => i18n.changeLanguage(arg.value)}
        />
      </div>
    </div>
  );
};

const HeaderLink = ({ text, route }: IHeaderLink) => {
  const navigate = useNavigate();

  return (
    <Button
      type="primary"
      shape="round"
      size="large"
      onClick={() => navigate(route)}
    >
      {text}
    </Button>
  );
};

export default Header;
