import { Project } from "@/components/ProjectCard"
import crm from "../../public/crm.png"
import bprs from "../../public/bprs.png"
import rq_landing from "../../public/rq_landing.png"
import task_manager from "../../public/task_manager.png"

const project_list: Project[] = [
    {
        image: rq_landing,
        title: "RQ Daarut Tarbiyah",
        description: `A landing page website designed to introduce prospective students and parents to the RQ Daarut Tarbiyah Islamic boarding school.`,
        tools: ["JavaScript", "TypeScript", "React", "NextJs", "Node.js"],
    },
    {
        image: task_manager,
        title: "Task Manager",
        description: `A personal application I built to record daily work timesheets and generate them into Excel sheets using a given template. It includes a login and profile feature, making the generated sheets dynamic and personalized with user data such as name, position, manager, and company.`,
        tools: ["JavaScript", "TypeScript", "React", "NextJs", "Node.js", "Express"],
    },
    {
        image: crm,
        title: "CRM Home Buyer",
        description: `An internal application for managing property sales orders, installment and cash payment processes, customer data, refunds, revenue, and other aspects of housing project transactions.`,
        tools: ["JavaScript", "React", "Node.js", "Express"],
    },
    {
        image: bprs,
        title: "CRM BPRS",
        description: `An internal application developed for BPRS Mulya, designed to manage customer data, check customer credit scores, analyze mortgage feasibility for home purchases, and handle contract agreements (akad) for property sales.`,
        tools: ["JavaScript", "TypeScript", "React", "NextJs", "Node.js", "Express"],
    },
]

export default project_list