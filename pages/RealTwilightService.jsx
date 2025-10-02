import React from 'react';
import { Moon } from 'lucide-react';
import SimpleServiceLayout from '../components/SimpleServiceLayout';

const RealTwilightService = () => {
  const serviceData = {
    title: "Real Twilight Enhancement",
    subtitle: "Authentic Golden Hour Magic",
    description: "Enhance your authentic twilight photography with professional post-processing that captures the natural magic of golden hour. Perfect for real estate, architecture, and landscape photography that demands the genuine warmth and atmosphere of real twilight conditions.",
    icon: <Moon className="w-10 h-10 text-white" />,
    featuredImages: [
      "../src/assets/tiwilight.jpg",
      "../src/assets/DSC08752.jpg",
      "../src/assets/DSC05057.jpg"
    ],
    benefits: [
      "Enhancement of authentic twilight photography conditions",
      "Natural color grading that preserves golden hour warmth",
      "Professional exposure balancing for interior and exterior elements",
      "Sky enhancement without artificial replacement",
      "Highlight and shadow detail optimization",
      "Authentic atmosphere preservation and enhancement"
    ],
    process: [
      {
        step: "Twilight Analysis",
        description: "Assessment of natural twilight conditions and lighting in your photographs."
      },
      {
        step: "Exposure Balancing",
        description: "Professional balancing of interior lighting with natural twilight ambiance."
      },
      {
        step: "Color Enhancement",
        description: "Careful color grading to enhance natural golden hour tones and warmth."
      },
      {
        step: "Detail Optimization",
        description: "Shadow and highlight detail enhancement while maintaining natural appearance."
      },
      {
        step: "Atmosphere Polish",
        description: "Final enhancement of twilight atmosphere and overall mood optimization."
      }
    ]
  };

  return <SimpleServiceLayout {...serviceData} />;
};

export default RealTwilightService;