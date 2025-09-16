import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ExperienceCard, { Experience } from "../ExperienceCard";
import list_experience from "@/static/experience";

export default function Experience() {
  const experiences: Experience[] = list_experience;
  return (
    <Box>
      {/* <Typography sx={{ fontWeight: 700, mb: 4 }}>Experience</Typography> */}
      <Box display={"flex"} flexDirection={"column"} gap={"2rem"} pb={"2rem"}>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </Box>
      <IconButton
        component="a"
        href="https://github.com/SyahidbinFadlyl"
        target="_blank"
        rel="noopener"
        color="inherit"
        sx={{
          borderRadius: "0.5rem",
          fontSize: "1rem",
          fontWeight: 700,
          "&:hover": {
            color: "rgba(94, 234, 212, 1) !important",
          },
          p: "1rem",
        }}
      >
        View Full Resume
      </IconButton>
    </Box>
  );
}
