import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with Next.js + MUI.",
    },
    {
      title: "E-commerce App",
      desc: "Fullstack app with Next.js & PostgreSQL.",
    },
    { title: "Chat App", desc: "Realtime chat using WebSockets." },
  ];

  return (
    <Container id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid spacing={3}>
        {projects.map((p, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
