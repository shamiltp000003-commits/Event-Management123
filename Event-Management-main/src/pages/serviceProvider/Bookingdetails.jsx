import React, { useState, useEffect } from "react";
import BookingDetailsModal from "./BookingDetailsModal";
import Loader from "../../components/Loader";
import { IoCalendarOutline, IoTimeOutline, IoPersonOutline, IoEye, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoHourglassOutline, IoTrendingUp } from "react-icons/io5";

const Bookingdetails = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use dummy data for UI testing
  useEffect(() => {
    const dummyBookings = [
      {
        bookingId: "WC12345678",
        customer: {
          name: "Rahul Sharma",
          email: "rahul.sharma@example.com",
          phone: "+91 98765 43210"
        },
        serviceType: "Auditorium",
        eventDate: "2024-12-25",
        eventTime: "18:00",
        duration: "8 hours",
        amount: 50000,
        status: "Pending",
        packageSelected: "Full Day Package",
        addons: ["Sound System", "Stage Setup"],
        specialRequests: "Need additional lighting arrangements",
        bookingDate: "2024-11-15",
        guests: 200
      },
      {
        bookingId: "WC23456789",
        customer: {
          name: "Priya Patel",
          email: "priya.patel@example.com",
          phone: "+91 87654 32109"
        },
        serviceType: "Catering",
        eventDate: "2024-12-20",
        eventTime: "19:30",
        duration: "3 hours",
        amount: 45000,
        status: "Approved",
        packageSelected: "Premium Package",
        addons: ["Dessert Station"],
        specialRequests: "Vegetarian options for 50 guests, include birthday cake",
        bookingDate: "2024-11-18",
        guests: 150
      },
      {
        bookingId: "WC34567890",
        customer: {
          name: "Amit Kumar",
          email: "amit.kumar@example.com",
          phone: "+91 76543 21098"
        },
        serviceType: "Photography",
        eventDate: "2024-12-15",
        eventTime: "16:00",
        duration: "6 hours",
        amount: 30000,
        status: "Approved",
        packageSelected: "Wedding Package",
        addons: ["Drone Photography", "Photo Album"],
        specialRequests: "Focus on candid moments and family portraits",
        bookingDate: "2024-11-20",
        guests: 0
      },
      {
        bookingId: "WC45678901",
        customer: {
          name: "Sneha Reddy",
          email: "sneha.reddy@example.com",
          phone: "+91 65432 10987"
        },
        serviceType: "Stage Decoration",
        eventDate: "2024-12-10",
        eventTime: "17:00",
        duration: "4 hours",
        amount: 25000,
        status: "Pending",
        packageSelected: "Luxury Package",
        addons: ["Floral Backdrop", "LED Lighting"],
        specialRequests: "Red and gold theme, include welcome sign",
        bookingDate: "2024-11-22",
        guests: 0
      },
      {
        bookingId: "WC56789012",
        customer: {
          name: "Vikram Singh",
          email: "vikram.singh@example.com",
          phone: "+91 54321 09876"
        },
        serviceType: "Auditorium",
        eventDate: "2024-12-05",
        eventTime: "10:00",
        duration: "6 hours",
        amount: 36000,
        status: "Rejected",
        packageSelected: "Hourly Package",
        addons: ["Projector Setup"],
        specialRequests: "Conference setup with multiple speakers",
        bookingDate: "2024-11-25",
        guests: 120
      },
      {
        bookingId: "WC67890123",
        customer: {
          name: "Kavita Mehta",
          email: "kavita.mehta@example.com",
          phone: "+91 43210 98765"
        },
        serviceType: "Catering",
        eventDate: "2024-12-30",
        eventTime: "20:00",
        duration: "4 hours",
        amount: 60000,
        status: "Approved",
        packageSelected: "Deluxe Package",
        addons: ["Live Cooking Station", "Mocktail Bar"],
        specialRequests: "Include dietary options for various restrictions",
        bookingDate: "2024-11-28",
        guests: 200
      },
      {
        bookingId: "WC78901234",
        customer: {
          name: "Arjun Rao",
          email: "arjun.rao@example.com",
          phone: "+91 32109 87654"
        },
        serviceType: "Photography",
        eventDate: "2024-12-18",
        eventTime: "14:00",
        duration: "4 hours",
        amount: 20000,
        status: "Pending",
        packageSelected: "Portrait Package",
        addons: ["Photo Editing"],
        specialRequests: "Family reunion photos with outdoor setup",
        bookingDate: "2024-11-30",
        guests: 0
      },
      {
        bookingId: "WC89012345",
        customer: {
          name: "Meera Joshi",
          email: "meera.joshi@example.com",
          phone: "+91 21098 76543"
        },
        serviceType: "Stage Decoration",
        eventDate: "2024-12-08",
        eventTime: "16:30",
        duration: "5 hours",
        amount: 30000,
        status: "Approved",
        packageSelected: "Premium Package",
        addons: ["Balloon Decorations", "Entrance Arch"],
        specialRequests: "Baby shower theme with soft colors",
        bookingDate: "2024-12-01",
        guests: 0
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setBookings(dummyBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <IoCheckmarkCircleOutline className="w-4 h-4" />;
      case 'Pending':
        return <IoHourglassOutline className="w-4 h-4" />;
      case 'Rejected':
        return <IoCloseCircleOutline className="w-4 h-4" />;
      default:
        return <IoHourglassOutline className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTotalRevenue = () => {
    return bookings.reduce((sum, booking) => sum + (booking.amount || 0), 0);
  };

  if (loading) return <Loader />;

  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-full w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Details</h1>
              <p className="text-gray-600">Manage and track all your service bookings</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-3xl font-bold text-gray-800">{bookings.length}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <IoCalendarOutline className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-3xl font-bold text-green-600">
                    {bookings.filter(b => b.status === 'Approved').length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <IoCheckmarkCircleOutline className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {bookings.filter(b => b.status === 'Pending').length}
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <IoHourglassOutline className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600">₹{getTotalRevenue().toLocaleString()}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <IoTrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-700">Booking ID</th>
                  <th className="p-4 font-semibold text-gray-700">Customer</th>
                  <th className="p-4 font-semibold text-gray-700">Service Type</th>
                  <th className="p-4 font-semibold text-gray-700">Event Date</th>
                  <th className="p-4 font-semibold text-gray-700">Amount</th>
                  <th className="p-4 font-semibold text-gray-700">Status</th>
                  <th className="p-4 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-gray-500">
                      <div className="flex flex-col items-center">
                        <IoCalendarOutline className="w-12 h-12 text-gray-300 mb-4" />
                        <p className="text-lg font-medium">No bookings found</p>
                        <p className="text-sm">Your booking details will appear here</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="font-mono text-sm font-semibold text-gray-800">
                          {booking.bookingId}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(booking.bookingDate).toLocaleDateString()}
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {booking.customer.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {booking.customer.name}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <IoPersonOutline className="w-3 h-3" />
                              {booking.customer.phone}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {booking.serviceType}
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <IoCalendarOutline className="w-4 h-4 text-gray-400" />
                          <div>
                            <div className="font-semibold text-gray-800">
                              {new Date(booking.eventDate).toLocaleDateString()}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <IoTimeOutline className="w-3 h-3" />
                              {booking.eventTime}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="text-lg font-bold text-green-600">
                          ₹{booking.amount?.toLocaleString()}
                        </div>
                        {booking.guests > 0 && (
                          <div className="text-xs text-gray-500">
                            {booking.guests} guests
                          </div>
                        )}
                      </td>

                      <td className="p-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          <span className="text-sm font-semibold">{booking.status}</span>
                        </div>
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                        >
                          <IoEye className="w-4 h-4" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Booking Modal */}
        {selectedBooking && (
          <BookingDetailsModal
            booking={selectedBooking}
            onClose={() => setSelectedBooking(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Bookingdetails;
