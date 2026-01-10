import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services/my-services", {
          credentials: "include", // if using cookies/JWT
        });

        const data = await res.json();
        setServices(data);
      } catch (err) {
        alert("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-600">
        My Services
      </h2>

      {services.length === 0 && (
        <p className="text-gray-500">No services created yet.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white p-5 rounded-xl shadow border"
          >
            <h3 className="text-xl font-bold text-gray-700">
              {service.serviceType.toUpperCase()}
            </h3>

            <p className="text-gray-600 mt-1">
              {service.studioName || service.companyName}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Created on {new Date(service.createdAt).toLocaleDateString()}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() =>
                  navigate(`/provider/edit/${service.serviceType}/${service._id}`)
                }
                className="bg-cyan-700 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => alert("Delete later")}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
