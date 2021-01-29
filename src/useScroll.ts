import { useState, useEffect } from "react";

const useScroll = () => {
  const [screenSize, setScreenSize] = useState({
    outerHeight: 0,
  });

  const updateScroll = () => {
    setScreenSize({
      outerHeight: window.outerHeight,
    })
  };

  useEffect(() => {
    updateScroll()

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return screenSize;
};

export default useScroll;