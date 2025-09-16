import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      pt={{ sm: "1rem" }}
      color={"#94A3B8"}
      mb={{ xs: "4rem", sm: "9rem" }}
      id="about"
      sx={{ scrollMarginTop: "64px" }}
    >
      <Typography>
        I am an inquisitive person, minimalist, committed, and reliable in many
        ways. I participated in
        <span
          onClick={() => {
            window?.open("https://www.hacktiv8.com/");
          }}
          style={{
            color: "#e2e8f0",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {` Hacktiv8's `}
        </span>
        Full Stack Javascript Immersive bootcamp, which allowed me to become
        experienced with Javascript and currently popular technology stacks.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia
        deleniti quasi perferendis expedita fugiat placeat eius. Praesentium,
        magnam. Obcaecati fuga et soluta unde quas aliquid incidunt rerum
        perferendis perspiciatis!
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia
        deleniti quasi perferendis expedita fugiat placeat eius. Praesentium,
        magnam. Obcaecati fuga et soluta unde quas aliquid incidunt rerum
        perferendis perspiciatis!
      </Typography>
    </Box>
  );
}
