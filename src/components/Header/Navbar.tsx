"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        { rootMargin: "-10% 0px -10% 0px", threshold: 0 }
      );
      console.log(observer, "observer");
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: { xs: "fixed", lg: "sticky" },
        top: { xs: 0, lg: 0 },
        left: 0,
        zIndex: 50,
        display: { xs: "none", sm: "flex", lg: "flex" },
        flexDirection: { xs: "row", lg: "column" },
        justifyContent: { xs: "center", lg: "flex-start" },
        alignItems: { xs: "center", lg: "flex-start" },
        gap: { xs: 3, lg: 5 },
        px: { xs: 2, lg: 0 },
        py: { xs: 2, lg: 24 },
        width: { xs: "100%", lg: "48%" },
        bgcolor: { xs: "rgba(15, 23, 42, 0.8)", lg: "transparent" },
        backdropFilter: { xs: "blur(8px)", lg: "none" },
      }}
    >
      {sections.map((s) => (
        <Link key={s.id} href={`#${s.id}`} scroll={false} style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              position: "relative",
              fontSize: 14,
              fontWeight: 500,
              color: "text.secondary",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -4,
                left: 0,
                width: active === s.id ? "100%" : 0,
                height: "2px",
                bgcolor: "rgb(94 234 212)",
                transition: "width 0.3s ease",
              },
              "&:hover": {
                color: "rgb(94 234 212)",
                "&::after": {
                  width: "100%",
                },
              },
            }}
            onClick={() => { setActive(s.id) }}
          >
            {s.label}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}
