/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import { useState } from "react";
import style from "./style.module.css";
import TableNavBar from "../TableNavBar";

function ascendingCompare(a, b) {
  return a.localeCompare(b, "fr", { ignorePunctuation: true });
}

function descendingCompare(a, b) {
  return b.localeCompare(a, "fr", { ignorePunctuation: true });
}

function changeSortDirection(current) {
  return current.sort === "sorting-asc"
    ? { ...current, sort: "sorting-desc", compare: descendingCompare }
    : { ...current, sort: "sorting-asc", compare: ascendingCompare };
}

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

  function unfilterTable() {
    lengthTable.pages = Math.ceil(dataTable.length / lengthTable.rows);
    return dataTable;
  }

  function filterTable() {
    const filtered = dataTable.filter(
      (row) =>
        Object.entries(row).findIndex(([, value]) =>
          value.toUpperCase().includes(filter.toUpperCase())
        ) >= 0
    );
    lengthTable.pages = Math.ceil(filtered.length / lengthTable.rows);
    return filtered;
  }

  function compareValue(a, b) {
    return sorting.reduce(
      (accCompare, sortingValue) =>
        accCompare ||
        sortingValue.compare(a[sortingValue.column], b[sortingValue.column]),
      sorting[0].compare(a[sorting[0].column], b[sorting[0].column])
    );
  }

  function setSortIcon(currentColumn) {
    const icon = sorting.filter(
      (sortItem) => sortItem.column === currentColumn
    );
    if (icon.length) return icon[icon.length - 1].sort;
    return "sorting";
  }

  function handleChange(event) {
    setCurrentPage(1);
    if (event.target.name === "select-length") {
      setLengthTable({
        rows: +event.target.value,
        pages: Math.ceil(dataTable.length / +event.target.value),
      });
      return;
    }
    setFilter(event.target.value);
  }

  function handleSortClick(event) {
    const copySorting = [...sorting];
    const newSortingClick = {
      column: event.target.headers,
      sort: "sorting-asc",
      compare: ascendingCompare,
    };
    const index = sorting.findIndex(
      (sortItem) => sortItem.column === event.target.headers
    );

    if (event.shiftKey) {
      if (index > -1) {
        if (copySorting[index].sort !== "sorting-desc")
          copySorting[index] = changeSortDirection(copySorting[index]);
        else if (copySorting.length > 1) copySorting.splice(index, 1);
      } else copySorting.push(newSortingClick);

      setSorting([...copySorting]);
      return;
    }
    if (index > -1) setSorting([changeSortDirection(sorting[index])]);
    else setSorting([newSortingClick]);
  }

  const renderTableRow = (row, index) => {
    return Object.entries(row).map(([key, value]) => (
      <td
        className={
          sorting.find((sortItem) => sortItem.column === key)
            ? style.sorting
            : null
        }
        key={`${key}-${index + 1}`}
      >
        {value}
      </td>
    ));
  };

  return (
    <div className={style["data-table-container"]}>
      <div className={style["data-table-length"]}>
        <label htmlFor="select-length">
          {`Show `}
          <select
            id="select-length"
            name="select-length"
            aria-controls="id-data-table"
            defaultValue="10"
            onChange={(event) => handleChange(event)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          {` entries`}
        </label>
      </div>
      <div className={style["data-table-filter"]}>
        <label htmlFor="filter-input">
          Search:
          <input
            id="filter-input"
            name="filter-input"
            type="search"
            aria-controls="id-data-table"
            onChange={(event) => handleChange(event)}
          />
        </label>
      </div>
      <table id="id-data-table" role="grid" className={style["data-table"]}>
        <thead>
          <tr role="row">
            {columnsTitle.map((cell) => (
              <th
                className={style[setSortIcon(cell.data)]}
                tabIndex="0"
                rowSpan="1"
                colSpan="1"
                key={`${cell.data}-0`}
                onClick={(event) => handleSortClick(event)}
                headers={`${cell.data}`}
              >
                {cell.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(filter ? filterTable() : unfilterTable())
            .sort((a, b) => compareValue(a, b))
            .slice(
              lengthTable.rows * (currentPage - 1),
              lengthTable.rows * currentPage
            )
            .map((row, index) => (
              <tr
                className={(index + 1) % 2 ? style.odd : style.even}
                role="row"
                key={`${index + 1}`}
              >
                {renderTableRow(row, index)}
              </tr>
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
