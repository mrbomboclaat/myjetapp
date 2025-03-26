export const airports = [
  {
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
    city: 'New York',
    country: 'United States',
    coordinates: { lat: 40.6413, lng: -73.7781 }
  },
  {
    code: 'LHR',
    name: 'London Heathrow Airport',
    city: 'London',
    country: 'United Kingdom',
    coordinates: { lat: 51.4700, lng: -0.4543 }
  },
  {
    code: 'CDG',
    name: 'Charles de Gaulle Airport',
    city: 'Paris',
    country: 'France',
    coordinates: { lat: 49.0097, lng: 2.5479 }
  },
  {
    code: 'DXB',
    name: 'Dubai International Airport',
    city: 'Dubai',
    country: 'United Arab Emirates',
    coordinates: { lat: 25.2532, lng: 55.3657 }
  },
  {
    code: 'HND',
    name: 'Haneda Airport',
    city: 'Tokyo',
    country: 'Japan',
    coordinates: { lat: 35.5494, lng: 139.7798 }
  },
  {
    code: 'SIN',
    name: 'Singapore Changi Airport',
    city: 'Singapore',
    country: 'Singapore',
    coordinates: { lat: 1.3644, lng: 103.9915 }
  },
  {
    code: 'LAX',
    name: 'Los Angeles International Airport',
    city: 'Los Angeles',
    country: 'United States',
    coordinates: { lat: 33.9416, lng: -118.4085 }
  },
  {
    code: 'FRA',
    name: 'Frankfurt Airport',
    city: 'Frankfurt',
    country: 'Germany',
    coordinates: { lat: 50.0379, lng: 8.5622 }
  },
  {
    code: 'HKG',
    name: 'Hong Kong International Airport',
    city: 'Hong Kong',
    country: 'Hong Kong',
    coordinates: { lat: 22.3080, lng: 113.9185 }
  },
  {
    code: 'SYD',
    name: 'Sydney Airport',
    city: 'Sydney',
    country: 'Australia',
    coordinates: { lat: -33.9399, lng: 151.1753 }
  },
  {
    code: 'AMS',
    name: 'Amsterdam Airport Schiphol',
    city: 'Amsterdam',
    country: 'Netherlands',
    coordinates: { lat: 52.3105, lng: 4.7683 }
  },
  {
    code: 'MAD',
    name: 'Adolfo Suárez Madrid–Barajas Airport',
    city: 'Madrid',
    country: 'Spain',
    coordinates: { lat: 40.4983, lng: -3.5676 }
  },
  {
    code: 'ICN',
    name: 'Incheon International Airport',
    city: 'Seoul',
    country: 'South Korea',
    coordinates: { lat: 37.4602, lng: 126.4407 }
  },
  {
    code: 'YYZ',
    name: 'Toronto Pearson International Airport',
    city: 'Toronto',
    country: 'Canada',
    coordinates: { lat: 43.6777, lng: -79.6248 }
  },
  {
    code: 'BCN',
    name: 'Barcelona–El Prat Airport',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: { lat: 41.2974, lng: 2.0833 }
  }
];

export const getAirportSuggestions = (query) => {
  const searchTerm = query.toLowerCase();
  return airports.filter(airport => 
    airport.code.toLowerCase().includes(searchTerm) ||
    airport.name.toLowerCase().includes(searchTerm) ||
    airport.city.toLowerCase().includes(searchTerm) ||
    airport.country.toLowerCase().includes(searchTerm)
  ).slice(0, 5); // Limit to 5 suggestions
};

export const isValidAirport = (input) => {
  const searchTerm = input.toLowerCase();
  return airports.some(airport => 
    airport.code.toLowerCase() === searchTerm ||
    airport.name.toLowerCase() === searchTerm ||
    `${airport.city}, ${airport.country}`.toLowerCase() === searchTerm
  );
};

export const formatAirport = (airport) => {
  return `${airport.city}, ${airport.country} (${airport.code})`;
};
