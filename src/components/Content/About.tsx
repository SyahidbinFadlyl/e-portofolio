import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      pt={{ sm: "1rem" }}
      color={"#94A3B8"}
    >
      <Typography>
        I am an inquisitive person, minimalist, committed, and reliable in many
        ways. I participated in Hacktiv8's Full Stack Javascript Immersive
        bootcamp, which allowed me to become experienced with Javascript and
        currently popular technology stacks.
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
