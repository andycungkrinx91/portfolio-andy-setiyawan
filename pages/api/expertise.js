const expertise = [
    {
        id: 0,
        title: 'Cloud Infrastructure',
        desc: "DevOps / SRE Engineer with 5+ years of experience building and managing production-grade infrastructure across multi-cloud environments (AWS, GCP, Huawei Cloud, DigitalOcean, Linode) and on-premise systems. Specialized in designing scalable, reliable, and secure systems through automation, infrastructure as code, and strong observability practices. Experienced in CI/CD implementation, monitoring, and incident response, often acting as an escalation point for critical production issues. Apply DevSecOps principles to strengthen system security, including infrastructure hardening, attack mitigation, and incident response in production environments. Experienced in AI infrastructure, including deploying LLM inference services (vLLM), building API layers for embedding and reranking, and managing vector databases such as Qdrant to support reliable and high-performance AI workloads. Passionate about building resilient, secure, and scalable systems at the intersection of infrastructure, security, and emerging technologies.",
    },
    {
        id: 1,
        title: 'Network Engineer and Sysadmin',
        desc: "As someone who also has Network Engineer and Sysadmin experience from 2017-2019, I also have experience in maintaining servers on premises, Mikrotik, PFsense, custom IDPS, Security Network, Rule Networking Firewall, Server Installation on premises, IP Address Allocating.",
    },
    {
        id: 2,
        title: 'Platform Application',
        desc: "As a Cloudops Engineer, I have experience in maintaining servers for several platforms such as WordPress, Magento, Laravel, Codeigniter, NodeJS, Golang, Django, PHP natively. With platform deployed in monolith and microservice like docker and kubernetes",
    },
    {
        id: 3,
        title: 'Tools',
        desc: 'As a Cloudops Engineer, I am familiar with several tools commonly used by Devops Engineers such as Docker, Jenkins, Grafana, Prometheus, Traefik, Git, Gitlab, Helm, Ansible, Terraform, Buildkite, Cloud Watch.',
    },
    {
        id: 4,
        title: 'Microservice',
        desc: "As a Cloudops Engineer, I have more than 4 years of experience maintaining platforms as microservices. I use Docker, Docker Compose, Kubernetes. I created my own custom base images for microservices using a registry from DockerHub, Gitlab or Google Registry, AWS Registry, Huawei Registry using service accounts and keys as integration accessibility.",
    },
    {
        id: 5,
        title: 'Programming language and Framework',
        desc: "I also have experience as a developer from 2015-2018 with expertise in programming languages such as PHP, Javascript, ReactJS, Shell Script, Yaml, C++, Python. Using the framework Codeigniter, Laravel, NextJs, VueJs, React Native, AngularJs, Django.",
    },
    {
        id: 6,
        title: 'AI Infrastructure Engineer',
        desc: "I also have high interest in AI Infrastructure, and have experience in deploying LLM inference services (vLLM), building API layers for embedding and reranking, and managing vector databases such as Qdrant to support reliable and high-performance AI workloads.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
