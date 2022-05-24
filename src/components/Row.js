import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const [isSelected, setIsSelected] = useState(false);
  const checkInDate = moment(props.checkInDate);
  const checkOutDate = moment(props.checkOutDate);

  const numberOfNights = checkOutDate.diff(checkInDate, "days");

  function handleClick() {
    console.log(isSelected);
    setIsSelected(!isSelected);
  }
  return (
    <tr onClick={handleClick} className={isSelected ? "resaltar" : ""}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{numberOfNights}</td>
      <td>
        <button onClick={() => props.changeIdCustomer(props.id)}>
          info customer
        </button>
      </td>
    </tr>
  );
};

export default Row;
