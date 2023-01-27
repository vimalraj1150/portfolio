import Python from "../assets/pythonimage.png";
import Webdev from "../assets/Webdev.jpg";
import "./Certification.css";
const Ceritification = () => {
  return (
    <div className="certification-container">
      <h1>Certifications</h1>
      <div className="certification">
        <a
          className="react-certi"
          href="https://drive.google.com/file/d/1FlyrbJxv38Gin9C3nOq_EkA8KO7q-X1P/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Python} alt="Python Certificate" />
        </a>
      </div>
    </div>
  );
};

export default Ceritification;
