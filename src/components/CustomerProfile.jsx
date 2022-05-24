import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setCustomerInfo(data));
  }, [props.id]);
  return (
    <div>
      {" "}
      {customerInfo ? (
        <div>
          <div>{customerInfo.id}</div>
          <div>{customerInfo.email}</div>
          <div>
            {customerInfo.vip ? "el cliente es vip" : "el cliente No es vip"}
          </div>
          <div>{customerInfo.phoneNumber}</div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomerProfile;
