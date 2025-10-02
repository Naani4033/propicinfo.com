import React from 'react';
import { Leaf } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const NaturalEditService = () => {
  const serviceData = {
    title: "Natural Photo Editing",
    subtitle: "Subtle Enhancement & Organic Beauty",
    description: "Achieve beautiful, natural-looking photo enhancements that preserve the authentic character of your images. Our subtle editing approach enhances without over-processing, maintaining the organic beauty and realistic appearance your photos deserve.",
    icon: <Leaf className="w-10 h-10 text-white" />,
    benefits: [
      "Subtle enhancement that preserves natural image character",
      "Organic color grading without artificial oversaturation",
      "Gentle exposure and contrast adjustments for balanced results",
      "Noise reduction while maintaining natural texture",
      "Authentic skin tone and color preservation in portraits",
      "Professional results that look naturally enhanced"
    ],
    process: [
      {
        step: "Natural Assessment",
        description: "Careful evaluation to identify areas for subtle, natural enhancement."
      },
      {
        step: "Gentle Corrections",
        description: "Minimal exposure, color, and contrast adjustments for natural balance."
      },
      {
        step: "Organic Enhancement",
        description: "Subtle detail enhancement and clarity improvement without over-processing."
      },
      {
        step: "Color Harmony",
        description: "Natural color grading that enhances without creating artificial appearance."
      },
      {
        step: "Authentic Polish",
        description: "Final quality check ensuring natural, authentic results throughout."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/RAW035201.jpg",
        after: "../src/assets/RAW03520.jpg",
        title: "Natural Portrait Enhancement"
      },
      {
        before: "../src/assets/natual bef.jpg",
        after: "../src/assets/natual aft.jpg",
        title: "Organic Landscape Processing"
      },
      {
        before: "../src/assets/RAW03480.jpg",
        after: "../src/assets/RAW034803.jpg",
        title: "Subtle Architecture Enhancement"
      }
    ],
    pricing: {
      basic: 18,
      standard: 30,
      premium: 50
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default NaturalEditService;