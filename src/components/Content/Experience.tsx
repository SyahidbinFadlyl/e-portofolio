import React from "react";
import { Box } from "@mui/material";
import ExperienceCard, { Experience } from "../ExperienceCard";
import list_experience from "@/static/experience";

export default function Experience() {
  const experiences: Experience[] = list_experience;
  return (
    <Box>
      {/* <Typography sx={{ fontWeight: 700, mb: 4 }}>Experience</Typography> */}
      <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </Box>
    </Box>
  );
}
