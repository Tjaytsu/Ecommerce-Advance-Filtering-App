import "./Nav.css";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav({ handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <CiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="# ">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
