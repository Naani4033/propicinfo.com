import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceData {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    benefits: string[];
    process: {
        step: string;
        description: string;
    }[];
    featuredImages: string[];
}

const SimpleServiceLayout: React.FC<ServiceData> = ({
    title,
    subtitle,
    description,
    icon,
    benefits,
    process,
    featuredImages
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [featuredImages.length]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
    };
    return (
        <div className="min-h-screen pt-20">
            {/* Back Button */}
            <div className="container mx-auto px-6 py-8">
                <Link
                    to="/"
                    className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                            {icon}
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-2xl text-white/70 mb-6">{subtitle}</p>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto">{description}</p>
                </div>
            </section>

            {/* Featured Image Section */}
            <section className="container mx-auto px-2 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-6">Professional Results</h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Experience the transformation power of our professional {title.toLowerCase()} services
                        </p>
                    </div>

                    <div className="relative group p-5">
                        {/* Main Featured Image Slider */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform scale-105 relative">
                            <img
                                src={featuredImages[currentImageIndex]}
                                alt={`Featured service result ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {featuredImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? 'bg-white scale-125 shadow-lg'
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Overlay with service info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-16 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                        <h3 className="text-2xl font-bold text-white mb-2">Professional Results</h3>
                                        <p className="text-white/90 text-lg">
                                            Premium quality enhancement and professional service
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>

                        {/* Stats Cards */}
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                                    <div className="text-white/70 text-sm">Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-8 top-1/3 transform -translate-y-1/2 hidden lg:block">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                                    <div className="text-white/70 text-sm">Quality</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-8 bottom-1/3 transform translate-y-1/2 hidden lg:block">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-pink-400 mb-2">Fast</div>
                                    <div className="text-white/70 text-sm">Delivery</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30 group">
                            <span className="mr-2">Start Your Transformation</span>
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p className="text-white/80">{benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Process</h2>
                <div className="space-y-8">
                    {process.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-start space-x-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                                <p className="text-white/70">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SimpleServiceLayout;