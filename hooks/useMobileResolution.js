import { useState, useEffect } from 'react';

function useMobileResolution() {
  const [isMobileResolution, setIsMobileResolution] = useState(false);
  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 820
        ? setIsMobileResolution(true)
        : setIsMobileResolution(false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileResolution;
}

export {useMobileResolution };