import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOders = async () => {
      const email = user.email;
      const url = `https://nameless-caverns-56943.herokuapp.com/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOders();
  }, [user]);
  console.log(orders);
  return (
    <div>
      <h1>Your Order length : {orders.length}</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Orders;
