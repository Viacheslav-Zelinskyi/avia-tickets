import "./about.scss";
import AboutImg from "./images/about.jpg";
import strings from "./strings";

const About = () => {
  return (
    <div className="about__wrapper">
      <div className="about__content">
        <div className="about__description">
          <h1>{strings.about}</h1>
          <p>{strings.description}</p>
        </div>
        <div className="about__image">
          <img src={AboutImg} alt={strings.belavia} />
        </div>
      </div>
    </div>
  );
};

export default About;
