import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}