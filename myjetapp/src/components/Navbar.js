import React from 'react';
import { Plane } from 'lucide-react';

export default function Navbar({ signedIn, setSignedIn, username }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">JetPage</span>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => {
                const aboutSection = document.querySelector('#about-section');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </button>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </button>
            {signedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {username}</span>
                <button 
                  onClick={() => setSignedIn(false)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  const signInSection = document.querySelector('#sign-in-section');
                  if (signInSection) {
                    signInSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
