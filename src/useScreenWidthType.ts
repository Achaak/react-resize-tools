import { useState, useEffect } from "react";

type useScreenWidthType = {
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

const useScreenWidthType = ({ sm=640, md=768, lg=1024, xl=1280, xxl=1400 }: useScreenWidthType) => {
  const [screenWidthType, setScreenWidthType] = useState("");

  const updateScreenWidth = () => {
    //setScreenWidth({ x: ev.clientX, y: ev.clientY });

    const width = window.innerWidth
    let widthType = "xs"

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