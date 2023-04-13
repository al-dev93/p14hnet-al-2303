import PropTypes from "prop-types";
import style from "./style.module.css";

export function ascendingCompare(a, b) {
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

const ColumnDataTable = ({ data, column, odd, sorting, setSorting }) => {
  function setColumnStyle() {
    if (data)
      return sorting.find((sortItem) => sortItem.column === column.data)
        ? "sorting"
        : "";
    const columnStyle = sorting.filter(
      (sortItem) => sortItem.column === column.data
    );
    return columnStyle.length
      ? columnStyle[columnStyle.length - 1].sort
      : "sorting";
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

  return (
    (data && (
      <td className={`${odd} ${setColumnStyle()}`} headers={`${column.data}`}>
        {data[column.data]}
      </td>
    )) || (
      <th
        className={style[setColumnStyle()]}
        tabIndex="0"
        rowSpan="1"
        colSpan="1"
        onClick={(event) => handleSortClick(event)}
        headers={`${column.data}`}
      >
        {column.title}
      </th>
    )
  );
};

export default ColumnDataTable;

ColumnDataTable.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  column: PropTypes.objectOf(PropTypes.string).isRequired,
  odd: PropTypes.string,
  sorting: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      sort: PropTypes.string,
      compare: PropTypes.func,
    })
  ).isRequired,
  setSorting: PropTypes.func,
};

ColumnDataTable.defaultProps = {
  data: undefined,
  odd: undefined,
  setSorting: undefined,
};
