import { lazy } from 'react';

// Lazy load service pages for better code splitting
export const ArialPhotosService = lazy(() => import('@pages/ArialPhotosService.jsx'));
export const HDRService = lazy(() => import('@pages/HDRService.jsx'));
export const PatchRemovalsService = lazy(() => import('@pages/PatchRemovalsService.jsx'));
export const Service360 = lazy(() => import('@pages/Service360.jsx'));
export const RealTwilightService = lazy(() => import('@pages/RealTwilightService.jsx'));
export const DayToDuskService = lazy(() => import('@pages/DayToDuskService.jsx'));
export const FlashAmbientService = lazy(() => import('@pages/FlashAmbientService.jsx'));
export const LandEnhancementService = lazy(() => import('@pages/LandEnhancementService.jsx'));
export const NaturalEditService = lazy(() => import('@pages/NaturalEditService.jsx'));
export const OutdoorService = lazy(() => import('@pages/OutdoorService.jsx'));
export const PhotosFromVideosService = lazy(() => import('@pages/PhotosFromVideosService.jsx'));
export const PortraitService = lazy(() => import('@pages/PortraitService.jsx'));
export const SingleImagesService = lazy(() => import('@pages/SingleImagesService.jsx'));