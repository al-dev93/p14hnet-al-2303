import PropTypes from "prop-types";
import style from "./style.module.css";
import TableNavButton from "../TableNavButton";

const TableNavBar = ({ pages, current, setCurrentPage }) => {
  const setOfButton = [];
  for (let index = 0; index < pages; index += 1) {
    setOfButton.push(
      <TableNavButton
        key={`${index}`}
        wording={`${index + 1}`}
        current={current}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  return (
    <div className={style.wrapper}>
      <TableNavButton
        wording="Previous"
        current={current}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
      {setOfButton}
      <TableNavButton
        wording="Next"
        current={current}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableNavBar;

TableNavBar.propTypes = {
  pages: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
