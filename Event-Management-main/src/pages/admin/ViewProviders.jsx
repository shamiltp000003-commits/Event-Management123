import React, { useEffect, useState } from "react";
import { IoSearch, IoSearchOutline } from "react-icons/io5";

const ViewProviders = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch all providers
  // useEffect(() => {
  //   const fetchProviders = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/admin/providers");
  //       const data = await res.json();
  //       setProviders(data);
  //     } catch (err) {
  //       console.error("Error fetching providers", err);
  //     }
  //     setLoading(false);
  //   };

  //   fetchProviders();
  // }, []);
useEffect(() => {
  const mockData = [
    {
      providerId: "PROV001",
      name: "Rahul Kumar",
      email: "rahul@example.com",
      phone: "9876543210",
      services: ["Auditorium", "Catering"],
      status: "Pending",
    },
    {
      providerId: "PROV002",
      name: "Suresh Menon",
      email: "suresh@example.com",
      phone: "9845223344",
      services: ["Photography"],
      status: "Approved",
    },
    {
      providerId: "PROV003",
      name: "Maya Events",
      email: "mayaevents@example.com",
      phone: "9998887776",
      services: ["Stage Decoration", "Catering", "Photography"],
      status: "Rejected",
    }
  ];

  setProviders(mockData);
  setLoading(false);
}, []);

  // Change provider status
  const updateStatus = async (providerId, status) => {
    if (!window.confirm(`Are you sure you want to ${status} this provider?`)) return;

    try {
      await fetch(`http://localhost:5000/api/admin/providers/${providerId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      alert("Status updated!");
      setProviders(
        providers.map((p) =>
          p.providerId === providerId ? { ...p, status } : p
        )
      );
    } catch (err) {
      alert("Error updating status");
    }
  };

  const deleteProvider = async (providerId) => {
    if (!window.confirm("Delete this provider?")) return;

    try {
      await fetch(`http://localhost:5000/api/admin/providers/${providerId}`, {
        method: "DELETE",
      });

      alert("Provider deleted!");
      setProviders(providers.filter((p) => p.providerId !== providerId));
    } catch (err) {
      alert("Error deleting provider");
    }
  };

  // Search filter
  const filteredProviders = providers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.services.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="p-6">Loading providers...</p>;

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-600">Manage Providers</h2>

      {/* Search */}
      
      <div className="flex items-center border border-gray-400 p-3 rounded-xl w-full mb-6 max-w-[300px] text-gray-600 gap-2">
        <IoSearch />
          <input
        type="text"
        placeholder="Search by name or service..."
        className="text-gray-600 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-500">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-500">
              <th className="p-3 font-semibold">Provider ID</th>
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">Email</th>
              <th className="p-3 font-semibold">Phone</th>
              <th className="p-3 font-semibold">Services</th>
              <th className="p-3 font-semibold">Status</th>
              <th className="p-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProviders.map((p, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 text-sm">
                <td className="p-3 text-gray-500">{p.providerId}</td>
                <td className="p-3 text-gray-500">{p.name}</td>
                <td className="p-3 text-gray-500">{p.email}</td>
                <td className="p-3 text-gray-500">{p.phone}</td>

                <td className="p-3">
                  {p.services.map((s, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs mr-1"
                    >
                      {s}
                    </span>
                  ))}
                </td>

                <td className="p-3">
                  <span
                    className={` text-sm ${
                      p.status === "Pending"
                        ? "text-yellow-500"
                        : p.status === "Approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="p-3 flex gap-2 text-sm">
                  {/* Approve */}
                  {p.status !== "Approved" && (
                    <button
                      onClick={() => updateStatus(p.providerId, "Approved")}
                      className="text-green-600 hover:text-green-700 border border-gray-500 rounded-md px-1 text-xs"
                    >
                      Approve
                    </button>
                  )}

                  {/* Reject */}
                  {p.status !== "Rejected" && (
                    <button
                      onClick={() => updateStatus(p.providerId, "Rejected")}
                      className="text-red-600 hover:text-red-700 border border-gray-500 rounded-md px-1 text-xs"
                    >
                      Reject
                    </button>
                  )}

                  {/* Delete */}
                  <button
                    onClick={() => deleteProvider(p.providerId)}
                    className="text-gray-600 hover:text-gray-700 border border-gray-500 rounded-md px-1 text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProviders;
