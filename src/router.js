import React from "react";
import Main from "./components/Main";
import DetailedCity from "./components/DetailedCity";
import HistoryCity from "./components/HistoryCity";


const routes = {
  "/": () => <Main />,
  "/detailed": () => <DetailedCity />,
  "/history" : () => <HistoryCity />

};

export default routes;