import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import Image from "next/image";

export type Project = {
  image: any;
  title: string;
  description: string;
  tools?: string[];
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: "1rem",
        px: "1.5rem",
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
          py: "1rem",
          px: "1.5rem",
        },
      }}
    >
      <Box flex={{ sm: 1 }} mt={1}>
        <Image
          src={project.image}
          alt="image"
          width={140}
          height={80}
          priority
        />
      </Box>

      <Box flex={{ sm: 2.5 }}>
        {/* Posisi & Perusahaan */}
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          {project.title}
        </Typography>

        {/* Deskripsi */}
        <Typography sx={{ mt: 1.5, color: theme.palette.text.secondary }}>
          {project.description}
        </Typography>

        {!!project?.tools?.length &&
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {project.tools.map((tool, i) => (
              <Chip
                key={i}
                label={tool}
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
        }
      </Box>
    </Box>
  );
}
