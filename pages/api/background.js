const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University Bina Sarana Informatika',
                degree: 'D3 in Information Management. GPA 3.25 of 4.00',
                detail: "Associate Degree in Informatics Management with a focus majoring in Web Programming",
                year: '2013-2016'
            },
            {
                id: 1,
                title: 'SMK 45 Wonosari Gunungkidul',
                degree: 'Vocational High School',
                detail: "with a focus majoring in Automotive Mechanical Engineering",
                year: '2006-2009'
            },
        ],
        certificationCards: [
            {
                id: 0,
                title: 'Udemy DevOps MasterClass: Terraform Kubernetes Ansible Docker.',
                url: 'https://www.udemy.com/certificate/UC-a8e03d87-2936-4b68-ab3e-2f62803b8aa1/'
            },
            {
                id: 1,
                title: 'Udemy Kubernetes with HELM: Kubernetes for Absolute Beginners.',
                url: 'https://www.udemy.com/certificate/UC-5c6e43b5-4b11-4060-a68b-76a21715e200/'
            },
            {
                id: 2,
                title: 'Udemy Ultimate DevOps to MLOps Bootcamp - Build ML CI/CD Pipelines.',
                url: 'https://www.udemy.com/certificate/UC-437d386a-1bd1-4772-ae67-df5284387604/'
            },
            {
                id: 3,
                title: 'Udemy AI Bible: From Beginner to Builder in 100 Projects.',
                url: 'https://www.udemy.com/certificate/UC-e8193950-f3ae-4c1c-bff2-69fd3027346b/'
            },
            {
                id: 4,
                title: 'Udemy AI Agents Bootcamp: Cost-Free LLMs to Production Systems.',
                url: 'https://www.udemy.com/certificate/UC-7173d7e6-4ffd-4130-9047-d0f22a814fec/'
            }
        ],
        projectCards: [
            {
                id: 0,
                title: 'K6 AI Powered',
                desc: "Full-stack performance testing platform combining k6 load testing, AI analysis (Gemini, OpenAI, local LLM), and a modern analytics dashboard into a production-ready system (GitHub: https://github.com/andycungkrinx91/k6-AI-Powered)",
                tech: ['AI', 'K6', 'FastAPI', 'OpenAI', 'Gemini', 'NextJs'],
            },
            {
                id: 1,
                title: 'Smart RT',
                desc: "Developed a community management platform (RT/RW) with a public-facing frontend and admin dashboard using Next.js and FastAPI (GitHub: https://github.com/andycungkrinx91/Smart-RT)",
                tech: ['AI', 'K6', 'FastAPI', 'OpenAI', 'Gemini', 'NextJs'],
            },
            {
                id: 1,
                title: 'Terraform for Laravel on DigitalOcean',
                desc: "Automated infrastructure provisioning for Laravel applications using Terraform on DigitalOcean, improving deployment efficiency and scalability (GitHub: https://github.com/andycungkrinx91/terraform-DigitalOcean-laravel)",
                tech: ['Terraform', 'DigitalOcean', 'Laravel'],
            },
            {
                id: 2,
                title: 'AI CV Optimizer',
                desc: "Built an AI-powered web application that analyzes CVs against job descriptions to provide personalized improvement recommendations (GitHub: https://github.com/andycungkrinx91/AI-CV-Optimizer)",
                tech: ['AI', 'FastAPI', 'Streamlit', 'Gemini', 'RAG'],
            },
            {
                id: 2,
                title: 'Nginx AI Security Suite',
                desc: "Developed an AI-powered security tool using a RAG pipeline with Gemini to analyze Nginx logs and audit security headers, providing context-aware recommendations (GitHub: https://github.com/andycungkrinx91/Nginx-AI-Security-Suite)",
                tech: ['AI', 'OWASP', 'Nginx', 'Scrapy', 'Playwright', 'FastAPI', 'Streamlit', 'Gemini', 'RAG'],
            },
            {
                id: 3,
                title: 'Dockerized ComfyUI',
                desc: "Designed and deployed a containerized GenAI image generation environment using Docker, improving portability, reproducibility, and scalability of AI workloads (GitHub: https://github.com/andycungkrinx91/comfyui-dockerize)",
                tech: ['Docker', 'ComfyUI', 'GenAI'],
            },
        ],
    },
    {
        expCards: [
            {
                id: 5,
                title: 'Self Experience Freelance',
                role: 'Cloudops Engineer | Devops Engineer | AI Infrastructure | Sysadmin | SRE | Network Engineer | Security Analyst | Web Developer',
                url: 'no website',
                desc: "Designed and deployed local AI servers with intranet (ComfyUI, Llama.cpp, LibreChat), built secure API infrastructure with IPsec tunneling for Hipajak–Bank BJB integration (Sambara), developed a company profile website, and implemented multi-site CCTV systems across Airlangga Education Center branches.",
                year: '2017 - Present',
                location: 'Indonesia'
            },
            {
                id: 1,
                title: 'Icube by Sirclo',
                role: 'Cloudops Engineer | DevOps Engineer | SRE | DevSecOps | AI Infrastructure Engineer',
                url: 'https://www.sirclo.com/',
                desc: 'Managed and optimized production-grade multi-cloud infrastructure (GCP, AWS, Huawei, Linode, DigitalOcean), implemented automation and CI/CD pipelines (Git, Jenkins, Buildkite, Helm, Terraform) in Kubernetes, collaborated across the SDLC to deliver scalable systems, enhanced security through hardening, WAF, and intrusion detection, handled incident response and post-mortems, improved high availability, and served as a primary escalation point resolving 10+ weekly L2 incidents with faster root cause analysis.',
                year: '2019 - 2025',
                location: 'Full Remote, Indonesia'
            },
            {
                id: 2,
                title: 'PT Media Belajar Indonesia',
                role: 'Network and Server Engineer',
                url: 'no website',
                desc: 'Designed and built on-premise CBT server infrastructure and a centralized inter-regional network across Yogyakarta, Surabaya, Lamongan, Bojonegoro, and Tulungagung to unify systems across all branches.',
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 3,
                title: 'PT Aino Indonesia',
                role: 'Network Security Analyst',
                url: 'https://www.ainosi.co.id/',
                desc: "Designed and implemented secure network systems for digital e-ticketing platforms across Gembiraloka Zoo, Prambanan Temple, Ratu Boko Temple, Ramayana, MRT, Transjakarta, and Transjogja.",
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 4,
                title: 'PT Sydeco',
                role: 'Network Engineer & Sysadmin',
                url: 'https://www.syde.co/',
                desc: "Maintained and monitored network and infrastructure (routers, Wi-Fi, switches, CCTV, on-prem servers), built a custom SBC-based firewall for enhanced security, provided cross-team IT support, and automated backup processes reducing manual work by 2 hours/week with 99.9% recovery reliability.",
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
