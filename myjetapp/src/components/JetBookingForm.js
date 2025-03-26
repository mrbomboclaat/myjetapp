import React, { useState } from 'react';
import { Calendar, Plane, Users, Clock, MapPin, CreditCard } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

const jets = [
  {
    id: '1',
    name: 'Gulfstream G650',
    capacity: 19,
    range: '7,000 nm',
    pricePerHour: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    name: 'Bombardier Global 7500',
    capacity: 17,
    range: '7,700 nm',
    pricePerHour: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

 export default function JetBookingForm() {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    departure: '',
    arrival: '',
    date: '',
    passengers: 1,
    selectedJetId: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate departure
    if (!bookingDetails.departure) {
      newErrors.departure = 'Departure airport is required';
    }

    // Validate arrival
    if (!bookingDetails.arrival) {
      newErrors.arrival = 'Arrival airport is required';
    }

    // Validate date
    if (!bookingDetails.date) {
      newErrors.date = 'Date is required';
    }

    // Validate passengers
    if (!bookingDetails.passengers) {
      newErrors.passengers = 'Number of passengers is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowConfirmation(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Private Jet Charter</h1>

      {showConfirmation ? (
        <Alert className="mb-8">
          <AlertDescription>
            Thank you for your booking request! Our team will contact you shortly to confirm the details.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="space-y-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex items-center ${
                  step >= num ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <div className={`rounded-full w-8 h-8 flex items-center justify-center border-2 
                  ${step >= num ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                  {num}
                </div>
                <div className="ml-2">{`Step ${num}`}</div>
              </div>
            ))}
          </div>

          {/* Step 1: Flight Details */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Flight Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-medium">Departure</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="departure"
                      placeholder="City or Airport"
                      className="w-full outline-none"
                      value={bookingDetails.departure}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-medium">Arrival</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      name="arrival"
                      placeholder="City or Airport"
                      className="w-full outline-none"
                      value={bookingDetails.arrival}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-medium">Date</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      name="date"
                      className="w-full outline-none"
                      value={bookingDetails.date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-medium">Passengers</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="number"
                      name="passengers"
                      min="1"
                      max="19"
                      className="w-full outline-none"
                      value={bookingDetails.passengers}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              {/* Error messages */}
              <div className="space-y-2">
                {errors.departure && <p className="text-red-500 text-sm">{errors.departure}</p>}
                {errors.arrival && <p className="text-red-500 text-sm">{errors.arrival}</p>}
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                {errors.passengers && <p className="text-red-500 text-sm">{errors.passengers}</p>}
              </div>

              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  const newErrors = {};

                  // Validate fields before proceeding
                  if (!bookingDetails.departure) {
                    newErrors.departure = 'Departure airport is required';
                  }

                  if (!bookingDetails.arrival) {
                    newErrors.arrival = 'Arrival airport is required';
                  }

                  if (!bookingDetails.date) {
                    newErrors.date = 'Date is required';
                  }

                  if (!bookingDetails.passengers) {
                    newErrors.passengers = 'Number of passengers is required';
                  }

                  if (Object.keys(newErrors).length > 0) {
                    setErrors(newErrors);
                    return;
                  }

                  setErrors({});
                  setStep(2);
                }}
              >
                Next: Select Aircraft
              </button>
            </div>
          )}
          {/* Step 2: Aircraft Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Select Your Aircraft</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jets.map((jet) => (
                  <div
                    key={jet.id}
                    className={`border rounded-lg p-4 cursor-pointer ${
                      bookingDetails.selectedJetId === jet.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'hover:border-blue-300'
                    }`}
                    onClick={() =>
                      setBookingDetails({ ...bookingDetails, selectedJetId: jet.id })
                    }
                  >
                    <img
                      src={jet.imageUrl}
                      alt={jet.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">{jet.name}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{jet.capacity} passengers</span>
                      </div>
                      <div className="flex items-center">
                        <Plane className="w-4 h-4 mr-2" />
                        <span>Range: {jet.range}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>${jet.pricePerHour.toLocaleString()} per hour</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => setStep(3)}
                  disabled={!bookingDetails.selectedJetId}
                >
                  Next: Payment
                </button>
              </div>
            </div>
          )}
          {/* Step 3: Payment Details */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Payment Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-medium">Card Number</label>
                  <div className="flex items-center border rounded-lg p-3">
                    <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-medium">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded-lg p-3 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-medium">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full border rounded-lg p-3 outline-none"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
