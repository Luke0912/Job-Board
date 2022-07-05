import "./App.css";

import { Route, Routes } from "react-router";

import { Applied } from "./pages/AppliedHandler/Applied";
import { Box } from "./components/Boxahandler/Box";
import { Navbar } from "./components/NavbarHandler/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Box></Box>
      <Routes>
        <Route path="/Applied" element={<Applied />}></Route>
      </Routes>
    </div>
  );
}

export default App;
