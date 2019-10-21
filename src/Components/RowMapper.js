import React from "react";
import hooks from "/src/Hooks/combined";
import Input from "./Input";
import Select from "./Select";
import RemoveButton from "/src/Components/RemoveButton";
import styled from "styled-components";

const RowMapper = props => {
  const useRows = hooks.useRows(props.rows, props.columns);
  const typeToGetComponentProps = {
    input: getInputProps,
    select: getSelectProps
  };
  return (
    <div className={props.className}>
      <Row>
        <Column>Task</Column>
        <Column>Priority</Column>
      </Row>
      {useRows.rows.map((row, rowIndex) => {
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
                useRows.removeRow(rowIndex);
              }}
              isLastRow={isLastRow(useRows.rows, rowIndex)}
            />
          </Row>
        );
      })}
    </div>
  );

  function getColumnComponentProps(row, column, rowIndex) {
    return typeToGetComponentProps[column.type](row, column, rowIndex);
  }

  function getInputProps(row, column, rowIndex) {
    let { id } = column;
    return {
      value: row[id],
      onChange: e => {
        useRows.changeValue(rowIndex, column.id, e.target.value);
      }
    };
  }

  function getSelectProps(row, column, rowIndex) {
    const selected = column.options.find(
      option => option.value === row[column.id]
    );

    return {
      value: selected,
      options: column.options,
      onChange: desiredValue => {
        useRows.changeValue(rowIndex, column.id, desiredValue.value);
      }
    };
  }

  function isLastRow(rows, rowIndex) {
    return rows.length === rowIndex + 1;
  }

  function renderColumns(columns, row, rowIndex, renderMethod) {
    return columns.map(column => {
      let ColumnComponent = typeToComponentMap[column.type];
      let columnProps = getColumnComponentProps(row, column, rowIndex);
      return renderMethod(ColumnComponent, columnProps);
    });
  }
};

export default RowMapper;

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
