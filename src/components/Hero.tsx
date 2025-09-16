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
        Hi, I’m Syahid
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Software Engineer | Web Developer | Problem Solver
      </Typography>
    </Container>
  );
}
