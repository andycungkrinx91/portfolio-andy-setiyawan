const expertise = [
    {
        id: 0,
        title: 'Cloud Computing and Hosting',
        desc: 'As a Cloudops Engineer, I have more than 4 years of experience maintaining AWS, GCP, Digitalocean, Linode, Huawei cloud and on-premise servers. I can be placed in the position of Cloudops Engineer, Devops Engineer, SRE, Sysadmin, Network Engineer and Security Analyst',
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
        desc: "I also have experience as a developer from 2015-2018 with expertise in programming languages ​​such as PHP, Javascript, ReactJS, Shell Script, Yaml, C++, Python. Using the framework Codeigniter, Laravel, NextJs, VueJs, React Native, AngularJs, Django.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
