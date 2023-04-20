/* eslint-disable no-plusplus */
import PropTypes from "prop-types";
import style from "./style.module.css";

const TableNavButton = ({ wording, pages, current, setCurrentPage }) => {
  const disable =
    (current === pages && wording === "Next") ||
    (current === "1" && wording === "Previous") ||
    pages === "0";
  const active = current === wording;

  function handleClick(event) {
    let page = +current;
    switch (event.target.textContent) {
      case "Previous":
        setCurrentPage(--page);
        return;
      case "Next":
        setCurrentPage(++page);
        break;
      default:
        setCurrentPage(+event.target.textContent);
        break;
    }
  }

  return (
    <button
      className={`${style.button} ${disable ? style.disabled : ""} ${
        active ? style.current : ""
      }`}
      type="button"
      disabled={disable ? "disabled" : undefined}
      onClick={(event) => handleClick(event)}
    >
      {wording}
    </button>
  );
};

export default TableNavButton;

TableNavButton.propTypes = {
  wording: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
