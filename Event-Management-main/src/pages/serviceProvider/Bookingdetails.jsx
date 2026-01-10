import React, { useState, useEffect } from "react";
import BookingDetailsModal from "./BookingDetailsModal";
import Loader from "../../components/Loader";

const Bookingdetails = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings/provider");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings", err);
      }
      setLoading(false);
    };

    fetchBookings();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-medium mb-6 text-gray-600">Booking Details</h2>

      <div className="overflow-x-auto rounded-xl  border border-gray-500">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-3 font-semibold">Booking ID</th>
              <th className="p-3 font-semibold">Customer</th>
              <th className="p-3 font-semibold">Service Type</th>
              <th className="p-3 font-semibold">Event Date</th>
              <th className="p-3 font-semibold">Amount</th>
              <th className="p-3 font-semibold">Status</th>
              <th className="p-3 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">{b.bookingId}</td>
                <td className="p-3">{b.customer.name}</td>
                <td className="p-3">{b.serviceType}</td>
                <td className="p-3">{b.eventDate}</td>
                <td className="p-3">₹{b.amount}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-white text-sm ${
                      b.status === "Pending"
                        ? "bg-yellow-500"
                        : b.status === "Approved"
                        ? "bg-green-600"
                        : b.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => setSelectedBooking(b)}
                    className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Modal */}
      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
};

export default Bookingdetails;
