import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { aboutPath, homePath, myTicketsPath, ticketsPath } from "../../routes";
import "./header.scss";

interface IHeaderLink {
  text: string;
  route: string;
}

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__links">
        <HeaderLink text="Home" route={homePath} />
        <HeaderLink text="Tickets" route={ticketsPath} />
        <HeaderLink text="My Tickets" route={myTicketsPath} />
        <HeaderLink text="About" route={aboutPath} />
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
