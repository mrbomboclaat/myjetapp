import { useState } from "react";
import Navbar from "./components/Navbar";
import Advertisement from "./components/Advertisement";
import SignInForm from "./components/SignInForm";
import MemberForm from "./components/MemberForm";
import JetBookingForm from "./components/JetBookingForm";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";

export default function LandingPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isExistingMember, setIsExistingMember] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        signedIn={signedIn} 
        setSignedIn={setSignedIn} 
        username={username} 
      />
      
      <main className="flex-1">
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Experience Luxury Air Travel
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Book private jets to any destination worldwide with our premium charter service
              </p>
            </div>
          </div>
        </div>

        <Advertisement />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Access to over 1000+ private airports worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Service</h3>
              <p className="text-gray-600">Round-the-clock support from our dedicated team</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Fleet</h3>
              <p className="text-gray-600">Choose from our premium selection of private jets</p>
            </div>
          </div>

          {!signedIn ? (
            <div id="sign-in-section" className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-2xl scroll-mt-24">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Welcome to JetPage</h2>
                <p className="mt-2 text-gray-600">Your premium private jet booking platform</p>
              </div>

              {/* Account Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      !isExistingMember
                        ? 'bg-white text-gray-900 shadow'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                    onClick={() => setIsExistingMember(false)}
                  >
                    New Member
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isExistingMember
                        ? 'bg-white text-gray-900 shadow'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                    onClick={() => setIsExistingMember(true)}
                  >
                    Existing Member
                  </button>
                </div>
              </div>

              {isExistingMember ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Sign In to Your Account</h3>
                    <p className="mt-2 text-gray-600">Welcome back to JetPage</p>
                  </div>
                  <MemberForm 
                    setUsername={setUsername} 
                    setSignedIn={setSignedIn}
                    onToggleForm={() => setIsExistingMember(false)}
                  />
                </>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Create Your Account</h3>
                    <p className="mt-2 text-gray-600">Join our elite membership today</p>
                  </div>
                  <SignInForm 
                    username={username} 
                    setUsername={setUsername} 
                    setSignedIn={setSignedIn}
                    onToggleForm={() => setIsExistingMember(true)}
                  />
                </>
              )}
            </div>
          ) : (
            <JetBookingForm />
          )}
        </div>

        {/* About Us Section */}
        <div id="about-section" className="scroll-mt-16">
          <AboutUs />
        </div>

        {/* Contact Section */}
        <div id="contact-section" className="scroll-mt-16">
          <ContactForm />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Our Story</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Private Jets</li>
                <li>Corporate Travel</li>
                <li>Group Charters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} JetPage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
