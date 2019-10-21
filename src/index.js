import React from "react";
import ReactDOM from "react-dom";
import RowMapper from "./Components/RowMapper";
import columns from "./data/columns";
import rows from "./data/rows";
import styled from "styled-components";
import "./styles.css";

const RowMapperContainer = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const AppHeader = styled.h1`
  text-align: center;
`;

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.74);
`;

function App() {
  // index.js to be passing in values from the data source.
  return (
    <AppContainer>
      <AppHeader>Row Mapper</AppHeader>
      <RowMapperContainer>
        <RowMapper rows={rows} columns={columns} />
      </RowMapperContainer>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
