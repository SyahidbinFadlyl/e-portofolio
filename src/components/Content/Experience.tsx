import React from "react";
import { Box, IconButton } from "@mui/material";
import { Experience } from "@/types";
import list_experience from "@/static/experience";
import ExperienceCard from "../ExperienceCard";

export default function ExperienceBox() {
  const experiences: Experience[] = list_experience;
  return (
    <Box
      id="experience"
      sx={{ scrollMarginTop: "64px" }}
      mb={{ xs: "6rem", sm: "9rem" }}
      minHeight={{ xs: "50vh" }}
    >
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
