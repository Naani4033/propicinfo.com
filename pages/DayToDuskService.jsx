import React from 'react';
import { Sunset } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const DayToDuskService = () => {
  const serviceData = {
    title: "Day to Dusk Conversion",
    subtitle: "Magical Twilight Transformation",
    description: "Transform daytime property photos into stunning twilight images that capture the warm, inviting atmosphere of golden hour. Our day-to-dusk conversion service creates dramatic, marketable images perfect for real estate listings and architectural photography.",
    icon: <Sunset className="w-10 h-10 text-white" />,
    benefits: [
      "Professional twilight atmosphere creation from daytime photos",
      "Warm interior lighting enhancement and window glow effects",
      "Sky replacement with dramatic sunset/dusk colors",
      "Landscape and exterior lighting optimization",
      "Increased property appeal and market value representation",
      "Cost-effective alternative to actual twilight photography sessions"
    ],
    process: [
      {
        step: "Photo Analysis",
        description: "Evaluation of daytime images to determine the best approach for twilight conversion."
      },
      {
        step: "Sky Replacement",
        description: "Professional replacement with dramatic twilight skies that match the lighting conditions."
      },
      {
        step: "Lighting Adjustment",
        description: "Careful adjustment of overall lighting to simulate natural dusk illumination."
      },
      {
        step: "Interior Glow",
        description: "Addition of warm window glow and interior lighting effects for inviting atmosphere."
      },
      {
        step: "Final Enhancement",
        description: "Color grading, contrast adjustment, and final touches to achieve realistic twilight ambiance."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/day_bef1 (1).JPG",
        after: "../src/assets/day_aft1 (1).jpg",
        title: "Luxury Home Day to Dusk"
      },
      {
        before: "../src/assets/day_bef1 (2).jpg",
        after: "../src/assets/day_aft1 (2).jpg",
        title: "Modern Architecture Twilight"
      },
      {
     before: "../src/assets/day_bef1 (3).jpg",
        after: "../src/assets/day_aft1 (3).jpg",
        title: "Commercial Property Enhancement"
      }
    ],
    pricing: {
      basic: 35,
      standard: 55,
      premium: 95
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default DayToDuskService;