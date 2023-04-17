/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import { useState } from "react";
import "./style.css";
import SelectTableLength from "../SelectTableLength";
import InputTableFilter from "../InputTableFilter";
import RowDataTable from "../RowDataTable";
import TableInfo from "../TableInfo";
import TableNavBar from "../TableNavBar";
import {
  ascendingCompare,
  ascendingCompareDate,
} from "../ColumnDataTable/index";

const DataTable = ({ dataTable, columnsTitle }) => {
  const initialSortColumn = 0;
  const [lengthTable, setLengthTable] = useState({
    rows: 10,
    pages: Math.ceil(dataTable.length / 10),
    lengthTableOrdered: dataTable.length,
  });
  const [currentPage, setCurrentPage] = useState(dataTable.length ? 1 : 0);
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState([
    {
      column: columnsTitle[initialSortColumn].data,
      sort: "sorting-asc",
      compare:
        columnsTitle[initialSortColumn].type === "date"
          ? ascendingCompareDate
          : ascendingCompare,
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
    lengthTable.lengthTableOrdered = dataTable.length;
    if (filter) {
      copyTable = dataTable.filter(
        (row) =>
          columnsTitle.findIndex((column) =>
            row[column.data].toUpperCase().includes(filter.toUpperCase())
          ) >= 0
      );
      lengthTable.lengthTableOrdered = copyTable.length;
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
        length={lengthTable.lengthTableOrdered}
        setCurrentPage={setCurrentPage}
        setLengthTable={setLengthTable}
      />

      <InputTableFilter setCurrentPage={setCurrentPage} setFilter={setFilter} />

      {!dataTable.length && (
        <p className="empty-table">No data available in table</p>
      )}

      <table id="id-data-table" role="grid" className="data-table">
        <thead>
          <RowDataTable
            columnsTitle={columnsTitle}
            sorting={sorting}
            setSorting={setSorting}
          />
        </thead>
        <tbody>
          {(!!dataTable.length &&
            orderTable().map((row, index) => (
              <RowDataTable
                key={`row_${index + 1}`}
                row={row}
                rowId={index + 1}
                columnsTitle={columnsTitle}
                sorting={sorting}
              />
            ))) || <tr className="empty-data-table" />}
        </tbody>
      </table>

      <TableInfo
        dataTableLength={dataTable.length}
        lengthTable={lengthTable}
        currentPage={currentPage}
      />

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
