import { Project } from "@/components/ProjectCard"
import crm from "../../public/crm.png"
import bprs from "../../public/bprs.png"
import rq_landing from "../../public/rq_landing.png"
import task_manager from "../../public/task_manager.png"

const project_list: Project[] = [
    {
        image: rq_landing,
        title: "Web App RQ Daarut Tarbiyah",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia
        deleniti quasi perferendis expedita fugiat placeat eius. Praesentium,
        magnam. Obcaecati fuga et soluta unde quas aliquid incidunt rerum
        perferendis perspiciatis!`,
    },
    {
        image: task_manager,
        title: "Task Manager",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia
        deleniti quasi perferendis expedita fugiat placeat eius. Praesentium,
        magnam. Obcaecati fuga et soluta unde quas aliquid incidunt rerum
        perferendis perspiciatis!`,
    },
    {
        image: crm,
        title: "CRM Home Buyer",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia
        deleniti quasi perferendis expedita fugiat placeat eius. Praesentium,
        magnam. Obcaecati fuga et soluta unde quas aliquid incidunt rerum
        perferendis perspiciatis!`,
    },
    {
        image: bprs,
        title: "CRM BPRS",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, officia
        deleniti quasi perferendis expedita fugiat placeat eius. Praesentium,
        magnam. Obcaecati fuga et soluta unde quas aliquid incidunt rerum
        perferendis perspiciatis!`,
    },
]

export default project_list