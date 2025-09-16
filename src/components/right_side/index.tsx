import { Box, Typography } from "@mui/material";

export default function LeftSide() {
  return (
    <Box
      sx={{
        py: { sm: "6rem", xs: "3rem" },
      }}
    >
      <Typography
        sx={{ fontSize: { sm: "3rem", xs: "2rem" }, fontWeight: 700 }}
      >
        Muhammad Syahid
      </Typography>
      <Typography
        sx={{
          fontSize: { sm: "1.25rem", xs: "1.125rem" },
          fontWeight: 500,
          lineHeight: { sm: "1.75rem" },
        }}
      >
        Software Engineer
      </Typography>
    </Box>
  );
}
