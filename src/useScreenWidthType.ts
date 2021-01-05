import { useState, useEffect } from "react";

export type UseScreenWidthType = {
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export type WidthType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null

const useScreenWidthType = ({ sm=640, md=768, lg=1024, xl=1280, xxl=1400 }: UseScreenWidthType): WidthType => {
  const [screenWidthType, setScreenWidthType] = useState<WidthType | null>(null);

  const updateScreenWidth = () => {
    const width = window.innerWidth
    let widthType: WidthType = "xs"

    if(width >= sm)  widthType = "sm"
    if(width >= md)  widthType = "md"
    if(width >= lg)  widthType = "lg"
    if(width >= xl)  widthType = "xl"
    if(width >= xxl) widthType = "xxl"

    if(screenWidthType !== widthType) {
      setScreenWidthType(widthType)
    }
  };

  useEffect(() => {
    updateScreenWidth() 

    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return screenWidthType;
};

export default useScreenWidthType;