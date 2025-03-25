export const Projects = () => {
    return (
        <div className="portfolio-container" id="experience">
            <h1 className="portfolio-title">My Projects</h1>
            <div className="project-card">
                <h2>&quot;EdTech Management Portal&quot;</h2>
                <p><strong>Team Size:</strong> 8</p>
                <p><strong>Role:</strong> Software Developer</p>
                <p><strong>Technologies:</strong> React, JavaScript, Next.js, Redux Toolkit</p>
                <p><strong>Description:</strong> An interactive web platform that enables students to explore and learn various technologies. The portal allows students to track assignments, view scores, manage learning schedules, and receive job notifications.</p>
                <ul>
                    <p><strong>Responsibilities:</strong></p>
                    <li>Developed responsive web pages and reusable stateful components using React and Next.js.</li>
                    <li>Integrated REST APIs for dynamic data handling and seamless user experience.</li>
                    <li>Managed global state using Redux Toolkit to ensure consistent application state across components.</li>
                    <li>Delivered user stories on time while following Agile methodology.</li>
                    <li>Collaborated on code reviews and participated in stand-ups and sprint planning.</li>
                </ul>
            </div>
            <div className="project-card">
                <h2>&quot;BLINDMAN SPECTACLES (Ultrasonic based obstacle detector)&quot;</h2>
                <p><strong>Team Size:</strong> 7</p>
                <p><strong>Role:</strong> Project Leader</p>
                <p><strong>Hardware components:</strong> Arduino nano, Ultrasonic sensor, Smart glasses, Battery, Vibration motor and Connecting wires.</p>
                <p><strong>Description:</strong> Designed to assist visually impaired individuals, this smart glasses project
                    detects obstacles and provides real-time feedback through vibrations. The system
                    integrates an Arduino Nano with an ultrasonic sensor to identify nearby objects. Upon
                    detecting an obstacle, the vibration motor indicator alert the user, enhancing navigation
                    safety and independence.</p>
                <ul>
                    <p><strong>Responsibilities:</strong></p>
                    <li>Acted as the project leader in a team-based academic project guided by faculty.</li>
                    <li>Contributed to the design and development of smart glasses to help visually impaired
                        individuals detect nearby obstacles</li>
                    <li>Integrated Arduino Nano with ultrasonic sensor and vibration motor to provide real-time
                        feedback through vibrations</li>
                    <li>Managed component assembly, basic coding, and team coordination to ensure project
                        completion and demonstration</li>
                </ul>
            </div>
        </div>
    );
};
