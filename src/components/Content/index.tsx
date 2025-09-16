import { Box } from "@mui/material";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Content() {
  return (
    <Box
      sx={{
        py: { sm: "6rem", xs: "3rem" },
        width: { sm: "52%", xs: "100%" },
      }}
    >
      <About />
      <Experience />
      <Projects />
    </Box>
  );
}
