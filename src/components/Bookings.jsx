import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      //fetch("https://cyf-react.glitch.me/delayed")
      //fetch("https://cyf-react.glitch.me/error")
      .then(response => {
        if (response.status !== 200) {
          alert("lo siento pero no puedo cargar la tabla");
        } else {
          response.json();
        }
      })
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    const bookingFiltered = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(bookingFiltered);
  };

  return (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      ) : (
        <p>cargando la tabla, espere</p>
      )}
    </div>
  );
};

export default Bookings;
