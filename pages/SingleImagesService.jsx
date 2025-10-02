import React from 'react';
import { Image } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const SingleImagesService = () => {
  const serviceData = {
    title: "Single Image Enhancement",
    subtitle: "Professional Individual Photo Processing",
    description: "Transform individual photographs with our comprehensive single image enhancement service. Perfect for special photos that need professional attention, whether for personal use, business materials, or artistic projects.",
    icon: <Image className="w-10 h-10 text-white" />,
    benefits: [
      "Comprehensive color correction and exposure adjustment",
      "Professional sharpening and detail enhancement",
      "Noise reduction and image cleanup services",
      "Artistic style application and mood enhancement",
      "Background replacement or enhancement options",
      "High-resolution output for print and digital use"
    ],
    process: [
      {
        step: "Image Evaluation",
        description: "Thorough assessment of your image to identify enhancement opportunities and challenges."
      },
      {
        step: "Basic Corrections",
        description: "Essential corrections including exposure, color balance, and perspective adjustments."
      },
      {
        step: "Detail Enhancement",
        description: "Professional sharpening, noise reduction, and fine detail optimization."
      },
      {
        step: "Artistic Processing",
        description: "Style application, mood enhancement, and creative adjustments as requested."
      },
      {
        step: "Final Polish",
        description: "Quality assurance, final adjustments, and preparation for intended use."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/single bef.jpg",
        after: "../src/assets/single.jpg",
        title: "Portrait Enhancement"
      },
      {
        before: "../src/assets/IMG_40481.jpg",
        after: "../src/assets/IMG_4048.jpg",
        title: "Landscape Processing"
      },
      {
        before: "../src/assets/IMG_40933.jpg",
        after: "../src/assets/IMG_4093.jpg",
        title: "Architectural Enhancement"
      }
    ],
    pricing: {
      basic: 12,
      standard: 20,
      premium: 35
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default SingleImagesService;