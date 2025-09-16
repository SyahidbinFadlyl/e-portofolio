import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";

export type Project = {
  image: any;
  title: string;
  description: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: "1rem",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "1rem",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        borderRadius: "0.5rem",
        "&:hover": {
          transform: "translateY(-4px) scale(1.02)",
          boxShadow: "0px 0px 20px rgba(255,255,255,0.1)",
          backgroundColor: "rgba(15, 23, 42, 5)",
          cursor: "pointer",
          borderRadius: "0.5rem",
          color: "rgba(94, 234, 212, 1) !important",
        },
      }}
    >
      <Box flex={{ sm: 1 }}>image</Box>

      <Box flex={{ sm: 2.5 }}>
        {/* Posisi & Perusahaan */}
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          {project.title},{"  "}
        </Typography>

        {/* Deskripsi */}
        <Typography sx={{ mt: 1.5, color: theme.palette.text.secondary }}>
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}
