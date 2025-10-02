import React from 'react';
import { TreePine } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const LandEnhancementService = () => {
  const serviceData = {
    title: "Land Enhancement",
    subtitle: "Landscape Transformation & Beauty",
    description: "Transform your landscape photography with professional enhancement techniques that bring out the natural beauty of outdoor spaces. Perfect for real estate, nature photography, and commercial landscape projects that need that extra touch of visual impact.",
    icon: <TreePine className="w-10 h-10 text-white" />,
    benefits: [
      "Natural landscape color enhancement and saturation optimization",
      "Sky replacement and dramatic weather effect addition",
      "Grass and foliage enhancement for vibrant green spaces",
      "Water feature enhancement and reflection optimization",
      "Seasonal transformation and aesthetic improvements",
      "Property boundary and feature highlighting services"
    ],
    process: [
      {
        step: "Landscape Assessment",
        description: "Comprehensive evaluation of landscape elements and enhancement opportunities."
      },
      {
        step: "Natural Enhancement",
        description: "Color optimization, contrast adjustment, and natural feature enhancement."
      },
      {
        step: "Sky & Weather",
        description: "Sky enhancement or replacement with appropriate weather conditions."
      },
      {
        step: "Vegetation Boost",
        description: "Grass, trees, and foliage enhancement for lush, appealing landscapes."
      },
      {
        step: "Final Composition",
        description: "Overall composition optimization and final atmospheric enhancement."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/land.jpg",
        after: "../src/assets/DSC09724.jpg",
        title: "Property Landscape Enhancement"
      },
      {
        before: "../src/assets/DJI_03621.jpg",
        after: "../src/assets/DJI_0362.jpg",
        title: "Natural Landscape Processing"
      },
      {
        before: "../src/assets/DJI_03632.jpg",
        after: "../src/assets/DJI_0363.jpg",
        title: "Commercial Land Enhancement"
      }
    ],
    pricing: {
      basic: 25,
      standard: 40,
      premium: 70
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default LandEnhancementService;