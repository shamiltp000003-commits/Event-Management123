import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { IoLocationOutline, IoCalendarOutline, IoPricetagOutline, IoEye, IoTrash, IoAdd, IoBusiness, IoRestaurant, IoCamera, IoFlower } from "react-icons/io5";

const MyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Use dummy data for UI testing
    const dummyServices = [
      {
        _id: "aud001",
        serviceType: "auditorium",
        auditoriumName: "Grand Palace Auditorium",
        location: "Mumbai, Maharashtra",
        capacity: 500,
        pricePerDay: 50000,
        pricePerHour: 3000,
        description: "A premium auditorium perfect for weddings, conferences, and large events. Equipped with state-of-the-art sound system and air conditioning.",
        amenities: ["Sound System", "Air Conditioning", "Parking", "Catering Kitchen"],
        createdAt: "2024-11-15T10:30:00Z",
        images: ["auditorium1.jpg", "auditorium2.jpg"],
        availability: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
          sunday: true
        }
      },
      {
        _id: "cat001",
        serviceType: "catering",
        companyName: "Delicious Catering Services",
        location: "Delhi, India",
        description: "Professional catering services for all types of events. We offer both vegetarian and non-vegetarian options.",
        packages: [
          {
            id: "veg-basic",
            packageName: "Vegetarian Basic",
            pricePerPerson: 350,
            foodType: "veg",
            description: "Basic vegetarian meal package"
          },
          {
            id: "nonveg-premium",
            packageName: "Non-Veg Premium",
            pricePerPerson: 650,
            foodType: "non-veg",
            description: "Premium non-vegetarian meal package"
          }
        ],
        createdAt: "2024-11-20T14:45:00Z",
        images: ["catering1.jpg"],
        contactInfo: {
          phone: "+91 98765 43210",
          email: "info@deliciouscatering.com"
        }
      },
      {
        _id: "photo001",
        serviceType: "photography",
        studioName: "Capture Moments Photography",
        location: "Bangalore, Karnataka",
        description: "Professional photography services for weddings, events, and portraits. We use DSLR cameras and provide edited digital photos.",
        packages: [
          {
            id: "wedding-basic",
            packageName: "Wedding Basic",
            pricePerHour: 2500,
            description: "Basic wedding photography package"
          },
          {
            id: "portrait-session",
            packageName: "Portrait Session",
            pricePerHour: 1500,
            description: "Individual or family portrait session"
          }
        ],
        createdAt: "2024-11-25T09:15:00Z",
        images: ["photography1.jpg", "photography2.jpg"],
        equipment: ["DSLR Camera", "Professional Lighting", "Tripods", "Photo Editing Software"],
        experience: "5+ years"
      },
      {
        _id: "decor001",
        serviceType: "stage-decoration",
        companyName: "Elegant Stage Decorations",
        location: "Chennai, Tamil Nadu",
        description: "Beautiful stage decorations for weddings and events. We specialize in floral arrangements and lighting setups.",
        packages: [
          {
            id: "wedding-basic",
            packageName: "Wedding Basic",
            pricePerDay: 15000,
            category: "Basic",
            description: "Basic wedding stage decoration"
          },
          {
            id: "luxury-wedding",
            packageName: "Luxury Wedding",
            pricePerDay: 45000,
            category: "Luxury",
            description: "Complete luxury wedding decoration with premium flowers and lighting"
          }
        ],
        createdAt: "2024-12-01T16:20:00Z",
        images: ["decoration1.jpg", "decoration2.jpg"],
        specialization: ["Wedding Decorations", "Stage Setup", "Floral Arrangements", "Lighting"],
        portfolio: ["wedding1.jpg", "wedding2.jpg", "event1.jpg"]
      },
      {
        _id: "aud002",
        serviceType: "auditorium",
        auditoriumName: "Royal Conference Hall",
        location: "Pune, Maharashtra",
        capacity: 300,
        pricePerDay: 35000,
        pricePerHour: 2500,
        description: "Modern conference hall with audio-visual equipment, perfect for corporate events and seminars.",
        amenities: ["Projector", "Sound System", "WiFi", "Air Conditioning", "Parking"],
        createdAt: "2024-12-05T11:00:00Z",
        images: ["conference1.jpg"],
        availability: {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: false,
          sunday: false
        }
      },
      {
        _id: "cat002",
        serviceType: "catering",
        companyName: "Taste Buds Catering",
        location: "Hyderabad, Telangana",
        description: "Authentic regional cuisine catering service. Specializing in South Indian, North Indian, and Continental cuisines.",
        packages: [
          {
            id: "south-indian",
            packageName: "South Indian Thali",
            pricePerPerson: 250,
            foodType: "veg",
            description: "Traditional South Indian vegetarian thali"
          },
          {
            id: "north-indian",
            packageName: "North Indian Cuisine",
            pricePerPerson: 400,
            foodType: "both",
            description: "North Indian vegetarian and non-vegetarian dishes"
          }
        ],
        createdAt: "2024-12-10T13:30:00Z",
        images: ["tastebuds1.jpg"],
        contactInfo: {
          phone: "+91 87654 32109",
          email: "orders@tastebuds.com"
        }
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setServices(dummyServices);
      setLoading(false);
    }, 1000);
  }, []);

  const getServiceIcon = (serviceType) => {
    switch (serviceType) {
      case 'auditorium':
        return <IoBusiness className="w-6 h-6" />;
      case 'catering':
        return <IoRestaurant className="w-6 h-6" />;
      case 'photography':
        return <IoCamera className="w-6 h-6" />;
      case 'stage-decoration':
        return <IoFlower className="w-6 h-6" />;
      default:
        return <IoBusiness className="w-6 h-6" />;
    }
  };

  const getServiceColor = (serviceType) => {
    switch (serviceType) {
      case 'auditorium':
        return 'from-blue-500 to-blue-600';
      case 'catering':
        return 'from-green-500 to-green-600';
      case 'photography':
        return 'from-purple-500 to-purple-600';
      case 'stage-decoration':
        return 'from-pink-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getServiceBadgeColor = (serviceType) => {
    switch (serviceType) {
      case 'auditorium':
        return 'bg-blue-100 text-blue-800';
      case 'catering':
        return 'bg-green-100 text-green-800';
      case 'photography':
        return 'bg-purple-100 text-purple-800';
      case 'stage-decoration':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">My Services</h1>
              <p className="text-gray-600">Manage your service listings and packages</p>
            </div>
            <button
              onClick={() => navigate('/provider/add-service')}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <IoAdd className="w-5 h-5" />
              Add New Service
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Services</p>
                  <p className="text-3xl font-bold text-gray-800">{services.length}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <IoBusiness className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Auditoriums</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {services.filter(s => s.serviceType === 'auditorium').length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <IoBusiness className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Catering</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {services.filter(s => s.serviceType === 'catering').length}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <IoRestaurant className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Photography</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {services.filter(s => s.serviceType === 'photography').length}
                  </p>
                </div>
                <div className="p-3 bg-pink-100 rounded-full">
                  <IoCamera className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <IoBusiness className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Services Yet</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start building your business by adding your first service. Create auditoriums, catering services, photography packages, or decoration services.
            </p>
            <button
              onClick={() => navigate('/provider/add-service')}
              className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Add Your First Service
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${getServiceColor(service.serviceType)} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {getServiceIcon(service.serviceType)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getServiceBadgeColor(service.serviceType)}`}>
                      {service.serviceType.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    {service.auditoriumName || service.companyName || service.studioName}
                  </h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <IoLocationOutline className="w-4 h-4" />
                    <span>{service.location}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Service Specific Info */}
                  <div className="space-y-2 mb-4">
                    {service.capacity && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <IoBusiness className="w-4 h-4" />
                        <span>Capacity: {service.capacity} people</span>
                      </div>
                    )}

                    {service.packages && service.packages.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <IoPricetagOutline className="w-4 h-4" />
                        <span>{service.packages.length} packages available</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <IoCalendarOutline className="w-4 h-4" />
                      <span>Created {new Date(service.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Pricing Preview */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Starting from</p>
                    <p className="text-lg font-bold text-green-600">
                      ₹{service.pricePerDay || service.pricePerHour || (service.packages && service.packages[0]?.pricePerPerson) || 'Contact for price'}
                      {service.pricePerDay && '/day'}
                      {service.pricePerHour && '/hour'}
                      {service.packages && service.packages[0]?.pricePerPerson && '/person'}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/provider/edit/${service.serviceType}/${service._id}`)}
                      className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
                    >
                      <IoEye className="w-4 h-4" />
                      View/Edit
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${service.auditoriumName || service.companyName || service.studioName}"? This action cannot be undone.`)) {
                          alert("Service deletion functionality will be implemented soon.");
                        }
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      title="Delete this service"
                    >
                      <IoTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServices;
