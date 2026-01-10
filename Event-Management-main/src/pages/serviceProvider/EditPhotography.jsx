import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPhotography = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/photography/${serviceId}`)
      .then((res) => res.json())
      .then(setService);
  }, [serviceId]);

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/api/photography/${serviceId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    });

    alert("Service updated");
    navigate("/provider/my-services");
  };

  if (!service) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Photography Service</h2>

      <input
        value={service.studioName}
        onChange={(e) =>
          setService({ ...service, studioName: e.target.value })
        }
        className="border p-3 rounded-xl w-full mb-4"
      />

      {/* Repeat fields as needed */}

      <button
        onClick={handleUpdate}
        className="bg-cyan-700 text-white px-6 py-3 rounded-xl"
      >
        Update Service
      </button>
    </div>
  );
};

export default EditPhotography;
