import debounce from "lodash.debounce";
import { useState, useEffect, useCallback } from "react";

const useScroll = (wait?: number) => {
  const [screenSize, setScreenSize] = useState({
    outerHeight: 0,
  });

  const updateScroll = useCallback(
    debounce(() => {
      setScreenSize({
        outerHeight: window.outerHeight,
      });
    }, wait || 0),
    []
  );

  useEffect(() => {
    updateScroll();

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return screenSize;
};

export default useScroll;
