import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ExperienceCard, { Experience } from "../ExperienceCard";

export default function Experience() {
  const experiences: Experience[] = [
    {
      year: "2024 — Present",
      title: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      description:
        "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skills: ["JavaScript", "TypeScript", "React", "Storybook"],
    },
    {
      year: "2018 — 2024",
      title: "Lead Engineer",
      company: "Upstatement",
      description:
        "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, etc. Provide leadership within engineering department through close collaboration, knowledge shares, and internal tools development.",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML & SCSS",
        "React",
        "Next.js",
        "React Native",
        "WordPress",
        "Contentful",
        "Node.js",
        "PHP",
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
