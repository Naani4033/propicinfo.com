import React from 'react';
import { Zap } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const HDRService = () => {
  const serviceData = {
    title: "HDR Photography",
    subtitle: "High Dynamic Range Enhancement",
    description: "Transform your photos with professional HDR processing that captures every detail from shadows to highlights. Our advanced techniques create stunning, natural-looking images with enhanced dynamic range while maintaining realistic colors and tones.",
    icon: <Zap className="w-10 h-10 text-white" />,
    benefits: [
      "Enhanced detail in both shadows and highlights for balanced exposure",
      "Natural color reproduction without the artificial HDR look",
      "Professional tone mapping that preserves image quality",
      "Perfect for real estate, architecture, and landscape photography",
      "Multiple exposure blending for optimal results",
      "Custom processing tailored to your specific needs"
    ],
    process: [
      {
        step: "Image Analysis",
        description: "We analyze your bracketed exposures or single RAW file to determine the best HDR approach for optimal results."
      },
      {
        step: "Exposure Alignment",
        description: "Multiple exposures are precisely aligned to eliminate ghosting and ensure perfect registration."
      },
      {
        step: "HDR Generation",
        description: "Advanced algorithms merge exposures to create a high dynamic range image with full detail retention."
      },
      {
        step: "Tone Mapping",
        description: "Professional tone mapping brings out details while maintaining natural colors and realistic appearance."
      },
      {
        step: "Final Enhancement",
        description: "Color correction, contrast optimization, and final polish to deliver stunning, print-ready results."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/hdr bef.jpg",
        after: "../src/assets/hdr aft.jpg",
        title: "Real Estate HDR Enhancement"
      },
      {
        before: "../src/assets/QE2A1001.jpg",
        after: "../src/assets/QE2A32261 (2).jpg",
        title: "Interior HDR Processing"
      },
      {
        before: "../src/assets/QE2A3086.jpg",
        after: "../src/assets/QE2A30861.jpg",
        title: "Landscape HDR Enhancement"
      }
    ],
    pricing: {
      basic: 25,
      standard: 45,
      premium: 85
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default HDRService;