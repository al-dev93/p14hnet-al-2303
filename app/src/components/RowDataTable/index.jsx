import PropTypes from "prop-types";
import ColumnDataTable from "../ColumnDataTable";

const RowDataTable = ({ row, rowId, columnsTitle, sorting, setSorting }) => {
  const parity = rowId % 2 ? "odd" : "even";
  return (
    <tr role="row" className={rowId ? parity : undefined}>
      {columnsTitle.map((column, index) => (
        <ColumnDataTable
          key={`${column.data}_${rowId || 0}-${index + 1}`}
          data={rowId ? row : undefined}
          column={column}
          odd={rowId ? parity : undefined}
          sorting={sorting}
          setSorting={rowId ? undefined : setSorting}
        />
      ))}
    </tr>
  );
};

export default RowDataTable;

RowDataTable.propTypes = {
  row: PropTypes.objectOf(PropTypes.string),
  rowId: PropTypes.number,
  columnsTitle: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  sorting: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      sort: PropTypes.string,
      compare: PropTypes.func,
    })
  ).isRequired,
  setSorting: PropTypes.func,
};

RowDataTable.defaultProps = {
  row: undefined,
  rowId: undefined,
  setSorting: undefined,
};
