import React from 'react';
import { Clock, Calendar, Plane } from 'lucide-react';

export function RouteDetails({ routeInfo, flightSchedule }) {
    if (!routeInfo) return null;

    const { distance, originTimezone, destinationTimezone, timeDifference } = routeInfo;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Route Information</h3>
            
            {/* Distance and Flight Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                        <Plane className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-700">Distance</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{distance?.distance} {distance?.unit}</p>
                    <p className="text-sm text-gray-600">
                        Estimated flight time: {distance?.estimatedFlightTime.hours}h {distance?.estimatedFlightTime.minutes}m
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-700">Time Zones</span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-gray-600">
                            Origin: GMT {originTimezone?.gmtOffset >= 0 ? '+' : ''}{originTimezone?.gmtOffset}
                        </p>
                        <p className="text-sm text-gray-600">
                            Destination: GMT {destinationTimezone?.gmtOffset >= 0 ? '+' : ''}{destinationTimezone?.gmtOffset}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                            Time Difference: {timeDifference >= 0 ? '+' : ''}{timeDifference} hours
                        </p>
                    </div>
                </div>
            </div>

            {/* Flight Schedules */}
            {flightSchedule?.departures?.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Today's Departures</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Flight
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Destination
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {flightSchedule.departures.map((flight, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {flight.airline} {flight.flightNumber}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {flight.destination}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(flight.scheduledTime).toLocaleTimeString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                                ${flight.status === 'active' ? 'bg-green-100 text-green-800' : 
                                                  flight.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 
                                                  'bg-gray-100 text-gray-800'}`}>
                                                {flight.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Local Times */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-700">Origin Local Time</span>
                    </div>
                    <p className="text-lg text-gray-900">{originTimezone?.currentTime}</p>
                    <p className="text-sm text-gray-600">{originTimezone?.zoneName}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-gray-700">Destination Local Time</span>
                    </div>
                    <p className="text-lg text-gray-900">{destinationTimezone?.currentTime}</p>
                    <p className="text-sm text-gray-600">{destinationTimezone?.zoneName}</p>
                </div>
            </div>
        </div>
    );
}
