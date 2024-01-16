import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const [windowDimensions, setWindowDimensions] = useState({
    width: hasWindow ? window.innerWidth : 0,
    height2: hasWindow ? window.innerHeight : 0,
  });

  function handleResize() {
    setWindowDimensions({
      width: window.innerWidth,
      height2: window.innerHeight,
    });
  }
  useEffect(() => {
    if (hasWindow) {
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
