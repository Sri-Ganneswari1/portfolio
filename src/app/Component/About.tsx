const AboutMe = () => {
    return (
        <div className="about-me-container" id="home">
            <div className="title-name">
                <h1 className="title">ABOUT ME</h1>
            </div>
            <div className="content-section">
                <div className="home">
                    <p className="description">
                        Hello! I'm <span className="name-highlight">Sri Ganneswari Gajula</span>, a passionate and detail-oriented
                        web developer with a robust foundation in modern web technologies, including
                        React.js, Next.js, JavaScript, HTML, and CSS. I excel at crafting responsive,
                        dynamic, and user-friendly web applications, with expertise in state management
                        using Redux Toolkit and seamless REST API integration.<br></br> I hold a Bachelor of Science Degree in Computer Science from Pithapur Raja's Government College, where I developed a strong technical background and I am currently doing internship in Hypersonic Training and Consultancy Services at Kakinada. 
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