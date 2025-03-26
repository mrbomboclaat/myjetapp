export default function Advertisement() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                Fly in Luxury with JetPage
                            </h3>
                            <p className="mt-4 text-lg text-gray-600">
                                Experience unparalleled comfort and convenience with our private jet booking service. 
                                From business trips to luxury vacations, we provide the ultimate flying experience.
                            </p>

                            <dl className="mt-10 space-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Premium Service</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-600">
                                        24/7 concierge support for all your travel needs
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Global Access</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-600">
                                        Fly to over 1000+ destinations worldwide
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Luxury Fleet</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-600">
                                        Choose from our selection of premium aircraft
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-10 lg:mt-0 relative">
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <img
                                    className="w-full h-96 object-cover rounded-lg"
                                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Luxury Private Jet"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/800x400?text=Luxury+Private+Jet";
                                    }}
                                />
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                    <div className="bg-white bg-opacity-75 rounded-lg p-4">
                                        <span className="text-blue-600 font-semibold">Experience Luxury</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
