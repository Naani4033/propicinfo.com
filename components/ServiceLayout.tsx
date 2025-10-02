import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Clock, DollarSign, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
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
    beforeAfterImages: {
        before: string;
        after: string;
        title: string;
    }[];
    pricing: {
        basic: number;
        standard: number;
        premium: number;
    };
}

const ServiceLayout: React.FC<ServiceData> = ({
    title,
    subtitle,
    description,
    icon,
    benefits,
    process,
    beforeAfterImages,
    pricing
}) => {
    const [beforeSliderIndex, setBeforeSliderIndex] = useState(0);
    const [afterSliderIndex, setAfterSliderIndex] = useState(0);
    const [isBeforeAutoPlay, setIsBeforeAutoPlay] = useState(true);
    const [isAfterAutoPlay, setIsAfterAutoPlay] = useState(true);

    // Auto-slide functionality
    useEffect(() => {
        if (!isBeforeAutoPlay) return;

        const interval = setInterval(() => {
            setBeforeSliderIndex((prev) => (prev + 1) % beforeAfterImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [beforeAfterImages.length, isBeforeAutoPlay]);

    useEffect(() => {
        if (!isAfterAutoPlay) return;

        const interval = setInterval(() => {
            setAfterSliderIndex((prev) => (prev + 1) % beforeAfterImages.length);
        }, 3500); // Slightly different timing for variety

        return () => clearInterval(interval);
    }, [beforeAfterImages.length, isAfterAutoPlay]);

    const nextBeforeImage = () => {
        setBeforeSliderIndex((prev) => (prev + 1) % beforeAfterImages.length);
    };

    const prevBeforeImage = () => {
        setBeforeSliderIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
    };

    const nextAfterImage = () => {
        setAfterSliderIndex((prev) => (prev + 1) % beforeAfterImages.length);
    };

    const prevAfterImage = () => {
        setAfterSliderIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
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
                        <h2 className="text-4xl font-bold text-white mb-6">Image</h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Experience the transformation power of our professional {title.toLowerCase()} services
                        </p>
                    </div>

                    <div className="relative group p-5">
                        {/* Main Featured Image */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform scale-105">
                            <img
                                src={beforeAfterImages[0]?.after || "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200"}
                                alt="Featured transformation"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Overlay with service info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                        <h3 className="text-2xl font-bold text-white mb-2">Professional Results</h3>
                                        <p className="text-white/90 text-lg">
                                            {beforeAfterImages[0]?.title || "Premium quality enhancement"}
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

            {/* Before/After Gallery */}
            <section className="h-full px-2 py-24">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold text-white mb-20 text-center">Before & After Gallery</h2>

                    <div className="grid 2xl:grid-cols-2 gap-24 max-w-[2000px] mx-auto">
                        {/* Before Images Slider */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-xl font-bold text-white">Before</h3>
                                <button
                                    onClick={() => setIsBeforeAutoPlay(!isBeforeAutoPlay)}
                                    className="flex items-center space-x-4 bg-purple-500/20 hover:bg-purple-500/30 px-8 py-4 rounded-full text-white transition-all duration-200"
                                >
                                    {isBeforeAutoPlay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    <span className="text-xl font-medium">{isBeforeAutoPlay ? 'Pause' : 'Play'}</span>
                                </button>
                            </div>

                            <div className="relative">
                                <div className="aspect-[5/3] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={beforeAfterImages[beforeSliderIndex]?.before}
                                        alt="Before"
                                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                    />
                                </div>

        
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center space-x-6 mt-12">
                                {beforeAfterImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setBeforeSliderIndex(index);
                                            setIsBeforeAutoPlay(false);
                                        }}
                                        className={`w-6 h-6 rounded-full transition-all duration-300 ${index === beforeSliderIndex
                                            ? 'bg-purple-500 scale-175 shadow-xl shadow-purple-500/60'
                                            : 'bg-white/30 hover:bg-white/50 hover:scale-150'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-3 gap-6 mt-12">
                                {beforeAfterImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setBeforeSliderIndex(index);
                                            setIsBeforeAutoPlay(false);
                                        }}
                                        className={`aspect-video rounded-3xl overflow-hidden border-4 transition-all duration-300 hover:scale-115 ${index === beforeSliderIndex
                                            ? 'border-purple-500 shadow-2xl shadow-purple-500/50'
                                            : 'border-white/20 hover:border-white/40'
                                            }`}
                                    >
                                        <img
                                            src={image.before}
                                            alt={`Before ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* After Images Slider */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-xl font-bold text-white">After</h3>
                                <button
                                    onClick={() => setIsAfterAutoPlay(!isAfterAutoPlay)}
                                    className="flex items-center space-x-4 bg-pink-500/20 hover:bg-pink-500/30 px-8 py-4 rounded-full text-white transition-all duration-900"
                                >
                                    {isAfterAutoPlay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    <span className="text-xl font-medium">{isAfterAutoPlay ? 'Pause' : 'Play'}</span>
                                </button>
                            </div>

                            <div className="relative">
                                <div className="aspect-[5/3] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={beforeAfterImages[afterSliderIndex]?.after}
                                        alt="After"
                                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                    />
                                </div>

                                
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center space-x-6 mt-12">
                                {beforeAfterImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setAfterSliderIndex(index);
                                            setIsAfterAutoPlay(false);
                                        }}
                                        className={`w-6 h-6 rounded-full transition-all duration-300 ${index === afterSliderIndex
                                            ? 'bg-pink-500 scale-175 shadow-xl shadow-pink-500/60'
                                            : 'bg-white/30 hover:bg-white/50 hover:scale-150'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Thumbnails */}
                            <div className="grid grid-cols-3 gap-6 mt-12">
                                {beforeAfterImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setAfterSliderIndex(index);
                                            setIsAfterAutoPlay(false);
                                        }}
                                        className={`aspect-video rounded-3xl overflow-hidden border-4 transition-all duration-300 hover:scale-115 ${index === afterSliderIndex
                                            ? 'border-pink-500 shadow-2xl shadow-pink-500/50'
                                            : 'border-white/20 hover:border-white/40'
                                            }`}
                                    >
                                        <img
                                            src={image.after}
                                            alt={`After ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex flex-wrap justify-center gap-8 mt-20">
                        <button
                            onClick={() => {
                                setBeforeSliderIndex(0);
                                setAfterSliderIndex(0);
                            }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/40"
                        >
                            Sync Both Sliders
                        </button>

                        <button
                            onClick={() => {
                                setIsBeforeAutoPlay(true);
                                setIsAfterAutoPlay(true);
                            }}
                            className="bg-gradient-to-r from-green-500 to-blue-500 px-10 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/40"
                        >
                            Start Auto-Play
                        </button>

                        <button
                            onClick={() => {
                                setIsBeforeAutoPlay(false);
                                setIsAfterAutoPlay(false);
                            }}
                            className="bg-gradient-to-r from-red-500 to-orange-500 px-10 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/40"
                        >
                            Stop Auto-Play
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ServiceLayout;