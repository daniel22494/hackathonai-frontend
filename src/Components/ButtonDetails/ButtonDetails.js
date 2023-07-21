import "./buttonDetails.scss";
import { useNavigate } from "react-router-dom";

const ButtonDetails = () => {
  const navigate = useNavigate();
  return (
    <section className="infoDetails">
      <header className="infoDetails__header">
        <img
          onClick={() => navigate("/info")}
          alt="back icon"
          className="infoDetails__header-backIcon"
        />
        <h2 className="infoDetails__header-text">Explore the AI Wonders</h2>
      </header>

      <div className="infoDetails__question">
        Lorem Ipsum is simply dummy text ofng?
      </div>

      <div className="infoDetails__greeting">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text
      </div>

      <h3 className="infoDetails__midText">
        Lorem ipsum dolor sit lorefkn;awuifha;wuioh.
      </h3>

      <div className="infoDetails__buttons">
        <button className="infoDetails__buttons-button">
          Lorem ipsum dolor sit amet.
        </button>
        <button className="infoDetails__buttons-button">
          Lorem ipsum dolor sit amet.
        </button>
      </div>
      <div>
        <input
          className="infoDetails__search"
          placeholder="Your question here"
        ></input>
      </div>
    </section>
  );
};

export default ButtonDetails;
