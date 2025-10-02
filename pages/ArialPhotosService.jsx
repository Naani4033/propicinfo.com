import React from 'react';
import { Camera } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const ArialPhotosService = () => {
  const serviceData = {
    title: "Aerial Photography",
    subtitle: "Professional Drone Photo Enhancement",
    description: "Transform your aerial photography with our specialized drone photo editing services. We enhance perspective, correct distortions, and optimize colors to create stunning bird's-eye view images perfect for real estate, landscapes, and commercial photography.",
    icon: <Camera className="w-10 h-10 text-white" />,
    benefits: [
      "Perspective correction and lens distortion removal",
      "Color enhancement optimized for aerial photography",
      "Horizon straightening and composition improvement",
      "Weather enhancement and sky replacement options",
      "Contrast and clarity optimization for aerial views",
      "Professional formatting for marketing materials"
    ],
    process: [
      {
        step: "Image Evaluation",
        description: "Assessment of aerial footage quality, perspective issues, and enhancement opportunities."
      },
      {
        step: "Perspective Correction",
        description: "Professional correction of lens distortion and perspective issues common in aerial photography."
      },
      {
        step: "Color Optimization",
        description: "Enhanced color grading specifically tailored for aerial photography lighting conditions."
      },
      {
        step: "Composition Enhancement",
        description: "Horizon correction, cropping optimization, and overall composition improvement."
      },
      {
        step: "Final Processing",
        description: "Detail enhancement, contrast optimization, and final quality assurance for professional results."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/top bef1.jpg",
        after: "../src/assets/top aft1.jpg",
        title: "Real Estate Aerial Enhancement"
      },
      {
        before: "../src/assets/arial_bef2.jpg",
        after: "../src/assets/arial_aft2.jpg",
        title: "Landscape Aerial Processing"
      },
      {
        before: "../src/assets/arial_bef3.jpg",
        after: "../src/assets/arial_aft3.jpg",
        title: "Commercial Aerial Enhancement"
      }
    ],
    pricing: {
      basic: 30,
      standard: 50,
      premium: 90
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default ArialPhotosService;