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
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box flex={{ sm: 1 }}>
        {/* Tahun */}
        <Typography
          sx={{
            fontWeight: 600,
            color: theme.palette.text.secondary,
            fontSize: { xs: "0.75rem", sm: "0.75rem" },
          }}
        >
          {experience.year}
        </Typography>
      </Box>

      <Box flex={{ sm: 2 }}>
        {/* Posisi & Perusahaan */}
        <Typography sx={{ fontWeight: 700 }}>
          {experience.title},{"  "}
          <span style={{ fontWeight: 400, color: theme.palette.text.primary }}>
            {experience.company}
          </span>
        </Typography>

        {/* Deskripsi */}
        <Typography sx={{ mt: 1.5, color: theme.palette.text.secondary }}>
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
                color: "rgba(94, 234, 212, 1)",
                bgcolor: "rgba(45, 212, 191, .1)",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
