import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "./../../Hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
const Checkout = () => {
  const { serviceId } = useParams();
  const [services] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: services.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://nameless-caverns-56943.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order booked!!!!");
          event.target.reset();
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please order: {services.name}</h2>

      <form className="my-4" onSubmit={handleSubmit}>
        <input
          className="w-50 mb-3 text-capitalize  "
          type="text"
          value={user.displayName}
          name="name"
          id=""
          placeholder="name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-50 mb-3   "
          type="email"
          name="email"
          value={user.email}
          id=""
          placeholder="email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-50 mb-3 text-capitalize text-danger fw-bold "
          type="text"
          name="service"
          id=""
          value={services.name}
          placeholder="service"
        />
        <br />
        <input
          className="w-50 mb-3 text-capitalize"
          type="text"
          name="address"
          id=""
          placeholder="address"
        />
        <br />
        <input
          className="w-50 mb-3 text-capitalize"
          type="text"
          name="phone"
          id=""
          placeholder="phone-number"
        />
        <br />
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
