import { Box, IconButton, Stack, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

export default function Header() {
  return (
    <Box
      sx={{
        py: { sm: "6rem", xs: "3rem" },
        height: { sm: "100vh" },
        "@media (min-width:1200px)": {
          position: "sticky",
          top: 0,
          display: "flex",
          maxHeight: "100vh",
          width: "48%",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
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
            mt: "0.75rem",
          }}
        >
          Software Engineer
        </Typography>
        <Typography sx={{ mt: "1rem", fontSize: "1rem" }}>
          I build custom web applications
        </Typography>
      </Box>

      <Box
        sx={{
          ml: "0.25rem",
          mt: "2rem",
        }}
      >
        <Stack direction="row" spacing={0}>
          <IconButton
            component="a"
            href="https://github.com/SyahidbinFadlyl"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/muhammad-syahid-b8748724b/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
