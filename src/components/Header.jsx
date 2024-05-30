import logo from "../assets/quiz-logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
        <img src={logo} alt="" />
        <NavLink to="/quiz">Quiz</NavLink>
      </div>
      <h1>Game Summit 2024</h1>
    </header>
  );
}
