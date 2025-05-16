import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileSection = () => {
    return (
        <div className="profile-container" id="home">
            <div className="profile-content">
                <div className="profile-image-container1">
                    <img src="../../image.jpeg" alt="Profile" className="profile-image1" />
                </div>
                <div className="profile-text">
                    <h1>Hey, I&apos;m <span className="highlight">Sri Ganneswari Gajula</span></h1>
                    <h2>I&apos;m a <span className="highlight">Frontend Developer</span></h2>
                    <p>
                        Motivated Frontend Developer with hands-on internship experience in building responsive and
                        user-friendly web applications using React.js, Next.js, JavaScript, HTML, and CSS. Proficient in
                        integrating REST APIs, managing state with Redux Toolkit, and collaborating in agile team
                        environments. Eager to contribute to real world projects, deepen technical expertise, and grow
                        within a dynamic organization.
                    </p>
                    {/* Social Media Links */}
                    <div className="social-icons">
                        <a href="mailto:sriganneswarigajula@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/sri-ganneswari-gajula-765b0b328" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/Sri-Ganneswari1" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </div><br />

                    <button className="download-cv">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
