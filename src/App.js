import React from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import COLORS from "./constants/colors";

import Navigation from "./app/navigation/Navigation";
import Header from "./app/header/Header";
import DepartmentView from "./app/departmentView/DepartmentView";
import EquipmentView from "./app/equipmentView/EquipmentView";
import CityView from "./app/cityView/CityView";
import TerritoryView from "./app/territoryView/TerritoryView";

// https://sk.pinterest.com/pin/813040538963536152/visual-search/?cropSource=6&h=671&w=530&x=23&y=189.81599999999992

const Container = styled.div`
  background-color: ${COLORS.mainBackground};
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/departmentView" element={<TerritoryView />} />
          <Route path="/cityView" element={<CityView />} />
          <Route path="/equipmentView" element={<EquipmentView />} />
          <Route path="/" element={<DepartmentView />} exact />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
