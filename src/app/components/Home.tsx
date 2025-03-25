import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileSection = () => {
    return (
        <div className="profile-container" id="about">
            <div className="profile-content">
                <div className="profile-image-container1">
                    <img src="../../photo.jpeg" alt="Profile" className="profile-image1" />
                </div>
                <div className="profile-text">
                    <h1>Hey, I&apos;m <span className="highlight">Sri Ganneswari Gajula</span></h1>
                    <h2>I&apos;m a <span className="highlight">Developer</span></h2>
                    <p>
                        Enthusiastic web developer with a strong foundation in HTML, CSS, JavaScript, Typescript, React.js, Next.js. Familiar with Full Stack Development. Passionate about problem-solving, scalable applications, and continuously learning new technologies to enhance technical skills with a quick learning ability. Looking for an opportunity to contribute and grow professionally in a dynamic team.


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
