export const Projects = () => {
    return (
        <div className="portfolio-container" id="projects">
            <h1 className="portfolio-title">My Projects</h1>
            <div className="project-card">
                <h2>&quot;EdTech Management Portal&quot;</h2>
                <p>Team Size : 8</p>
                <p>Role : Software Developer</p>
                <p>Technologies : React, JavaScript, Next.js, Redux Toolkit</p>
                <p>Description : An interactive web platform that enables students to explore and learn various technologies. The portal allows students to track assignments, view scores, manage learning schedules, and receive job notifications.</p>
                <ul>
                    <p>Responsibilities :</p>
                    <li>Developed responsive web pages and reusable stateful components using React and Next.js.</li>
                    <li>Integrated REST APIs for dynamic data handling and seamless user experience.</li>
                    <li>Managed global state using Redux Toolkit to ensure consistent application state across components.</li>
                    <li>Delivered user stories on time while following Agile methodology.</li>
                    <li>Collaborated on code reviews and participated in stand-ups and sprint planning.</li>
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
