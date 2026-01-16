import React, { useState, useEffect } from 'react';
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoPersonOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoCardOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoHourglassOutline,
  IoEyeOutline,
  IoPrintOutline
} from 'react-icons/io5';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  useEffect(() => {
    // Load bookings from localStorage
    const savedBookings = localStorage.getItem('userBookings');
    if (savedBookings) {
      const parsedBookings = JSON.parse(savedBookings);
      setBookings(parsedBookings);
      setFilteredBookings(parsedBookings);
    } else {
      // Use dummy data for UI testing
      const dummyBookings = [
        {
          bookingId: 'WC12345678',
          serviceName: 'Grand Palace Auditorium',
          category: 'auditorium',
          auditoriumPricing: 'daily',
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2026-01-17',
            eventTime: '10:00',
            guests: 200,
            hours: 8,
            specialRequests: 'Need sound system and stage setup'
          },
          totalPrice: 50000,
          bookingDate: new Date('2024-11-15').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC23456789',
          serviceName: 'Delicious Catering Services',
          category: 'catering',
          selectedPackage: {
            packageName: 'Premium Package',
            name: 'Premium Package',
            pricePerPerson: 500,
            description: 'Full course meal with dessert',
            foodType: 'both'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: new Date().toISOString().split('T')[0], // Today
            eventTime: '12:00',
            guests: 150,
            hours: 0,
            specialRequests: 'Vegetarian options for 50 guests'
          },
          totalPrice: 75000,
          bookingDate: new Date('2024-11-20').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC34567890',
          serviceName: 'Capture Moments Photography',
          category: 'photography',
          selectedPackage: {
            packageName: 'Full Day Package',
            name: 'Full Day Package',
            pricePerHour: 3000,
            description: '8 hours coverage with album'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-12-30',
            eventTime: '09:00',
            guests: 0,
            hours: 8,
            specialRequests: 'Need drone photography for outdoor shots'
          },
          totalPrice: 24000,
          bookingDate: new Date('2024-11-18').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC45678901',
          serviceName: 'Elegant Stage Decorations',
          category: 'stage-decoration',
          selectedPackage: {
            packageName: 'Luxury Package',
            name: 'Luxury Package',
            title: 'Luxury Package',
            pricePerDay: 35000,
            description: 'Premium floral arrangements and lighting',
            category: 'Luxury'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-12-20',
            eventTime: '18:00',
            guests: 0,
            hours: 0,
            specialRequests: 'Red and gold theme with fresh flowers'
          },
          totalPrice: 35000,
          bookingDate: new Date('2024-11-10').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC56789012',
          serviceName: 'Royal Venue Auditorium',
          category: 'auditorium',
          auditoriumPricing: 'hourly',
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2024-11-10', // Past date
            eventTime: '14:00',
            guests: 100,
            hours: 4,
            specialRequests: 'Conference setup required'
          },
          totalPrice: 12000,
          bookingDate: new Date('2024-10-25').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC67890123',
          serviceName: 'Tasty Treats Catering',
          category: 'catering',
          selectedPackage: {
            packageName: 'Standard Package',
            name: 'Standard Package',
            pricePerPerson: 350,
            description: 'Buffet style service',
            foodType: 'veg'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-01-15',
            eventTime: '19:00',
            guests: 80,
            hours: 0,
            specialRequests: 'Jain food options needed'
          },
          totalPrice: 28000,
          bookingDate: new Date('2024-11-22').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC78901234',
          serviceName: 'Wedding Photography Pro',
          category: 'photography',
          selectedPackage: {
            packageName: 'Wedding Package',
            name: 'Wedding Package',
            pricePerHour: 5000,
            description: 'Complete wedding coverage with video'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-02-14',
            eventTime: '08:00',
            guests: 0,
            hours: 12,
            specialRequests: 'Need candid photography and video editing'
          },
          totalPrice: 60000,
          bookingDate: new Date('2024-11-25').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC89012345',
          serviceName: 'Grand Ballroom Auditorium',
          category: 'auditorium',
          auditoriumPricing: 'daily',
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-03-08',
            eventTime: '16:00',
            guests: 300,
            hours: 8,
            specialRequests: 'Need podium and wireless microphones'
          },
          totalPrice: 75000,
          bookingDate: new Date('2024-11-28').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC90123456',
          serviceName: 'Festive Decorations Co.',
          category: 'stage-decoration',
          selectedPackage: {
            packageName: 'Premium Package',
            name: 'Premium Package',
            title: 'Premium Package',
            pricePerDay: 25000,
            description: 'Complete stage and hall decoration',
            category: 'Premium'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-04-20',
            eventTime: '17:00',
            guests: 0,
            hours: 0,
            specialRequests: 'Spring theme with seasonal flowers'
          },
          totalPrice: 25000,
          bookingDate: new Date('2024-12-01').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC01234567',
          serviceName: 'Celebration Catering Services',
          category: 'catering',
          selectedPackage: {
            packageName: 'Deluxe Package',
            name: 'Deluxe Package',
            pricePerPerson: 650,
            description: 'Multi-course meal with premium desserts',
            foodType: 'non-veg'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-05-10',
            eventTime: '20:00',
            guests: 120,
            hours: 0,
            specialRequests: 'Dietary restrictions: 20 vegetarians, 5 gluten-free'
          },
          totalPrice: 78000,
          bookingDate: new Date('2024-12-05').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC12345670',
          serviceName: 'Corporate Event Venue',
          category: 'auditorium',
          auditoriumPricing: 'hourly',
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-06-15',
            eventTime: '09:00',
            guests: 200,
            hours: 6,
            specialRequests: 'Projector and screen setup required'
          },
          totalPrice: 36000,
          bookingDate: new Date('2024-12-08').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC23456701',
          serviceName: 'Artistic Photography Studio',
          category: 'photography',
          selectedPackage: {
            packageName: 'Portrait Package',
            name: 'Portrait Package',
            pricePerHour: 2500,
            description: 'Family portraits and group photos'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-07-25',
            eventTime: '14:00',
            guests: 0,
            hours: 4,
            specialRequests: 'Family reunion photos with props'
          },
          totalPrice: 10000,
          bookingDate: new Date('2024-12-10').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC34567012',
          serviceName: 'Elegant Wedding Decor',
          category: 'stage-decoration',
          selectedPackage: {
            packageName: 'Royal Package',
            name: 'Royal Package',
            title: 'Royal Package',
            pricePerDay: 45000,
            description: 'Complete wedding venue decoration',
            category: 'Luxury'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-08-30',
            eventTime: '11:00',
            guests: 0,
            hours: 0,
            specialRequests: 'Traditional Indian wedding theme'
          },
          totalPrice: 45000,
          bookingDate: new Date('2024-12-12').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC45670123',
          serviceName: 'Gourmet Catering House',
          category: 'catering',
          selectedPackage: {
            packageName: 'Platinum Package',
            name: 'Platinum Package',
            pricePerPerson: 800,
            description: 'Gourmet dining experience with wine pairing',
            foodType: 'both'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-09-15',
            eventTime: '19:30',
            guests: 100,
            hours: 0,
            specialRequests: 'Wine pairing for 50 guests, mocktails for others'
          },
          totalPrice: 80000,
          bookingDate: new Date('2026-12-15').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC56701234',
          serviceName: 'Convention Center',
          category: 'auditorium',
          auditoriumPricing: 'daily',
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2025-10-22',
            eventTime: '08:00',
            guests: 500,
            hours: 12,
            specialRequests: 'Full conference setup with multiple rooms'
          },
          totalPrice: 150000,
          bookingDate: new Date('2024-12-18').toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC67801235',
          serviceName: 'Tomorrow Events Photography',
          category: 'photography',
          selectedPackage: {
            packageName: 'Quick Event Package',
            name: 'Quick Event Package',
            pricePerHour: 2000,
            description: '2 hours coverage for small events'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Tomorrow
            eventTime: '16:00',
            guests: 0,
            hours: 2,
            specialRequests: 'Birthday celebration photography'
          },
          totalPrice: 4000,
          bookingDate: new Date().toISOString(),
          status: 'confirmed'
        },
        {
          bookingId: 'WC78901236',
          serviceName: 'Holiday Decor Specialists',
          category: 'stage-decoration',
          selectedPackage: {
            packageName: 'Festival Package',
            name: 'Festival Package',
            title: 'Festival Package',
            pricePerDay: 20000,
            description: 'Festive decorations for special occasions',
            category: 'Premium'
          },
          bookingData: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+91 98765 43210',
            eventDate: '2026-01-01',
            eventTime: '20:00',
            guests: 0,
            hours: 0,
            specialRequests: 'New Year celebration theme'
          },
          totalPrice: 20000,
          bookingDate: new Date('2024-12-20').toISOString(),
          status: 'confirmed'
        }
      ];
      setBookings(dummyBookings);
      setFilteredBookings(dummyBookings);
    }
  }, []);

  useEffect(() => {
    // Filter bookings based on selected filter
    if (selectedFilter === 'all') {
      setFilteredBookings(bookings);
    } else {
      const filtered = bookings.filter(booking => {
        const status = getBookingStatus(booking);
        return status === selectedFilter;
      });
      setFilteredBookings(filtered);
    }
  }, [selectedFilter, bookings]);

  const getBookingStatus = (booking) => {
    // If booking is cancelled, return cancelled status
    if (booking.status === 'cancelled') {
      return 'cancelled';
    }

    const eventDate = new Date(booking.bookingData.eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);

    if (eventDate < today) {
      return 'completed';
    } else if (eventDate.getTime() === today.getTime()) {
      return 'today';
    } else {
      return 'upcoming';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <IoCheckmarkCircleOutline className="w-5 h-5 text-green-600" />;
      case 'today':
        return <IoHourglassOutline className="w-5 h-5 text-blue-600" />;
      case 'upcoming':
        return <IoCheckmarkCircleOutline className="w-5 h-5 text-blue-600" />;
      case 'cancelled':
        return <IoCloseCircleOutline className="w-5 h-5 text-red-600" />;
      default:
        return <IoHourglassOutline className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'today':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryInfo = (category) => {
    switch (category) {
      case 'auditorium':
        return { name: 'Auditorium', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' };
      case 'catering':
        return { name: 'Catering', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' };
      case 'photography':
        return { name: 'Photography', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' };
      case 'stage-decoration':
        return { name: 'Stage Decoration', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50' };
      default:
        return { name: category.replace('-', ' '), color: 'from-gray-500 to-gray-600', bgColor: 'bg-gray-50' };
    }
  };

  const handleCancelBookingClick = (booking) => {
    setBookingToCancel(booking);
    setCancelReason('');
    setCustomReason('');
    setShowCancelModal(true);
  };

  const handleConfirmCancellation = () => {
    if (!cancelReason) {
      alert('Please select a reason for cancellation.');
      return;
    }

    const finalReason = cancelReason === 'other' ? customReason : cancelReason;

    if (cancelReason === 'other' && !finalReason.trim()) {
      alert('Please provide a reason for cancellation.');
      return;
    }

    // Update booking status to cancelled
    const updatedBookings = bookings.map(booking => {
      if (booking.bookingId === bookingToCancel.bookingId) {
        return {
          ...booking,
          status: 'cancelled',
          cancellationReason: finalReason,
          cancelledAt: new Date().toISOString()
        };
      }
      return booking;
    });

    setBookings(updatedBookings);
    localStorage.setItem('userBookings', JSON.stringify(updatedBookings));

    // Reset modal state
    setShowCancelModal(false);
    setBookingToCancel(null);
    setCancelReason('');
    setCustomReason('');

    alert('Booking has been cancelled successfully. You will receive a confirmation email shortly.');
  };


  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'TBD';
    return timeString;
  };

  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-full w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h1>
          <p className="text-gray-600">View and manage all your event bookings</p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex flex-wrap gap-3">
          {['all', 'upcoming', 'today', 'completed', 'cancelled'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedFilter === filter
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <IoCardOutline className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Bookings Found</h3>
            <p className="text-gray-600 mb-6">
              {selectedFilter === 'all'
                ? "You haven't made any bookings yet. Start booking services for your events!"
                : selectedFilter === 'cancelled'
                ? "No cancelled bookings found."
                : `No ${selectedFilter} bookings found.`}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBookings.map((booking) => {
              const status = getBookingStatus(booking);
              const categoryInfo = getCategoryInfo(booking.category);
              
              return (
                <div
                  key={booking.bookingId}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Status Badge */}
                  <div className={`px-4 py-2 border-b flex items-center justify-between ${getStatusColor(status)}`}>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(status)}
                      <span className="font-semibold capitalize">{status}</span>
                    </div>
                    <span className="text-xs font-mono">#{booking.bookingId?.slice(-6) || 'N/A'}</span>
                  </div>

                  {/* Booking Content */}
                  <div className="p-6">
                    {/* Service Name */}
                    <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${categoryInfo.color} text-white`}>
                      <h3 className="font-bold text-lg">{booking.serviceName}</h3>
                      <p className="text-sm opacity-90 capitalize">{categoryInfo.name}</p>
                    </div>

                    {/* Booking Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <IoCalendarOutline className="w-4 h-4 text-gray-500" />
                        <span>{formatDate(booking.bookingData.eventDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <IoTimeOutline className="w-4 h-4 text-gray-500" />
                        <span>{formatTime(booking.bookingData.eventTime)}</span>
                      </div>
                      {booking.bookingData.guests > 0 && booking.category !== 'auditorium' && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <IoPersonOutline className="w-4 h-4 text-gray-500" />
                          <span>{booking.bookingData.guests} guests</span>
                        </div>
                      )}
                      {booking.category === 'auditorium' && booking.auditoriumPricing === 'hourly' && (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <IoTimeOutline className="w-4 h-4 text-gray-500" />
                          <span>{booking.bookingData.hours} hours</span>
                        </div>
                      )}
                    </div>

                    {/* Package Info */}
                    {booking.selectedPackage && (
                      <div className="mb-4 p-2 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Package</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {booking.selectedPackage.packageName || 
                           booking.selectedPackage.name || 
                           booking.selectedPackage.title}
                        </p>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{booking.totalPrice?.toLocaleString() || '0'}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewDetails(booking)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition text-sm font-medium"
                      >
                        <IoEyeOutline className="w-4 h-4" />
                        View Details
                      </button>
                      {(status === 'upcoming' || status === 'today') && (
                        <button
                          onClick={() => handleCancelBookingClick(booking)}
                          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm font-medium"
                          title="Cancel this booking with refund policy"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Booking Details Modal */}
        {showDetailsModal && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Booking Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoCloseCircleOutline className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Service Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Name:</span>
                      <span className="font-semibold">{selectedBooking.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-semibold capitalize">{selectedBooking.category.replace('-', ' ')}</span>
                    </div>
                    {selectedBooking.selectedPackage && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package:</span>
                        <span className="font-semibold">
                          {selectedBooking.selectedPackage.packageName || 
                           selectedBooking.selectedPackage.name || 
                           selectedBooking.selectedPackage.title}
                        </span>
                      </div>
                    )}
                    {selectedBooking.auditoriumPricing && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pricing Type:</span>
                        <span className="font-semibold capitalize">{selectedBooking.auditoriumPricing}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Event Details</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Event Date:</span>
                      <span className="font-semibold">{formatDate(selectedBooking.bookingData.eventDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Event Time:</span>
                      <span className="font-semibold">{formatTime(selectedBooking.bookingData.eventTime)}</span>
                    </div>
                    {selectedBooking.bookingData.guests > 0 && selectedBooking.category !== 'auditorium' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Number of Guests:</span>
                        <span className="font-semibold">{selectedBooking.bookingData.guests}</span>
                      </div>
                    )}
                    {selectedBooking.category === 'auditorium' && selectedBooking.auditoriumPricing === 'hourly' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{selectedBooking.bookingData.hours} hours</span>
                      </div>
                    )}
                    {selectedBooking.bookingData.specialRequests && (
                      <div>
                        <span className="text-gray-600">Special Requests:</span>
                        <p className="font-semibold mt-1">{selectedBooking.bookingData.specialRequests}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Customer Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-semibold">{selectedBooking.bookingData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-semibold">{selectedBooking.bookingData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-semibold">{selectedBooking.bookingData.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Information</h3>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span>Total Amount Paid:</span>
                      <span className="text-2xl font-bold">₹{selectedBooking.totalPrice?.toLocaleString() || '0'}</span>
                    </div>
                    <div className="mt-2 text-sm opacity-90">
                      Booking ID: {selectedBooking.bookingId || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  <IoPrintOutline className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cancellation Modal */}
        {showCancelModal && bookingToCancel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Cancel Booking</h2>
                <p className="text-gray-600 mt-1">
                  Booking ID: {bookingToCancel.bookingId}
                </p>
              </div>

              <div className="p-6 space-y-6">
                {/* Cancellation Policy */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Cancellation Policy</h3>
                  <div className="text-sm text-red-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span><strong>7+ days before event:</strong> Full refund (100%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span><strong>3-7 days before event:</strong> 50% refund</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span><strong>Less than 3 days:</strong> No refund</span>
                    </div>
                  </div>
                  <p className="text-xs text-red-600 mt-3 italic">
                    * Refunds will be processed within 5-7 business days after cancellation approval.
                  </p>
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Booking Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Service:</span>
                      <p className="font-semibold">{bookingToCancel.serviceName}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Event Date:</span>
                      <p className="font-semibold">{formatDate(bookingToCancel.bookingData.eventDate)}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Amount Paid:</span>
                      <p className="font-semibold text-green-600">₹{bookingToCancel.totalPrice?.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Event Time:</span>
                      <p className="font-semibold">{formatTime(bookingToCancel.bookingData.eventTime)}</p>
                    </div>
                  </div>
                </div>

                {/* Cancellation Reason */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Reason for Cancellation *</h4>

                  {/* Radio Button Options */}
                  <div className="space-y-3 mb-4">
                    {[
                      { value: 'change_of_plans', label: 'Change of plans' },
                      { value: 'emergency', label: 'Emergency situation' },
                      { value: 'better_alternative', label: 'Found better alternative' },
                      { value: 'weather_concerns', label: 'Weather concerns' },
                      { value: 'health_issues', label: 'Health issues' },
                      { value: 'financial_issues', label: 'Financial constraints' },
                      { value: 'travel_issues', label: 'Travel/Transportation issues' },
                      { value: 'other', label: 'Other (please specify)' }
                    ].map((reason) => (
                      <label key={reason.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="cancelReason"
                          value={reason.value}
                          checked={cancelReason === reason.value}
                          onChange={(e) => setCancelReason(e.target.value)}
                          className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                        />
                        <span className="text-gray-700">{reason.label}</span>
                      </label>
                    ))}
                  </div>

                  {/* Custom Reason Text Area */}
                  {cancelReason === 'other' && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Please specify your reason:
                      </label>
                      <textarea
                        value={customReason}
                        onChange={(e) => setCustomReason(e.target.value)}
                        placeholder="Please provide details about why you're cancelling this booking..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none"
                        rows={3}
                        maxLength={500}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {customReason.length}/500 characters
                      </p>
                    </div>
                  )}
                </div>

                {/* Important Notice */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 text-lg">⚠️</span>
                    <div>
                      <h5 className="font-semibold text-yellow-800 mb-1">Important Notice</h5>
                      <p className="text-sm text-yellow-700">
                        Once cancelled, this booking cannot be restored. You may need to create a new booking if you change your mind.
                        Service providers will be notified of this cancellation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-3">
                <button
                  onClick={() => {
                    setShowCancelModal(false);
                    setBookingToCancel(null);
                    setCancelReason('');
                    setCustomReason('');
                  }}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Keep Booking
                </button>
                <button
                  onClick={handleConfirmCancellation}
                  disabled={!cancelReason || (cancelReason === 'other' && !customReason.trim())}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Cancellation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBookings;
