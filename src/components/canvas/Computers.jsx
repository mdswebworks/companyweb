import React, { useEffect, useState } from "react";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
   <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
  }}
>
  <img
    src="/diva.png"
    alt="3D Model Preview"
    style={{
      width: isMobile ? "100%" : "600px",
      maxWidth: "100%",
      height: "auto",
      marginTop: "240px",
        transform: "rotate(-1deg)" 
    }}
  />
</div>


  );
};

export default ComputersCanvas;
