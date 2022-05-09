import React from "react";
import useService from "../../Hooks/useServices";

const ManageServices = () => {
  const [services] = useService();

  //handleDelete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ?");
    if (proceed) {
      const url = `https://nameless-caverns-56943.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => (data)
        );
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="my-2">Manage your service</h1>
      <br />
      {services.map((service) => (
        <div key={service._id}>
          <h4>
            {service.name}
            <button onClick={() => handleDelete(service.id)}>X</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
