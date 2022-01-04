import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import EmployeeList from "./pages/EmployeeList";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const Root = () => (
  <HashRouter basename="/">
    <Header />
    <Routes>
      <Route exact={true} path="/" element={<Index />} />
      <Route exact={true} path="/employees" element={<EmployeeList />} />
    </Routes>
    <Footer />
  </HashRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
