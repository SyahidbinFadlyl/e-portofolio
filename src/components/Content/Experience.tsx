import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ExperienceCard, { Experience } from "../ExperienceCard";

export default function Experience() {
  const experiences: Experience[] = [
    {
      year: "2024 — Present",
      title: "Full Stack Developer",
      company: "Amani",
      description:
        "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skills: ["JavaScript", "TypeScript", "React", "NextJs", "Node.js"],
    },
    {
      year: "2022 — 2024",
      title: "Full Stack Developer",
      company: "Happy Homes",
      description:
        "Build and maintain critical components used to construct frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML & SCSS",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
      ],
    },
    // tambahkan pengalaman lain sesuai data kamu
  ];
  return (
    <Box>
      {/* <Typography sx={{ fontWeight: 700, mb: 4 }}>Experience</Typography> */}
      <Box>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </Box>
    </Box>
  );
}
