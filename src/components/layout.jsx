import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1706234211679.json";

const LayOut = () => {
  const layout = useRef();
  useEffect(() => {
    setTimeout(() => {
      layout.current.style.top = "-100%";
      layout.current.style.height = "0";
      layout.current.style.transition = "all .8s ease-in-out";
    }, 5000);
  });

  return (
    <>
      {/* start layout */}
      <Box
        ref={layout}
        className="layOut"
        sx={{
          position: "fixed",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
        }}
      >
        <Box
          className="text_layout"
          sx={{
            textAlign: "center",
          }}
        >
          <Lottie animationData={animationData} />
        </Box>
      </Box>
      {/* end layout */}
    </>
  );
};

export default LayOut;
