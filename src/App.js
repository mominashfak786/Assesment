// src/App.js
import React, { useState } from "react";
import Dashboard from "./Assesment/Dashboard";
import CreateClass from "./Assesment/CreateClass";
import Home from "./Assesment/Home";
import Class from "./Assesment/Class";
function App() {
  const [selectedtap, setselectedtap] = useState("Home");
  const [MainData, setMainData] = useState([]);
  return (
    <div className="d-flex">
      <Dashboard selectedtap={selectedtap} setselectedtap={setselectedtap} />
      <div className="w-100">
        {selectedtap === "Home" && <Home />}
        {selectedtap === "CreateClass" && <CreateClass MainData={MainData} setMainData={setMainData} />}
        {selectedtap === "Class" && <Class MainData={MainData} setMainData={setMainData} />}
      </div>
    </div>
  );
}

export default App;
