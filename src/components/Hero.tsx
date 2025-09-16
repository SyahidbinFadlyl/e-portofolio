import { Container, Typography, Button, Box } from "@mui/material";

export default function Hero() {
  return (
    <Container
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Hi, I’m Syahid 👋
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Software Engineer | Web Developer | Problem Solver
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          View Projects
        </Button>
        <Button variant="outlined" color="secondary">
          Contact Me
        </Button>
      </Box>
    </Container>
  );
}
