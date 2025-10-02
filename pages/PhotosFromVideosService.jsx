import React from 'react';
import { Video } from 'lucide-react';
import SimpleServiceLayout from '../components/SimpleServiceLayout';

const PhotosFromVideosService = () => {
  const serviceData = {
    title: "Photos from Videos",
    subtitle: "High-Quality Stills from Video Footage",
    description: "Extract and enhance high-quality still images from your video footage. Our specialized process transforms video frames into sharp, professional photographs perfect for marketing, portfolios, and documentation purposes.",
    icon: <Video className="w-10 h-10 text-white" />,
    featuredImages: [
      "../src/assets/009_022.jpg",
      "../src/assets/001_004.jpg",
      "../src/assets/007_029.jpg"
    ],
    benefits: [
      "High-resolution still extraction from 4K and HD video footage",
      "Professional enhancement to overcome video compression artifacts",
      "Motion blur reduction and sharpening techniques",
      "Color correction optimized for video-to-photo conversion",
      "Multiple frame selection and timing optimization",
      "Cost-effective way to obtain multiple angles from single shoot"
    ],
    process: [
      {
        step: "Video Analysis",
        description: "Review of video footage to identify the best frames for still extraction."
      },
      {
        step: "Frame Extraction",
        description: "High-quality extraction of selected frames at maximum available resolution."
      },
      {
        step: "Enhancement Processing",
        description: "Specialized processing to overcome video compression and enhance image quality."
      },
      {
        step: "Sharpening & Detail",
        description: "Advanced sharpening and detail enhancement techniques for crisp, clear results."
      },
      {
        step: "Final Optimization",
        description: "Color grading, exposure adjustment, and final polish for professional still images."
      }
    ]
  };

  return <SimpleServiceLayout {...serviceData} />;
};

export default PhotosFromVideosService;