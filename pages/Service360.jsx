import React from 'react';
import { RotateCcw } from 'lucide-react';
import SimpleServiceLayout from '../components/SimpleServiceLayout';

const Service360 = () => {
  const serviceData = {
    title: "360° Photography",
    subtitle: "Immersive Virtual Experience Enhancement",
    description: "Transform your 360° photography with professional stitching, enhancement, and optimization services. Create immersive virtual tours and panoramic experiences that engage viewers and showcase spaces in stunning detail.",
    icon: <RotateCcw className="w-10 h-10 text-white" />,
    featuredImages: [
      "../src/assets/360 aft.jpg",
      "../src/assets/IMG_20241214_095137_00_065.jpg",
      "../src/assets/IMG_20241214_100955_00_137.jpg"
    ],
    benefits: [
      "Professional 360° image stitching and seamless blending",
      "HDR processing for optimal exposure throughout the sphere",
      "Nadir and zenith cleanup for flawless viewing experience",
      "Color correction and enhancement for immersive quality",
      "Virtual tour optimization and platform compatibility",
      "Interactive hotspot and navigation enhancement"
    ],
    process: [
      {
        step: "Image Assessment",
        description: "Evaluation of 360° source images for stitching quality and enhancement needs."
      },
      {
        step: "Professional Stitching",
        description: "Advanced stitching algorithms to create seamless 360° panoramic images."
      },
      {
        step: "HDR Processing",
        description: "HDR enhancement to balance exposure and detail throughout the entire sphere."
      },
      {
        step: "Cleanup & Enhancement",
        description: "Nadir/zenith cleanup, tripod removal, and overall image enhancement."
      },
      {
        step: "Optimization",
        description: "Final optimization for various platforms and virtual tour applications."
      }
    ]
  };

  return <SimpleServiceLayout {...serviceData} />;
};

export default Service360;