import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      pt={{ sm: "1rem" }}
      color={"#94A3B8"}
      mb={{ xs: "4rem", sm: "9rem" }}
      id="about"
      sx={{ scrollMarginTop: "64px" }}
      minHeight={{ xs: "40vh" }}
    >
      <Typography>
        I am an inquisitive and minimalist person, committed and reliable in
        many ways. My journey into tech began when I joined{" "}
        <span
          onClick={() => {
            window?.open("https://www.hacktiv8.com/");
          }}
          style={{
            color: "#e2e8f0",
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {`Hacktiv8's`}
        </span>{" "}
        Full Stack JavaScript Immersive bootcamp, where I gained hands-on
        experience with JavaScript and modern technology stacks.
      </Typography>
      <Typography>
        Currently, I work as a Software Engineer at Amani, specializing in
        building and maintaining CRM applications across both front end and back
        end. These platforms support property sales management, customer data
        processing, financial reporting, and payment tracking for both mortgage
        and cash transactions.
        <br />
        <br />
        I’m passionate about developing reliable systems and crafting inclusive
        user experiences by applying web accessibility standards and best
        practices in software development.
      </Typography>
      <Typography>
        Outside of work, I enjoy riding my motorbike around the city, playing
        soul-like games, and spending quality time with family and friends.
      </Typography>
    </Box>
  );
}
