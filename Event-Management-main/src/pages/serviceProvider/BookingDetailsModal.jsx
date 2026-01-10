import React, { useState } from "react";

const BookingDetailsModal = ({ booking, onClose }) => {
  const [loading, setLoading] = useState(false);

  const updateStatus = async (status) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:5000/api/bookings/update/${booking.bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      alert(`Booking ${status}!`);
      onClose();
    } catch (err) {
      alert("Error updating status");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Booking Details
        </h2>

        {/* Customer Info */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Customer Info</h3>
          <p><strong>Name:</strong> {booking.customer.name}</p>
          <p><strong>Phone:</strong> {booking.customer.phone}</p>
          <p><strong>Email:</strong> {booking.customer.email}</p>
        </div>

        {/* Service Info */}
        <div className="mb-4">
          <h3 className="font-bold mb-2">Service Details</h3>
          <p><strong>Type:</strong> {booking.serviceType}</p>
          <p><strong>Event Date:</strong> {booking.eventDate}</p>
          <p><strong>Event Time:</strong> {booking.eventTime}</p>
          <p><strong>Duration:</strong> {booking.duration}</p>

          {booking.packageSelected && (
            <p><strong>Package:</strong> {booking.packageSelected}</p>
          )}

          {booking.addons?.length > 0 && (
            <p><strong>Add-ons:</strong> {booking.addons.join(", ")}</p>
          )}
        </div>

        {/* Payment Info */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">Payment</h3>
          <p><strong>Total Amount:</strong> ₹{booking.amount}</p>
          <p><strong>Advance:</strong> ₹{booking.advance}</p>
          <p><strong>Pending:</strong> ₹{booking.pending}</p>
          <p><strong>Status:</strong> {booking.paymentStatus}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => updateStatus("Approved")}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Approve
            </button>

            <button
              onClick={() => updateStatus("Rejected")}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Reject
            </button>

            <button
              onClick={() => updateStatus("Completed")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;


//info
//mounted in Bookingdetails.jsx