import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header__wrapper">
      <div className="header__links">
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => navigate("/tickets")}
        >
          Tickets
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => navigate("/mytickets")}
        >
          My Tickets
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => navigate("/about")}
        >
          About
        </Button>
      </div>
    </div>
  );
};

export default Header;
