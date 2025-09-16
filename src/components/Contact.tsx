import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
  return (
    <Container id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500 }}
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Container>
  );
}
