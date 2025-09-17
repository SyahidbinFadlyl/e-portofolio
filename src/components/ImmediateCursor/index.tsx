import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CursorBrittany = () => {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const trailX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const trailY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Glow trail */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          position: "fixed",
          width: hovering ? 80 : 60,
          height: hovering ? 80 : 60,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          filter: "blur(20px)",
          zIndex: 9998,
        }}
      />

      {/* Kursor utama */}
      <Box
        sx={{
          position: "fixed",
          left: mouseX.get(),
          top: mouseY.get(),
          width: hovering ? 30 : 15,
          height: hovering ? 30 : 15,
          borderRadius: "50%",
          backgroundColor: "#fff",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />

      {/* Click effect */}
      <AnimatePresence>
        {clicking && (
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              left: mouseX.get(),
              top: mouseY.get(),
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "2px solid white",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              zIndex: 9997,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CursorBrittany;
