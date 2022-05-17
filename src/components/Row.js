import React from "react";
import moment from "moment";

const Row = props => {
  const checkInDate = moment(props.checkInDate);
  const checkOutDate = moment(props.checkOutDate);

  const numberOfNights = checkOutDate.diff(checkInDate, "days");

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{numberOfNights}</td>
    </tr>
  );
};

export default Row;