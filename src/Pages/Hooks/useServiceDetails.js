import React, { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  //state
  const [services, setServices] = useState([]);

  //hook
  useEffect(() => {
    const url = `https://nameless-caverns-56943.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);

  return [services];
};

export default useServiceDetails;
