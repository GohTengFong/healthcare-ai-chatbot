import "../../styles/Homepage.css";
import Chatbot from "../Chatbot";
import Banner from "./Banner";

export default function Homepage() {
  return (
    <>
      <div className="homepageWrapper">
        <div className="homepageText">
          <Banner />
          <h1>Talk to SGH's ChatBot!</h1>
        </div>

        <Chatbot />
      </div>
    </>
  );
}
