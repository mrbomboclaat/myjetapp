import { useState } from 'react';
import { authenticateUser } from '../services/authService';

import { LoadingSpinner } from './ui/LoadingSpinner';

export default function SignInForm({ setUsername, setSignedIn, onToggleForm }) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validate form inputs
    if (!formData.email) {
        newErrors.email = 'Email is required';
    }
    if (!formData.password) {
        newErrors.password = 'Password is required';
    }
    if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    // Proceed with login if no errors
    setIsLoading(true);
    try {
        const user = await authenticateUser(formData.email, formData.password);
        setUsername(user.username);
        setSignedIn(true);
        setErrors({});
    } catch (error) {
        setErrors({
            auth: error.response.data.message || 'Login failed'
        });
    } finally {
        setIsLoading(false);
    }
};


    return (
        <>
            {isLoading && <LoadingSpinner />}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="your@email.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                errors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="First Name"
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                errors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Last Name"
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                    </div>

                    {errors.auth && (
                        <div className="p-3 mb-4 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                            {errors.auth}
                        </div>
                    )}
                    <div className="space-y-4">
                        <button 
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                        >
                            Sign Up
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={onToggleForm}
                                className="text-blue-600 hover:text-blue-500 font-medium"
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
                    }
