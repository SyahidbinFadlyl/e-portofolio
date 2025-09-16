import project_list from "@/static/projects";
import { Box } from "@mui/material";
import ProjectCard, { Project } from "../ProjectCard";

export default function Projects() {
  const projects: Project[] = project_list;
  return (
    <Box id="projects" sx={{ scrollMarginTop: "64px" }}>
      <Box display={"flex"} flexDirection={"column"} gap={"2rem"} pb={"2rem"}>
        {projects.map((exp, idx) => (
          <ProjectCard key={idx} project={exp} />
        ))}
      </Box>
    </Box>
  );
}
