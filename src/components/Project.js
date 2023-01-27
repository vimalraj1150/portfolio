import taskdo from "../assets/taskdo.png";
import foodorderapp from "../assets/foodorderapp.png";
import quotes from "../assets/quotes.png";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-container">
      <h1>Recent Works/Hands-on</h1>
      <div className="projects">
        <div>
          <img src={taskdo} alt="task do app" />
          <div className="project-detail">
            <h3>HTML,CSS</h3>
            <a
              href="https://taskdo-app-ui.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
        <div>
          <img src={foodorderapp} alt="food order app" />
          <div className="project-detail">
            <h3>React + Redux & Redux Thunk + Firebase</h3>
            <a
              href="https://peaceful-speculoos-c70858.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
        <div>
          <img src={quotes} alt="quotes app" />
          <div className="project-detail">
            <h3>React + Router + Firebase</h3>
            <a
              href="https://astounding-starburst-1ce6df.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
