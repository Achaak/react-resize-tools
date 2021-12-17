import { useState, useEffect } from "react";

export type UseScreenWidthType = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export type WidthType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null;

const useScreenWidthType = (
  { sm, md, lg, xl, xxl }: UseScreenWidthType = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1400,
  }
): WidthType => {
  const [screenWidthType, setScreenWidthType] = useState<WidthType | null>(
    null
  );

  const updateScreenWidth = () => {
    const width = window.innerWidth;
    let widthType: WidthType = "xs";

    if (sm && width >= sm) widthType = "sm";
    if (md && width >= md) widthType = "md";
    if (lg && width >= lg) widthType = "lg";
    if (xl && width >= xl) widthType = "xl";
    if (xxl && width >= xxl) widthType = "xxl";

    if (screenWidthType !== widthType) {
      setScreenWidthType(widthType);
    }
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return screenWidthType;
};

export default useScreenWidthType;
