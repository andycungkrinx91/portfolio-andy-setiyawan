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
                title: 'AI CV Optimizer',
                desc: "AI CV Optimizer is an AI-powered web application that helps job seekers enhance their resumes. By simply uploading a CV and pasting a job description, users get personalized feedback on how to improve their application. The project's source code on GitHub: https://github.com/andycungkrinx91/AI-CV-Optimizer",
                tech: ['AI', 'FastAPI', 'Streamlit', 'Gemini', 'RAG'],
            },
            {
                id: 1,
                title: 'Terraform for Laravel on DigitalOcean',
                desc: "Terraform Digitalocean for automation provisioning Laravel. The project's source code on GitHub: https://github.com/andycungkrinx91/terraform-digitalocean-laravel",
                tech: ['Terraform', 'DigitalOcean', 'Laravel'],
            },
            {
                id: 2,
                title: 'Nginx AI Security Suite',
                desc: "An AI-powered tool designed to enhance web server security. It analyzes Nginx logs and audits website security headers. The project uses a Retrieval-Augmented Generation (RAG) pipeline with Google's Gemini model to provide intelligent, context-aware security recommendations. The GitHub source code for this project can be found at: https://github.com/andycungkrinx91/Nginx-AI-Security-Suite",
                tech: ['AI', 'OWASP', 'Nginx', 'Scrapy', 'Playwright', 'FastAPI', 'Streamlit', 'Gemini', 'RAG'],
            },
            {
                id: 3,
                title: 'Dockerized ComfyUI',
                desc: "Engineered a local GenAI image generation environment by containerizing the ComfyUI application with Docker. This setup provides a portable and efficient way to create AI-generated images. The source code is available on GitHub: https://github.com/andycungkrinx91/comfyui-dockerize",
                tech: ['Docker', 'ComfyUI', 'GenAI'],
            },
        ],
    },
    {
        expCards: [
            {
                id: 5,
                title: 'Self Experience Freelance',
                role: 'Cloudops Enginer | Devops Engineer | AI Infrastructure | Sysadmin | SRE | Network Engineer | Security Analyst | Web Developer',
                url: 'no website',
                desc: "Designed and built a local server with an intranet for content creators, specifically for AI image editing and generation using ComfyUI. Designing and building a local server with an intranet network for a small community, supporting their needs for AI chat, code generation, and image generation using open-source tools like Llama.cpp and LibreChat. For Hipajak as a freelancer, I designed and built a secure API server with IPsec tunneling to Bank BJB. This system facilitated secure and reliable tax payment transactions for the Samsat Mobile Jawa Barat (Sambara) application. Designed and built a profile website for Sajira Logistik to provide online-accessible information. Installation of CCTV at the Airlangga Education Center branches in Yogyakarta, Surabaya, Bojonegoro, Lamongan, and Tulungagung to ensure that tutoring activities are monitored and secure.",
                year: '2017 - Present',
                location: 'Indonesia'
            },
            {
                id: 1,
                title: 'Icube by Sirclo',
                role: 'Cloudops Engineer',
                url: 'https://www.sirclo.com/',
                desc: 'To maintain and manage cloud server infrastructure on various platforms (GCP, AWS, Huawei, Linode, Digitalocean) for proactive problem detection, conduct in-depth post-incident reviews, and plan system capacity to ensure optimal availability and performance.Designing and developing automation tools and systems for routine operations, including CI/CD management (using Git, Jenkins, Buildkite, and Helm) and Infrastructure as Code (IaC) in a Kubernetes environment, thereby significantly improving the efficiency of the software development process. Actively participating in the entire software development lifecycle, from design and development to deployment, monitoring, and continuous improvement, while collaborating closely with software engineers and cross-divisional teams. Building and operating a secure service environment (through security hardening) and ensuring it is highly scalable. I also perform continuous improvements for highly-available systems. Resolving an average of 10+ L2 escalation tickets per week and reducing critical incident resolution time through efficient root cause analysis.',
                year: '2019 - 2025',
                location: 'Full Remote, Indonesia'
            },
            {
                id: 2,
                title: 'PT Media Belajar Indonesia',
                role: 'Network and Server Engineer',
                url: 'no website',
                desc: 'Designing and building an on-premise server infrastructure for a CBT (Computer-Based Test) system to advance computer-based testing at all branches. Designing and building an inter-regional network system covering Yogyakarta, Surabaya, Lamongan, Bojonegoro, and Tulungagung to centralize systems across all branches.',
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 3,
                title: 'PT Aino Indonesia',
                role: 'Network Security Analyst',
                url: 'https://www.ainosi.co.id/',
                desc: "Designing and building network system security for the e-ticketing platforms of Gembiraloka Zoo, Prambanan Temple, Ratu Boko Temple, Ramayana, MRT, Transjakarta, and Transjogja to support the team and company in realizing a digital-based e-ticketing system.",
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 4,
                title: 'PT Sydeco',
                role: 'Network Engineer & Sysadmin',
                url: 'https://www.syde.co/',
                desc: "Maintaining and monitoring the network on devices like routers, Wi-Fi, switches, CCTV, and on-premise servers to ensure all systems and the network function properly. Designing and building a secure system with optimal and stable customization on a dedicated device used as a first-layer firewall (Using custom Single Board Computer). Provide maintenance and support for hardware, software, and network quality for all teams to enhance cross-divisional collaboration and strengthen teamwork. Developed automation scripts for daily and monthly backup processes, successfully reducing manual task time by 2 hours per week and ensuring a 99.9% data recovery availability.",
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
