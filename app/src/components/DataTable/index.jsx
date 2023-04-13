/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import { useState } from "react";
import "./style.css";
import TableNavBar from "../TableNavBar";
import SelectTableLength from "../SelectTableLength";
import InputTableFilter from "../InputTableFilter";
import { ascendingCompare } from "../ColumnDataTable/index";
import RowDataTable from "../RowDataTable";

const DataTable = ({ dataTable, columnsTitle }) => {
  const [lengthTable, setLengthTable] = useState({
    rows: 10,
    pages: Math.ceil(dataTable.length / 10),
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState([
    {
      column: "firstName",
      sort: "sorting-asc",
      compare: ascendingCompare,
    },
  ]);

  function compareValue(a, b) {
    return sorting.reduce(
      (accCompare, sortingValue) =>
        accCompare ||
        sortingValue.compare(a[sortingValue.column], b[sortingValue.column]),
      sorting[0].compare(a[sorting[0].column], b[sorting[0].column])
    );
  }

  function orderTable() {
    let copyTable = [...dataTable];
    if (filter) {
      copyTable = dataTable.filter(
        (row) =>
          columnsTitle.findIndex((column) =>
            row[column.data].toUpperCase().includes(filter.toUpperCase())
          ) >= 0
      );
    }
    lengthTable.pages = Math.ceil(copyTable.length / lengthTable.rows);
    return copyTable
      .sort((a, b) => compareValue(a, b))
      .slice(
        lengthTable.rows * (currentPage - 1),
        lengthTable.rows * currentPage
      );
  }

  return (
    <div className="data-table-container">
      <SelectTableLength
        length={dataTable.length}
        setCurrentPage={setCurrentPage}
        setLengthTable={setLengthTable}
      />
      <InputTableFilter setCurrentPage={setCurrentPage} setFilter={setFilter} />
      <table id="id-data-table" role="grid" className="data-table">
        <thead>
          <RowDataTable
            columnsTitle={columnsTitle}
            sorting={sorting}
            setSorting={setSorting}
          />
        </thead>
        <tbody>
          {orderTable().map((row, index) => (
            <RowDataTable
              key={`row_${index + 1}`}
              row={row}
              rowId={index + 1}
              columnsTitle={columnsTitle}
              sorting={sorting}
            />
          ))}
        </tbody>
      </table>
      <TableNavBar
        pages={`${lengthTable.pages}`}
        current={`${currentPage}`}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default DataTable;

DataTable.propTypes = {
  columnsTitle: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  dataTable: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
