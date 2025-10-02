import React from 'react';
import { Mountain } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const OutdoorService = () => {
  const serviceData = {
    title: "Outdoor Photography Enhancement",
    subtitle: "Adventure & Nature Photo Processing",
    description: "Elevate your outdoor and adventure photography with specialized processing techniques designed for nature, sports, and outdoor lifestyle images. Capture the excitement and beauty of outdoor experiences with professional enhancement.",
    icon: <Mountain className="w-10 h-10 text-white" />,
    benefits: [
      "Adventure photography optimization and action enhancement",
      "Weather condition enhancement for dramatic outdoor scenes",
      "Natural color enhancement for vibrant outdoor environments",
      "Action blur and motion optimization for dynamic shots",
      "Landscape and nature detail enhancement services",
      "Equipment and gear cleanup in adventure photography"
    ],
    process: [
      {
        step: "Outdoor Analysis",
        description: "Assessment of outdoor conditions and photography challenges in your images."
      },
      {
        step: "Action Enhancement",
        description: "Optimization of motion, action, and dynamic elements in outdoor photography."
      },
      {
        step: "Environment Processing",
        description: "Enhancement of natural environments, weather, and outdoor lighting conditions."
      },
      {
        step: "Adventure Optimization",
        description: "Specialized processing for adventure gear, equipment, and outdoor scenes."
      },
      {
        step: "Final Adventure Polish",
        description: "Overall enhancement to capture the excitement and beauty of outdoor experiences."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/QE2A02711.jpg",
        after: "../src/assets/QE2A0271.jpg",
        title: "Adventure Photography Enhancement"
      },
      {
        before: "../src/assets/outdoor bef.jpg",
        after: "../src/assets/outdoor aft.jpg",
        title: "Nature Photography Processing"
      },
      {
        before: "../src/assets/218 Millstone Pkwy_0031.jpg",
        after: "../src/assets/218 Millstone Pkwy_003.jpg",
        title: "Outdoor Lifestyle Enhancement"
      }
    ],
    pricing: {
      basic: 22,
      standard: 38,
      premium: 65
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default OutdoorService;