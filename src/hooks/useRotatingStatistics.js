import { useState, useEffect } from 'react';

export const useRotatingStatistics = (statistics, interval = 5000, animationDuration = 500) => {
  const [currentStat, setCurrentStat] = useState('');
  const [animationClass, setAnimationClass] = useState('slide-in'); // Initial animation

  useEffect(() => {
    if (!statistics || statistics.length === 0) {
      setCurrentStat('');
      return;
    }

    let index = 0;
    setCurrentStat(statistics[index]);
    setAnimationClass('slide-in'); // Ensure initial slide-in

    const intervalId = setInterval(() => {
      setAnimationClass('slide-out'); // Start slide-out animation

      // Wait for slide-out animation to finish before changing text and sliding in
      setTimeout(() => {
        index = (index + 1) % statistics.length;
        setCurrentStat(statistics[index]);
        setAnimationClass('slide-in'); // Start slide-in animation for new text
      }, animationDuration); // Match timeout with CSS animation duration

    }, interval); // Time between the start of slide-out and the next cycle

    return () => clearInterval(intervalId);
    // Dependency array includes animationDuration in case it needs to be dynamic
  }, [statistics, interval, animationDuration]);

  // Return both the statistic and the current animation class
  return [currentStat, animationClass];
}; 