import "./App.css";

import { Route, Routes } from "react-router";

import { Applied } from "./pages/Applied";
import { Box } from "./components/Boxahandler/Box";
import { Jobs } from "./configs/data";
import { Navbar } from "./components/NavbarHandler/Navbar";
import { useState } from "react";

function App() {
  const [newValue, setNewValue] = useState([]);
  const [query, setNewQuery] = useState("");
  const toApp = (payload) => {
    setNewValue(payload);
  };
  const queryToApp = (payload) => {
    setNewQuery(payload);
  };

  const keys = ["title", "company", "type", "desc"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="App">
      <Navbar queryToApp={queryToApp}></Navbar>

      <Routes>
        <Route
          path="/"
          element={<Box toApp={toApp} data={search(Jobs)} />}
        ></Route>
        <Route
          path="/Applied"
          element={<Applied newValue={newValue} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
