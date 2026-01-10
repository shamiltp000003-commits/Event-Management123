//#allbookings

import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const SettlementHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // ---- MOCK DATA FOR UI ----
    const mockData = [
      {
        bookingId: "BK1001",
        customerName: "Rahul",
        providerName: "Sky Photography",
        serviceType: "Photography",
        eventDate: "2025-12-01",
        amount: 20000,
        status: "Completed",
      },
      {
        bookingId: "BK1002",
        customerName: "Sneha",
        providerName: "Dream Decor",
        serviceType: "Decoration",
        eventDate: "2025-11-20",
        amount: 8000,
        status: "Pending",
      }
    ];

    setBookings(mockData);

    // Calculate Total Revenue (Completed Only)
    const revenue = mockData
      .filter((b) => b.status === "Completed")
      .reduce((sum, b) => sum + b.amount, 0);

    setTotalRevenue(revenue);

    setLoading(false);
  }, []);
  // ---- END OF MOCK DATA ----

  if (loading) return <Loader/>;

  return (
    <div className="p-6 w-full">
      {/* Revenue Section */}
      <div className="bg-cyan-600 rounded-xl shadow-md p-6 mb-6 border-2 border-gray-300 max-w-sm">
        <h3 className="text-xl font-bold mb-2 text-gray-700">Total Revenue</h3>
        <p className="text-3xl font-medium text-gray-200">₹{totalRevenue}</p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-500">All Booking Details</h2>

      <div className="overflow-x-auto rounded-xl border border-gray-400">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-[15px] text-gray-600">
              <th className="p-3 font-semibold">Booking ID</th>
              <th className="p-3 font-semibold">Customer</th>
              <th className="p-3 font-semibold">Provider</th>
              <th className="p-3 font-semibold">Service Type</th>
              <th className="p-3 font-semibold">Event Date</th>
              <th className="p-3 font-semibold">Amount</th>
              <th className="p-3 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className=" hover:bg-gray-50 text-gray-600 text-sm">
                <td className="p-3">{b.bookingId}</td>
                <td className="p-3">{b.customerName}</td>
                <td className="p-3">{b.providerName}</td>
                <td className="p-3">{b.serviceType}</td>
                <td className="p-3">{b.eventDate}</td>
                <td className="p-3">₹{b.amount}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm ${
                      b.status === "Pending"
                        ? "bg-yellow-200 text-yellow-600"
                        : b.status === "Approved"
                        ? "bg-blue-600"
                        : b.status === "Completed"
                        ? "bg-green-200 text-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SettlementHistory;
