import { useState, useEffect } from "react";
import blankRowHelper from "/src/BlankRow/helper";

const useRows = (initialRows, columns) => {
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    if (blankRowHelper.doesBlankRowExistInRows(rows, columns)) {
      return;
    }
    const newRow = blankRowHelper.generateBlankRow(columns);
    addRow(newRow);
  });

  function changeValue(rowIndex, columnId, desiredValue) {
    const newRows = [...rows];
    newRows[rowIndex][columnId] = desiredValue;
    setRows(newRows);
  }

  function removeRow(rowIndex) {
    const newRows = [...rows];
    newRows.splice(rowIndex, 1);
    setRows(newRows);
  }

  function addRow(newRow) {
    const newRows = [...rows];
    newRows.push(newRow);
    setRows(newRows);
  }

  return {
    rows,
    addRow,
    removeRow,
    changeValue
  };
};

export default useRows;
