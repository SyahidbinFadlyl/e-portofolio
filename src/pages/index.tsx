import LeftSide from "@/components/right_side";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(15, 23, 42, 1)", // 50% opacity
        color: "#e2e8f0",
      }}
      minHeight={"100vh"}
    >
      <Container sx={{ px: { xs: "1.5rem" } }}>
        <LeftSide />
      </Container>
    </Box>
  );
}
