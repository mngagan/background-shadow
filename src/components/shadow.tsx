import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const mainColor = "#7400b8";
const shadowColor = "#80ffdb";

const Shadow = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  const [isMouseMoving, setIsMouseMoving] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsMouseMoving(true);
    // Reset the moving state after a short delay
    setTimeout(() => setIsMouseMoving(false), 100);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: null, y: null });
    setIsMouseMoving(false);
  };

  return (
    <Box
      sx={{ backgroundColor: mainColor, width: "100%", height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Stack sx={{ width: "100%", height: "100%", position: "absolute" }}>
        <Box
          sx={{
            width: isMouseMoving ? "100px" : "200px",
            height: isMouseMoving ? "100px" : "200px",
            backgroundColor: shadowColor,
            position: "absolute",
            borderRadius: "50%",
            ...(mousePosition.x &&
              mousePosition.y && {
                top: mousePosition.y,
                left: mousePosition.x,
              }),
            transform: "translate(-50%, -50%)",
            filter: "blur(50px)",
            transition: "all 0.1s ease",
          }}
        ></Box>
      </Stack>
      <Stack sx={{ width: "100%", height: "100%", position: "absolute" }}>
        <Typography variant="h1" sx={{ color: mainColor }}>
          in the top layer
        </Typography>
      </Stack>
    </Box>
  );
};

export default Shadow;
