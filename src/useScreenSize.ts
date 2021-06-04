import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

export type ScreenSize = {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
};

const useScreenSize = (wait?: number) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0,
  });

  const updateScreenSize = useCallback(
    debounce(() => {
      setScreenSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      });
    }, wait || 0),
    []
  );

  useEffect(() => {
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
