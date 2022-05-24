import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import "./App.css";
import SearchResults from "./components/SearchResults";

const App = () => {
  const footerElements = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />

      <TouristInfoCards />

      <Bookings />

      <Restaurant />

      <Footer array={footerElements} />
    </div>
  );
};

export default App;
