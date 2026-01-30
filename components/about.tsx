export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header Section */}
            <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Building innovative solutions with passion and precision
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We are dedicated to creating exceptional digital experiences that transform businesses and inspire users worldwide.
                        </p>
                        <ul className="space-y-4">
                            {['Innovation', 'Quality', 'Excellence', 'Dedication'].map((item) => (
                                <li key={item} className="flex items-center text-gray-200">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Content - Visual Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-30"></div>
                        <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-purple-500/30">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-blue-400 mb-2">10+</div>
                                <p className="text-gray-300 mb-6">Years of Experience</p>
                                <div className="h-1 w-16 bg-linear-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
                                <p className="text-gray-400">Trusted by hundreds of clients globally</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { number: '500+', label: 'Projects Completed' },
                        { number: '200+', label: 'Happy Clients' },
                        { number: '50+', label: 'Team Members' },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 text-center hover:border-purple-500/50 transition">
                            <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                            <p className="text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}