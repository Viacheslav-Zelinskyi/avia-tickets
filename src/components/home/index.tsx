import "./home.scss";
import { Carousel } from "antd";
import LondonImg from "./images/London.jpg";
import KyivImg from "./images/Kyiv.jpg";
import MinskImg from "./images/Minsk.jpg";
import NewYorkImg from "./images/NewYork.jpg";
import { useDispatch } from "react-redux";
import { setDestination } from "../../redux/reducers/ticket";
import { useNavigate } from "react-router-dom";
import { ticketsPath } from "../../routes";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = [
    { src: LondonImg, country: "United Kingdom", timezone: "UTC+00:00" },
    { src: KyivImg, country: "Ukraine", timezone: "UTC+02:00" },
    { src: MinskImg, country: "Belarus", timezone: "UTC+03:00" },
    { src: NewYorkImg, country: "United States", timezone: "UTC-05:00" },
  ];

  const redirectToTickets = (country: string) => {
    dispatch(setDestination(country));
    navigate(ticketsPath);
  };

  return (
    <div className="home__wrapper">
      <Carousel className="home__carousel" autoplay effect="fade">
        {images.map((image) => (
          <div className="home__carouselItem">
            <img
              src={image.src}
              title={image.country}
              alt={image.country}
              onClick={() => redirectToTickets(image.country)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
