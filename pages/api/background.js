const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University Bina Sarana Informatika',
                degree: 'D3, Computer System Engineering. IPK 3.25',
                detail: "Associate Degree in Informatics Management with a focus majoring in Web Programming",
                year: '2013-2016'
            },
            {
                id: 1,
                title: 'Vocational High School 45 Wonosari',
                degree: 'Vocational High School',
                detail: "with a focus majoring in Mecanic Automotive",
                year: '2006-2009'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Sirclo (PT Lingkar Niaga Solusindo)',
                role: 'Cloudops Engineer',
                url: 'https://www.sirclo.com/',
                desc: 'Research for new technology stack, Maintain CI/CD template for Kubernetes in GCP, Maintain server in AWS, Maintain configuration of server when have update, Maintain core image Swift and Oms (dockerize base for all project Swift and Oms), Cover team when have issue 1x24 hours, Help developer for bug fixing.',
                year: '11/2019 - Present',
                location: 'Tangerang Regency, Banten, Indonesia'
            },
            {
                id: 2,
                title: 'PT Media Belajar Indonesia',
                role: 'Network and Server Engineer',
                url: 'no website',
                desc: 'As Network and Server Engineer, Build Infrastructure for CBT system and Build up all Infra in region Yogyakarta, Lamongan, Bojonegoro, Tulungagung (Installation network and server)',
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 3,
                title: 'PT Aino Indonesia',
                role: 'Network Security Analyst',
                url: 'https://www.ainosi.co.id/',
                desc: "As Network Security Analyst, Build up infrastructure and security rule for e-ticketing at Gembira Loka Zoo, Build up infrastructure and security rule Candi (Prambanan, Ratu Boko and Ramayana), Build up security rule for MRT, Maintain security rule at Trans Jakarta and Trans Jogja, Build up network and security in DISPERINDAG Yogyakarta",
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 4,
                title: 'PT Sydeco',
                role: 'Network Engineer & Sysadmin',
                url: 'https://www.syde.co/',
                desc: "As Manager Network & System Administrator, Monitoring and manage all Network and server, Patch all security hole in all server, Create a hardware for security system (build form scratch using Single Board Computer)",
                year: '2018 - 2019',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 5,
                title: 'KSU Cipta',
                role: 'IT Support',
                url: 'no website',
                desc: "As IT Support, Manage all network and resolv issue in region Karawang.",
                year: '2017 - 2017',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 6,
                title: 'Self Experience Freelance',
                role: 'Cloudops Enginer | Devops Engineer | Sysadmin | SRE | Network Engineer | Security Analyst | Web Developer',
                url: 'no website',
                desc: "Build server API gateway integration using IPSEC in SAMBARA, Build custome dockerize image with updated security patch, Build portable storage IOT for mobile device, Build miniserver portable using ARM SBC Architecture, Build online server using android device using VPN gateway, Build VPN server gateway, Build server gateway for IDS/IPS and routing direct over Mikrotik, AngularJs template from scratch, Custom topology direct VPS as gateway router, Web design for www.sajira.id and bandung.sajira.id, Create wordpress silvashopacc.store, CCTV installation at Airlangga Education Center",
                year: '2017 - Present',
                location: 'Indonesia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
