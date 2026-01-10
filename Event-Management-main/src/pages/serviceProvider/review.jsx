import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews of this provider
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/reviews/provider");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews", err);
      }
      setLoading(false);
    };

    fetchReviews();
  }, []);

 if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-600">Customer Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
            >
              {/* Customer Name */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{r.customer.name}</h3>
                <span className="text-sm text-gray-500">{r.createdAt}</span>
              </div>

              {/* Service Type */}
              <p className="text-blue-600 font-medium text-sm mb-2">
                Service: {r.serviceType}
              </p>

              {/* Rating */}
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-xl ${
                      index < Math.round(r.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-600">{r.rating}/5</span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4">{r.comment}</p>

              {/* Review Images */}
              {r.images && r.images.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {r.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="review"
                      className="h-20 w-full object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
