import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ProfileSection = () => {
    return (
        <div className="profile-container" id="about">
            <div className="profile-content">
                <div className="profile-image-container1">
                    <img src="../../srig.png" alt="Profile" className="profile-image1" />
                </div>
                <div className="profile-text">
                    <h1>Hey, I'm <span className="highlight">Sri Ganneswari Gajula</span></h1>
                    <h2>I'm a <span className="highlight">Developer</span></h2>
                    <p>
                        Motivated and skilled fresher with a strong foundation in React.js, HTML, CSS, and JavaScript. Familiar with Python, Django, and Full Stack Development. Passionate about problem-solving, 
                        scalable applications, and continuously learning new technologies to enhance my technical skills with a quick learning ability. Eager to contribute to a dynamic team and grow professionally.
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
                    </div>

                    <button className="download-cv">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
