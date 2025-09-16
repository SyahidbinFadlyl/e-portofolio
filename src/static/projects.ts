import { Project } from "@/components/ProjectCard"
import crm from "../../public/crm.png"
import bprs from "../../public/bprs.png"
import rq_landing from "../../public/rq_landing.png"

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