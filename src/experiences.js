import React from 'react';
import './index.css';

const Experiences = () => {
return (
    <section id="experience" className="section">
        <div className="container">
            <h2 className="section-title">Experience</h2>
            <div>
                {[
                    {
                        title: "Cybersecurity Analyst Intern",
                        company: "Culligan International",
                        period: "June 2025 - August 2025",
                        description: [
                            "This was my first professional experience both in the industry and in the cybersecurity domain. \
                            I greatly strengthened my foundations in cybersecurity, familiarizing myself with fundamental concepts \
                            such as the CIA triad, threat modeling, risk assessment and mitigation, and security frameworks like NIST. \
                            I also gained hands-on experience with industry-standard tools such as Rapid7, SentinelOne and Netskope.",
                            "One of my projects dealt with gathering millions of rows of data from these platforms in real-time along with \
                            Microsoft Graph APIs, data from which was then cleaned, analyzed and visualized, creating fine-grained insights. \
                            Along with that, I also built a tool to automate the KPI process for vulnerability nanagement and built \
                            a web-scraper to fetch daily incident/vulnerability/explot news from multiple online sources.\
                            I deployed these projects on an Azure VM, also engaging with Azure App Registry for required cloud permissions."
                        ]
                    },
                    {
                        title: "Undergraduate Researcher",
                        company: "MLOPT Research Group",
                        period: "February 2024 - Present",
                        description: [
                            "This has been one of the most challenging and enriching experiences of my life. \
                            Joining as a freshman without the knowledge of advanced mathematics or general technical skills such as \
                            shell scripting, I made a great effort to learn and adapt quickly, learning to use several \
                            new tools and technologies along the way.",
                            "I experimented in multiple environments, including self-designed Docker environnments, \
                            custom singularity containers and HTCondor-managed clusters, and  remote-running on a proprietary machine.\
                            I programmed a Deep Polynomial Network for encrypted image inference in C++ using Microsoft SEAL, \
                            a process that forced me to understand abstract algorithms such as Pytorch's Convolutional, Linear and \
                            BatchNorm layers, and combine them into a Homomorphic Encryption-compatible format."
                        ]
                    },
                    {
                        title: "Treasurer",
                        company: "Wisconsin Robotics",
                        period: "September 2023 - May 2025",
                        description: [
                            "My time at Wisconsin Robotics marked my first nonacademic experience in university. I started as \
                            a member on the software team, learning ROS and its usage inside a Docker container, using Python. \
                            I worked on the camera system throughout my freshman year, and took up my first leadership role as the club's \
                            Industry Relations Lead.",
                            "During my time as Industry Relations Lead and subsequently Treasurer, I collaborated with the club leadership \
                            to raise more than $20,000 in sponsorships from different companies, which was necessary \
                            for day-to-day operations. \ I also co-led the software subteam in my sophomore year, helping onboard and \
                            train over 50 members, as well as leading key projects in Object Detection, Motor Control and Obstacle Avoidance."
                        ]
                    }
                ].map((job, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-number">
                            {index + 1}
                        </div>
                        <div className="experience-content">
                            <h3 className="experience-title">{job.title}</h3>
                            <p className="experience-company">{job.company} • {job.period}</p>
                            {Array.isArray(job.description)
                                ? job.description.map((desc, i) => (
                                        <p className="experience-description" key={i} style={{ marginBottom: '1em' }}>
                                            {desc}
                                        </p>
                                    ))
                                : <p className="experience-description">{job.description}</p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};

export default Experiences;
