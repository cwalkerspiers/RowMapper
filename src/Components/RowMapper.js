import React from "react";
import useRows from "/src/Hooks/useRows";
import Input from "./Input";
import Select from "./Select";
import RemoveButton from "/src/Components/RemoveButton";
import styled from "styled-components";

const typeToComponentMap = {
  input: Input,
  select: Select
};

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  width: 180px;
`;

const RowMapper = props => {
  const rowsState = useRows(props.rows, props.columns);

  const getInputProps = function(row, column, rowIndex) {
    let { id } = column;
    return {
      value: row[id],
      onChange: e => {
        rowsState.changeValue(rowIndex, column.id, e.target.value);
      }
    };
  };

  const getSelectProps = function(row, column, rowIndex) {
    const selected = column.options.find(
      option => option.value === row[column.id]
    );

    return {
      value: selected,
      options: column.options,
      onChange: desiredValue => {
        rowsState.changeValue(rowIndex, column.id, desiredValue.value);
      }
    };
  };

  const typeToGetComponentProps = {
    input: getInputProps,
    select: getSelectProps
  };

  const getColumnComponentProps = function(row, column, rowIndex) {
    return typeToGetComponentProps[column.type](row, column, rowIndex);
  };

  const isLastRow = function(rows, rowIndex) {
    return rows.length === rowIndex + 1;
  };

  const renderColumns = function(columns, row, rowIndex, renderMethod) {
    return columns.map(column => {
      let ColumnComponent = typeToComponentMap[column.type];
      let columnProps = getColumnComponentProps(row, column, rowIndex);
      return renderMethod(ColumnComponent, columnProps);
    });
  };

  return (
    <div className={props.className}>
      <Row>
        <Column>Task</Column>
        <Column>Priority</Column>
      </Row>
      {rowsState.rows.map((row, rowIndex) => {
        return (
          <Row>
            {renderColumns(
              props.columns,
              row,
              rowIndex,
              (ColumnComponent, columnProps) => {
                return (
                  <Column>
                    <ColumnComponent {...columnProps} />
                  </Column>
                );
              }
            )}

            <RemoveButton
              onClick={() => {
                rowsState.removeRow(rowIndex);
              }}
              isLastRow={isLastRow(rowsState.rows, rowIndex)}
            />
          </Row>
        );
      })}
    </div>
  );
};

export default RowMapper;
