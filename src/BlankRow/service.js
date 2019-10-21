const doesBlankRowExistInRows = (rows, columns) => {
  if (!areRowsValid(rows)) {
    return false;
  }

  let lastRow = rows[rows.length - 1];

  let allValuesBlank = true;

  for (let column of columns) {
    let columnValue = lastRow[column.id];

    if (columnValue) {
      allValuesBlank = false;
      continue;
    }
  }

  return allValuesBlank;
};

const generateBlankRow = columns => {
  const newRow = {};
  for (let column of columns) {
    newRow[column.id] = "";
  }
  return newRow;
};

export default {
  doesBlankRowExistInRows,
  generateBlankRow
};

function areRowsValid(rows) {
  return rows && Array.isArray(rows) && rows.length;
}
