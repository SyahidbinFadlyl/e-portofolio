import Header from "@/components/Header";
import Content from "@/components/Content";

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
        <Box
          display={"flex"}
          flexDirection={{ sm: "row", xs: "column" }}
          justifyContent={"space-between"}
          gap={"1rem"}
        >
          <Header />
          <Content />
        </Box>
      </Container>
    </Box>
  );
}
