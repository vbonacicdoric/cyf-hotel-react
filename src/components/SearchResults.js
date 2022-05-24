import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Row from "./Row";

const SearchResults = props => {
  const [idCustomer, setIdCustomer] = useState(0);
  const changeIdCustomer = id => {
    setIdCustomer(id);
  };
  return (
    <div className="table-responsive">
      <table class="table text-center">
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
          {props.results.map(booking => (
            <Row
              changeIdCustomer={changeIdCustomer}
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
      {idCustomer ? <CustomerProfile id={idCustomer} /> : null}
    </div>
  );
};

export default SearchResults;
