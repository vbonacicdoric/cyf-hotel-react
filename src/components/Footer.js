import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
