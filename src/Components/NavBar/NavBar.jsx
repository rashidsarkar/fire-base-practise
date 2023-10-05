import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="p-4 bg-blue-500">
        <ul className="flex justify-end">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/login">Login</Link>
          </li>
          <li className="mr-4">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/user">User Control</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
