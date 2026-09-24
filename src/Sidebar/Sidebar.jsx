import "./Sidebar.css";
import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Color from "./Colors/Colors.jsx";
import Colors from "./Colors/Colors.jsx";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
