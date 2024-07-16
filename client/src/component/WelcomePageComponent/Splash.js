import styles from "./splashScreen.module.css";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className={`splashPage  ${styles.pageCard}`}>
      <div className={`page-text text-white ${styles.cardText}`}>
        <h1 className={`boldText  ${styles.boldText}`}>
          The Future of Chat is Here With{" "}
          <span style={{ color: "#d71e1f" }}>SonaAI </span>Technology
        </h1>
        <p className={`sub-text ${styles.subtext}`}>
          Welcome to the future of communication with SonaAI Technology.
          Revolutionizing chat with advanced AI and intuitive design, SonaAI
          offers efficient, personalized, and innovative conversational
          experiences. Transform your interactions with SonaAI and experience
          the next generation of chat technology.
        </p>
        <Link
          to={"/signup"}
          className={`btn text-white ${styles.btn}`}
          style={{
            width: "100%",
            height: "45px",
            borderRadius: "15px",
            backgroundColor: "#d71e1f",
          }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Splash;
