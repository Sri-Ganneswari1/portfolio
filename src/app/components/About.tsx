const AboutMe = () => {
    return (
        <div className="about-me-container" id="about">
            <div className="title-name">
                <h1 className="title">ABOUT ME</h1>
            </div>
            <div className="content-section">
                <div className="home">
                    <p className="description">
                        Hello! I&apos;m <span className="name-highlight">Sri Ganneswari Gajula</span>, a motivated Software Developer with a focus on Frontend and Full Stack development with hands-on internship experience in building responsive and
                        user-friendly web applications using React.js, Next.js, JavaScript, HTML, and CSS. Proficient in
                        integrating REST APIs, managing state with Redux Toolkit, and collaborating in agile team
                        environments. Eager to contribute to real world projects, deepen technical expertise, and grow
                        within a dynamic organization.<br />
                        I hold a Bachelor of Science Degree in Computer Science from Pithapur Rajah&apos;s Government College (Autonomous) 2025, where I developed a strong technical background.
                    </p>
                </div>
                <div className="profile-image-container1">
                    <img
                        src="../../gema-saputera-pJaocJrXGFQ-unsplash.jpg"
                        alt="Sri Ganneswari Gajula"
                        className="profile-image1"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
