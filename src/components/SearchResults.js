import React from "react";
import fakeBookings from "../data/fakeBookings";
import Row from "./Row";

const SearchResults = () => {
  return (
    <div className="table-responsive">
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {fakeBookings.map(booking => (
            <Row
              id={booking.id}
              title={booking.title}
              firstName={booking.firstName}
              surname={booking.surname}
              email={booking.email}
              roomId={booking.roomId}
              checkInDate={booking.checkInDate}
              checkOutDate={booking.checkOutDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;