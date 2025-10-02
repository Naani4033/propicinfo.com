import React from 'react';
import { Eraser } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const PatchRemovalsService = () => {
  const serviceData = {
    title: "Patch Removals from Walls",
    subtitle: "Professional Object & Imperfection Removal",
    description: "Remove unwanted wall patches, holes, stains, and imperfections from your photos with professional precision. Perfect for real estate photography and interior images that need clean, flawless wall surfaces for maximum appeal.",
    icon: <Eraser className="w-10 h-10 text-white" />,
    benefits: [
      "Professional removal of wall patches, holes, and damage marks",
      "Seamless texture recreation and wall surface restoration",
      "Color matching and natural blending techniques",
      "Stain, scuff, and mark elimination services",
      "Paint inconsistency correction and wall uniformity",
      "Clean, marketable interiors for real estate listings"
    ],
    process: [
      {
        step: "Damage Assessment",
        description: "Identification and evaluation of wall imperfections and removal requirements."
      },
      {
        step: "Precision Removal",
        description: "Careful removal of patches, holes, stains, and unwanted wall elements."
      },
      {
        step: "Texture Recreation",
        description: "Professional recreation of wall texture and surface patterns for seamless blending."
      },
      {
        step: "Color Matching",
        description: "Precise color matching and blending to maintain natural wall appearance."
      },
      {
        step: "Final Quality Check",
        description: "Comprehensive review ensuring flawless, natural-looking wall surfaces."
      }
    ],
    beforeAfterImages: [
      {
        before: "../src/assets/QE2A03011.JPG",
        after: "../src/assets/QE2A0301.JPG",
        title: "Wall Patch Removal"
      },
      {
        before: "../src/assets/QE2A02862.JPG",
        after: "../src/assets/QE2A0286.JPG",
        title: "Interior Wall Cleanup"
      },
      {
        before: "../src/assets/prfw bef.JPG",
        after: "../src/assets/prfw aft.JPG",
        title: "Real Estate Wall Enhancement"
      }
    ],
    pricing: {
      basic: 20,
      standard: 35,
      premium: 60
    }
  };

  return <ServiceLayout {...serviceData} />;
};

export default PatchRemovalsService;