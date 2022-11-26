import React, { useEffect } from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [type, msg, removeAlert]);
  return <Alert variant={type}>{msg}</Alert>;
};

export default CustomAlert;
