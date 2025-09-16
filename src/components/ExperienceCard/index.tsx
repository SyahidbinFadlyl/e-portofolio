import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
};

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderLeft: `2px solid ${theme.palette.primary.main}`,
        pl: 2, // padding-left
        mb: 4, // margin-bottom
        position: "relative",
      }}
    >
      {/* Tahun */}
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 600,
          color: theme.palette.text.secondary,
        }}
      >
        {experience.year}
      </Typography>

      {/* Posisi & Perusahaan */}
      <Typography variant="h5" component="div" sx={{ fontWeight: 700, mt: 1 }}>
        {experience.title},{" "}
        <Typography
          component="span"
          variant="h5"
          sx={{ fontWeight: 400, color: theme.palette.text.primary }}
        >
          {experience.company}
        </Typography>
      </Typography>

      {/* Deskripsi */}
      <Typography
        variant="body1"
        sx={{ mt: 1.5, color: theme.palette.text.secondary }}
      >
        {experience.description}
      </Typography>

      {/* Skills */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
        {experience.skills.map((skill, i) => (
          <Chip
            key={i}
            label={skill}
            size="small"
            variant="outlined"
            sx={{
              borderColor: theme.palette.divider,
              color: theme.palette.text.secondary,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
