import { Link, useParams } from "react-router-dom";
import useServiceDetails from './../Hooks/useServiceDetails';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [services] = useServiceDetails(serviceId);
  return (
    <div>
      <h2>You are about to book: {services.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
