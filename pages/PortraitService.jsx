import React from 'react';
import { User } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const PortraitService = () => {
  const serviceData = {
    title: "Portrait Enhancement",
    subtitle: "Professional Portrait Retouching",
    description: "Elevate your portrait photography with our expert retouching services. We enhance natural beauty while maintaining authenticity, providing professional results for headshots, family portraits, and personal photography that showcase subjects at their absolute best.",
    icon: <User className="w-10 h-10 text-white" />,
    benefits: [
      "Natural skin retouching that preserves texture and authenticity",
      "Professional color correction and exposure adjustment",
      "Background cleanup and replacement options",
      "Eye enhancement and teeth whitening services",
      "Blemish removal and skin smoothing techniques",
      "Hair and clothing detail enhancement"
    ],
    process: [
      {
        step: "Initial Assessment",
        description: "We evaluate your portrait to understand the desired outcome and identify areas for enhancement."
      },
      {
        step: "Skin Retouching",
        description: "Professional skin smoothing and blemish removal while preserving natural texture and character."
      },
      {
        step: "Feature Enhancement",
        description: "Subtle eye brightening, teeth whitening, and other feature enhancements for natural beauty."
      },
      {
        step: "Color & Exposure",
        description: "Professional color grading and exposure adjustment to create the perfect mood and tone."
      },
      {
        step: "Final Polish",
        description: "Background cleanup, detail enhancement, and final quality check for professional results."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/lifestyle l & b_0031.jpg",
        after: "../src/assets/lifestyle l & b_003.jpg",
        title: "Professional Headshot Enhancement"
      },
      {
        before: "../src/assets/lifestyle l & b_0162.jpg",
        after: "../src/assets/lifestyle l & b_016.jpg",
        title: "Beauty Portrait Retouching"
      },
      {
        before: "../src/assets/Motto brand shoot_0543.jpg",
        after: "../src/assets/Motto brand shoot_054.jpg",
        title: "Family Portrait Enhancement"
      }
    ],
    pricing: {
      basic: 20,
      standard: 35,
      premium: 65
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default PortraitService;