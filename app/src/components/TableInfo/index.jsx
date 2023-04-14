import PropTypes from "prop-types";
import style from "./style.module.css";

const TableInfo = ({ dataTableLength, lengthTable, currentPage }) => {
  return (
    <div className={style["data-table-info"]}>
      <p>
        {`Showing ${lengthTable.rows * (currentPage - 1) + 1} to ${
          currentPage * lengthTable.rows <= lengthTable.lengthTableOrdered
            ? currentPage * lengthTable.rows
            : lengthTable.lengthTableOrdered
        }`}
      </p>
      {(dataTableLength === lengthTable.lengthTableOrdered && (
        <p>{`of ${lengthTable.lengthTableOrdered} entries`}</p>
      )) || <p>{`entries (filtered from ${dataTableLength} total entries)`}</p>}
    </div>
  );
};

export default TableInfo;

TableInfo.propTypes = {
  dataTableLength: PropTypes.number.isRequired,
  lengthTable: PropTypes.objectOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number.isRequired,
};
