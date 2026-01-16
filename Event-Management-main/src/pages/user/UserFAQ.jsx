import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";

const UserFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a service for my event?",
      answer: "To book a service, browse through the available services on the homepage or use the search function. Click on a service to view details, check availability, and pricing. Once you've selected a service, click 'Book Now' and fill in your event details including date, time, and any special requirements. Complete the payment process to confirm your booking."
    },
    {
      question: "How can I view my bookings?",
      answer: "You can view all your bookings by navigating to the 'My Bookings' section in your dashboard. Here you'll see all your confirmed bookings, their status (upcoming, completed, cancelled), event dates, service details, and payment information. You can also filter bookings by status or date."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify bookings depending on the service provider's cancellation policy. Go to 'My Bookings' and select the booking you want to modify. You can request changes or cancellations, but please note that cancellation fees may apply based on the provider's terms and how close your event date is."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through our encrypted payment gateway. You'll receive a payment confirmation email once your transaction is successful."
    },
    {
      question: "How do I know if my booking is confirmed?",
      answer: "After completing the payment, you'll receive a booking confirmation email with all the details. You can also check the status in your 'My Bookings' section. A confirmed booking will show as 'Confirmed' status. The service provider will also receive your booking request and may contact you for any additional details."
    },
    {
      question: "What should I do if I have a complaint or issue with a service?",
      answer: "If you encounter any issues with a booked service, you can contact the service provider directly through the platform. You can also leave a review and rating after the service is completed. For serious complaints or disputes, please contact our customer support team, and we'll help resolve the issue promptly."
    },
    {
      question: "Can I book multiple services for the same event?",
      answer: "Absolutely! You can book multiple services for your event. Simply add each service to your cart or book them separately. Make sure all services are booked for the same event date and time. You can view all your bookings for a specific event date in your dashboard."
    },
    {
      question: "How far in advance should I book services?",
      answer: "It's recommended to book services as early as possible, especially for popular dates like weekends, holidays, or wedding seasons. Some services may require booking weeks or months in advance. Check the availability calendar for each service to see available dates and book accordingly."
    },
    {
      question: "What information do I need to provide when booking?",
      answer: "When booking a service, you'll need to provide your contact information, event date and time, venue address, number of guests (if applicable), any special requirements or preferences, and payment details. Make sure all information is accurate to ensure smooth service delivery."
    },
    {
      question: "How do I contact a service provider?",
      answer: "You can contact service providers through the platform messaging system. Go to your booking details and use the 'Contact Provider' option. Service providers typically respond within 24-48 hours. For urgent matters, you can also find their contact information in the service details page."
    },
    {
      question: "What happens if a service provider cancels my booking?",
      answer: "If a service provider cancels your booking, you'll be notified immediately via email and in your dashboard. You'll receive a full refund if the cancellation is on the provider's end. We'll also help you find alternative services if needed. Your refund will be processed within 5-7 business days."
    },
    {
      question: "Can I get a refund if I'm not satisfied with the service?",
      answer: "Refund policies vary by service provider. If you're not satisfied with the service, please contact the provider first to discuss the issue. If the issue cannot be resolved, contact our customer support team. We'll review your case and process refunds according to the provider's refund policy and our terms of service."
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
            Find answers to common questions about booking services and managing your events
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

export default UserFAQ;
