import "./home.scss";
import { Carousel } from "antd";
import LondonImg from "./images/London.jpg";
import KyivImg from "./images/Kyiv.jpg";
import MinskImg from "./images/Minsk.jpg";
import NewYorkImg from "./images/NewYork.jpg";

const HomePage = () => {
  const images = [
    { src: LondonImg, country: "Great Britain" },
    { src: KyivImg, country: "Ukraine" },
    { src: MinskImg, country: "Belarus" },
    { src: NewYorkImg, country: "USA" },
  ];
  return (
    <div className="home__wrapper">
      <Carousel className="home__carousel" autoplay effect="fade">
        {images.map((image) => (
          <div className="home__carouselItem">
            <img src={image.src} title={image.country} alt={image.country} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
