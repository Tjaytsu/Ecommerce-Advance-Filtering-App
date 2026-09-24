import Buttons from "../components/Buttons";
import "./Recommended.css";
function Recommended({ handleClick }) {
  return (
    <>
      <div className="">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
