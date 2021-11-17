import "./Home.scss";
import { Carousel } from "antd";
import LondonImg from "./images/London.jpg";
import KyivImg from "./images/Kyiv.jpg";
import MinskImg from "./images/Minsk.jpg";
import NewYorkImg from "./images/NewYork.jpg";

const HomePage = () => {
  return (
    <div className="home__wrapper">
      <Carousel className="home__carousel" autoplay effect="fade">
        <div className="home__carouselItem">
          <img src={LondonImg} alt="London" />
        </div>
        <div className="home__carouselItem">
          <img src={KyivImg} alt="Kyiv"/>
        </div>
        <div className="home__carouselItem">
          <img src={MinskImg} alt="Minsk" />
        </div>
        <div className="home__carouselItem">
          <img src={NewYorkImg} alt="New York" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
