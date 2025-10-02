// Vercel Analytics integration
declare global {
  interface Window {
    va?: any;
  }
}

export const initVercelAnalytics = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Track page views
    const trackPageView = (url: string) => {
      if (window.va) {
        window.va('track', 'pageview', { path: url });
      }
    };

    // Track custom events
    const trackEvent = (name: string, properties?: Record<string, any>) => {
      if (window.va) {
        window.va('track', name, properties);
      }
    };

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          trackEvent('performance', {
            loadTime: navigation.loadEventEnd - navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          });
        }
      }
    };

    // Initialize tracking
    setTimeout(trackPerformance, 1000);

    return { trackPageView, trackEvent };
  }

  return {
    trackPageView: () => {},
    trackEvent: () => {},
  };
};

// Web Vitals for Vercel
export const trackWebVitals = (metric: any) => {
  if (window.va) {
    window.va('track', 'web-vital', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    });
  }
};