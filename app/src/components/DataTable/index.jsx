import PropTypes from "prop-types";
import { useState } from "react";
import style from "./style.module.css";

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
  const [filter, setFilter] = useState();
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

  function sortedTable() {
    const copyOfData = [...dataTable];
    copyOfData.sort((a, b) => compareValue(a, b));
    return copyOfData;
  }

  function setSortIcon(currentColumn) {
    const icon = sorting.filter(
      (sortItem) => sortItem.column === currentColumn
    );
    if (icon.length) return icon[icon.length - 1].sort;
    return "sorting";
  }

  function handleSortingClick(event) {
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
    const tableRow = Object.entries(row);

    if (
      (filter &&
        tableRow.filter(([, value]) =>
          value.toUpperCase().includes(filter.toUpperCase())
        ).length) ||
      !filter
    ) {
      return tableRow.map(([key, value]) => (
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
    }
    return null;
  };

  return (
    <div className={style["data-table-container"]}>
      <div className={style["data-table-filter"]}>
        <label htmlFor="filter-input">
          Search:
          <input
            id="filter-input"
            type="search"
            aria-controls="employee-table"
            onChange={(event) => setFilter(event.target.value)}
          />
        </label>
      </div>
      <table id="employee-table" role="grid" className={style["data-table"]}>
        <thead>
          <tr role="row">
            {columnsTitle.map((cell) => (
              <th
                className={style[setSortIcon(cell.data)]}
                tabIndex="0"
                rowSpan="1"
                colSpan="1"
                key={`${cell.data}-0`}
                onClick={(event) => handleSortingClick(event)}
                headers={`${cell.data}`}
              >
                {cell.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedTable().map((row, index) => (
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
    </div>
  );
};

export default DataTable;

DataTable.propTypes = {
  columnsTitle: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  dataTable: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
