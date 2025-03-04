export const Projects = () => {
    return (
        <div className="portfolio-container" id="experience">
            <h1 className="portfolio-title">My Projects</h1>
            <div className="project-card">
                <h2>"EdTech Management Portal"</h2>
                <p><strong>Description:</strong> An interactive web platform that enables students to explore and learn various technologies. The portal allows students to track assignments, view scores, manage learning schedules, and receive job notifications.</p>
                <p><strong>Technologies:</strong> React, JavaScript, Next.js, Redux Toolkit</p>
                <p><strong>Role:</strong> Software Developer</p>
                <p><strong>Team Size:</strong> 8</p>
                <ul>
                    <li>Developed responsive web pages and reusable stateful components using React and Next.js.</li>
                    <li>Integrated REST APIs for dynamic data handling and seamless user experience.</li>
                    <li>Managed global state using Redux Toolkit to ensure consistent application state across components.</li>
                    <li>Delivered user stories on time while following Agile methodology.</li>
                    <li>Collaborated on code reviews and participated in stand-ups and sprint planning.</li>
                </ul>
            </div>
            <div className="project-card">
                <h2>“BLINDMAN SPECTACLES (Ultrasonic based obstacle detector)”</h2>
                <p><strong>Technologies:</strong> Arduino nano, Ultrasonic sensor, Battery, Vibration motor, LED </p>
                <p><strong>Description:</strong> “Smart Glasses for the Visually Impaired"<br></br>
                    This project is designed to assist visually impaired individuals by detecting obstacles and providing real-time feedback.</p>
                <ul>
                    <li>Using Arduino Nano, an ultrasonic sensor, a battery, a vibration motor, and LEDs, the smart glasses identify obstacles and alert the user through vibrations.</li>
                    <li>This enhances navigation safety and independence for the blind.</li>
                </ul>
            </div>
        </div>
    );
};