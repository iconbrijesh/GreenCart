import './Team.css';

const teamMembers = [
    {
        name: 'Brijesh Kumar',
        email: 'iconbrijesh@gmail.com',
        linkedin: "https://www.linkedin.com/in/iconbrijesh",
        role: 'Project Lead & Frontend Developer',
    },
    {
        name: 'Sandhya Kumari',
        email:'sandhyakumari79778@gmail.com',
         linkedin: 'https://www.linkedin.com/in/sandhya-kumari-938153370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        role: 'Content & Media Curator',
    },
    {
        name: 'Priyanshu Gope',
        email: 'gopepriyanshu3@gmail.com',
        linkedin: 'https://www.linkedin.com/in/priyanshu-gope-14a113293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        role: 'Brand Identity Designer',
    },
    {
        name: 'Harshita Kumari',
        email: 'kharshita556@gmail.com',
        linkedin: 'https://www.linkedin.com/in/harshita-kumari-a62723232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        role: 'Documentation Specialist',
    },
    {
        name: 'Anurag Pandey',
        email: 'anuragpa3435@gmail.com',
        linkedin: 'https://linkedin.com/in/ravi-profile',
        role: 'Documentation Specialist',
    },
    {
        name: 'Saurabh Sinha',
        email: 'ss6114331@gmail.com',
        linkedin: 'https://www.linkedin.com/in/saurabh-sinha-88a894374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        role: 'Documentation Specialist',
    },
];

const githubLink = 'https://github.com/iconbrijesh/GreenCart';

const Team = () => {
    return (
        <div className="team-wrapper">
            <h2 className="team-title">Our Development Team</h2>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <h3 className="member-name">{member.name}</h3>
                        {/* <p className="member-role">{member.role}</p> */}
                        <p><strong>Email:</strong><br /><a href={`mailto:${member.email}`}>{member.email}</a></p>
                        <p><strong>LinkedIn:</strong><br /><a href={member.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></p>
                        <div className="bottom-strip">{member.role}</div>
                    </div>
                ))}
            </div>

            <div className="github-section">
                <div className="github-card">
                    <h3 className="github-title">🌿 View Project on GitHub</h3>
                    <a
                        className="github-link"
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {githubLink}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;
