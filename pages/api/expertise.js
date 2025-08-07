const expertise = [
    {
        id: 0,
        title: 'Cloud Computing and Hosting',
        desc: "I'm a CloudOps Engineer with over 5 years of experience designing, managing, and optimizing highly scalable server infrastructure. I have expertise in both cloud environments (GCP, AWS, Huawei Cloud, DigitalOcean, Linode) and on-premise systems. I'm proficient in operational automation, implementing CI/CD pipelines (Jenkins, Buildkite), system monitoring, and cross-functional collaboration throughout the entire software development lifecycle. I am committed to continuous learning and implementing new technologies, with a special interest in AI infrastructure engineering. In this area, I apply DevSecOps principles to build efficient and secure environments for AI model deployment, all while ensuring data privacy is maintained.",
    },
    {
        id: 1,
        title: 'Network Engineer and Sysadmin',
        desc: "As someone who also has Network Engineer and Sysadmin experience from 2017-2019, I also have experience in maintaining servers on premises, Mikrotik, PFsense, custom IDPS, Security Network, Rule Networking Firewall, Server Installation on premises, IP Address Allocating.",
    },
    {
        id: 2,
        title: 'Platform Aplication',
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
        title: 'AI/ML',
        desc: "I also have high interest in AI/ML for building Chat AI, Image Generator AI, Train AI using python with Llama.cpp",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
