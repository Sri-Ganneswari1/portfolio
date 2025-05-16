export const Projects = () => {
    return (
        <div className="portfolio-container" id="projects">
            <h1 className="portfolio-title">My Projects</h1>
            <div className="project-card">
                <h2>&quot;EdTech Management Portal&quot;</h2>
                <p>Team Size : 8 | Role: Frontend Developer</p>
                <p>Technologies : React, JavaScript, Next.js, Redux Toolkit</p>
                <p>Description : Developed an interactive web platform for students to explore technologies, track
                    assignments, view scores, manage schedules, and receive job notifications.</p>
                <ul>
                    <p>Responsibilities :</p>
                    <li>Built responsive UI and reusable components using React and Next.js</li>
                    <li>Integrated REST APIs for dynamic data rendering</li>
                    <li>Managed global state with Redux Toolkit for consistent app behavior</li>
                    <li>Delivered features on time following Agile methodology</li>
                    <li>Participated in code reviews, daily stand-ups, and sprint planning.</li>
                </ul>
            </div>
            <div className="project-card">
                <h2>&quot;ULTRASONIC BASED OBSTACLE DETECTOR&quot;</h2>
                <p>Team Size : 7 | Project Leader</p>
                <ul>
                    <li>Led team in designing smart glasses to detect obstacles using ultrasonic sensors and Arduino Nano.</li>
                    <li>Integrated vibration motors for real-time haptic feedback, enhancing navigation safety.</li>
                    <li>Managed hardware assembly, coding, and team coordination for successful project
                        completion.</li>
                </ul>
            </div>
        </div>
    );
};
