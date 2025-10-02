import React from 'react';
import { Lightbulb } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';



const FlashAmbientService = () => {
  const serviceData = {
    title: "Flash Ambient Blending",
    subtitle: "Perfect Light Balance Technique",
    description: "Master the art of flash and ambient light blending with our professional processing service. Create perfectly balanced images that combine the best of flash illumination with natural ambient lighting for stunning, professional results.",
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    benefits: [
      "Professional blending of flash and ambient light sources",
      "Natural-looking illumination without harsh shadows",
      "Color temperature balance between different light sources",
      "Detail preservation in both highlights and shadows",
      "Elimination of flash artifacts and hot spots",
      "Optimized for real estate and interior photography"
    ],
    process: [
      {
        step: "Image Analysis",
        description: "Evaluation of flash and ambient exposures to determine optimal blending strategy."
      },
      {
        step: "Exposure Alignment",
        description: "Precise alignment of multiple exposures for seamless blending results."
      },
      {
        step: "Light Balance",
        description: "Professional balancing of flash and ambient light for natural appearance."
      },
      {
        step: "Color Correction",
        description: "Temperature adjustment and color balancing between different light sources."
      },
      {
        step: "Final Enhancement",
        description: "Detail optimization, contrast adjustment, and final quality polish."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/flash bef 1 (1).jpg",
        after: "../src/assets/flash aft 1.jpg ",
        title: "Interior Flash Ambient Blend"
      },
      {
        before: "../src/assets/flash bef 1 (3).jpg",
        after: "../src/assets/flash aft 2.jpg",
        title: "Real Estate Light Balance"
      },
      {
        before: "../src/assets/flash bef 1 (2).jpg",
        after: "../src/assets/flash aft 3.jpg",
        title: "Commercial Space Enhancement"
      }
    ],
    pricing: {
      basic: 28,
      standard: 45,
      premium: 75
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default FlashAmbientService;