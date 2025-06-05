import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const ScrollDownButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToNextSection = () => {
    window.scrollBy({ top: 960, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('quien-somos-component');
      if (component) {
        const rect = component.getBoundingClientRect();
        if (rect.top + rect.height < 0 || rect.bottom - rect.height > window.innerHeight) {
          gsap.to('#floating-button', { opacity: 0, duration: 0.5 });
          setIsVisible(false);
        } else {
          gsap.to('#floating-button', { opacity: 1, duration: 0.5 });
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      id="floating-button"
      onClick={scrollToNextSection}
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 hover:opacity-50"
      style={{ zIndex: 1000 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </button>
  );
};

export default ScrollDownButton;
