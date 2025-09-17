import { Box } from "@mui/material";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "../Footer";

export default function Content() {
  return (
    <Box
      sx={{
        py: { md: "6rem", xs: "3rem" },
        width: { md: "52%", xs: "100%" },
      }}
    >
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Box>
  );
}
