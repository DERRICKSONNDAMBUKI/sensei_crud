import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert ,list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
      // ricky has bugs,add useCallEffect to the parent componen
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
