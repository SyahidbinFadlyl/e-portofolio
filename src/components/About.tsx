import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="text.secondary">
        I am a passionate software engineer with experience in building scalable
        web applications, focusing on performance and great user experience.
      </Typography>
    </Container>
  );
}
