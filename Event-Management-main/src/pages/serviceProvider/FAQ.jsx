import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I add a new service to my profile?",
      answer: "To add a new service, navigate to 'Add Service' in the sidebar, then select the type of service you want to add (Auditorium, Catering, Stage Decoration, or Photography). Fill in all the required details including service name, description, pricing, images, and availability. Once submitted, your service will be reviewed and then made available to customers."
    },
    {
      question: "How can I manage my bookings?",
      answer: "You can view and manage all your bookings from the 'Booking Details' section in the sidebar. Here you'll see all incoming booking requests, their status (pending, confirmed, completed), customer details, event dates, and payment information. You can accept, reject, or update booking statuses as needed."
    },
    {
      question: "How do I update my service information?",
      answer: "Go to 'My Services' in the sidebar to see all your listed services. Click on the service you want to edit, and you'll be able to update details like pricing, description, images, availability, and other service-specific information. Make sure to save your changes after editing."
    },
    {
      question: "What should I do if a customer cancels a booking?",
      answer: "If a customer cancels a booking, you'll be notified in the 'Booking Details' section. The booking status will automatically update to 'Cancelled'. Depending on your cancellation policy, you may need to process refunds. Make sure to review your service terms and conditions regarding cancellations."
    },
    {
      question: "How do I receive payments for my services?",
      answer: "Payments are processed through the platform's payment system. Once a booking is confirmed and the service is completed, payments are typically transferred to your account according to the platform's payment schedule. You can track your earnings and payment history in your dashboard."
    },
    {
      question: "Can I set different prices for different time slots or dates?",
      answer: "Yes, you can set dynamic pricing based on dates, time slots, or seasons. When creating or editing a service, you'll find options to set different pricing for peak seasons, weekends, holidays, or specific time slots. This helps you maximize your revenue during high-demand periods."
    },
    {
      question: "How do I handle customer reviews and ratings?",
      answer: "Customer reviews and ratings appear in the 'Review' section of your dashboard. You can view all feedback from customers who have used your services. Positive reviews help build your reputation, while constructive feedback can help you improve your services. You can respond to reviews to engage with customers."
    },
    {
      question: "What information should I include in my service description?",
      answer: "Your service description should be clear and comprehensive. Include details about what's included in your service, capacity (for venues), menu options (for catering), package details, any special features, equipment provided, setup time required, and any terms or conditions. High-quality images are also essential to attract customers."
    },
    {
      question: "How can I improve my service visibility?",
      answer: "To improve visibility, ensure your service listings are complete with all details filled in, use high-quality images, maintain competitive pricing, respond promptly to booking inquiries, collect positive reviews, and keep your availability calendar updated. Active providers with good ratings tend to appear higher in search results."
    },
    {
      question: "What happens if I need to decline a booking request?",
      answer: "You can decline booking requests from the 'Booking Details' section. When you decline, the customer will be notified, and the booking status will be updated. It's recommended to provide a brief reason for declining if possible. Make sure your availability calendar is accurate to minimize unnecessary booking requests."
    },
    {
      question: "Can I offer discounts or promotional packages?",
      answer: "Yes, you can create promotional packages or offer discounts. When editing your service, you can set special pricing for packages, early bird discounts, bulk bookings, or seasonal offers. These promotional rates can help attract more customers and increase bookings during slower periods."
    },
    {
      question: "How do I update my availability calendar?",
      answer: "You can update your availability when creating or editing a service. Set your available dates, time slots, and any blackout dates when you're not available. Keep your calendar updated regularly to ensure customers only see accurate availability, which helps prevent booking conflicts."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-50 min-h-full w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <HiQuestionMarkCircle className="text-4xl text-cyan-600" />
            <h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about managing your services and bookings
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4 flex-1">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <IoIosArrowUp className="text-2xl text-cyan-600" />
                  ) : (
                    <IoIosArrowDown className="text-2xl text-gray-400" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 p-6 bg-cyan-50 border border-cyan-200 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Still have questions?</h2>
          <p className="text-gray-700 mb-4">
            If you can't find the answer you're looking for, please contact our support team for assistance.
          </p>
          <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
