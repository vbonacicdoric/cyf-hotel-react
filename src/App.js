import React from "react";
import Heading from "./components/Heading";

import Bookings from "./components/Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;
