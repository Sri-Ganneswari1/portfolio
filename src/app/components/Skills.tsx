const Skills = () => {
    return (
        <section className="skills" id="projects">
            <h2>SKILLS</h2>
            <div className="skills-container">


                <div className="skills-row">

                    <div className="skill-card">
                        <img src="https://t3.ftcdn.net/jpg/05/78/11/34/360_F_578113446_j72wZX7u698eoV50XXmkLMH7gGuNhpVB.jpg" className="image-logo"></img>
                        <h3>HTML5</h3>

                    </div>
                    <div className="skill-card">
                        <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png" className="image-logo"></img>
                        <h3>CSS3</h3></div>
                    <div className="skill-card">
                        <img src="https://e7.pngegg.com/pngimages/640/199/png-clipart-javascript-logo-html-javascript-logo-angle-text-thumbnail.png" className="image-logo"></img>
                        <h3>JavaScript</h3></div>
                </div>
                <div className="skills-row">
                    <div className="skill-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFi4_-9fNmkOc4nkBq6YLPG8higxuZsBuXGQ&s" className="image-logo"></img>
                        <h3>React</h3></div>
                    <div className="skill-card">
                        <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png" className="image-logo"></img>
                        <h3>Next.js</h3></div>
                    <div className="skill-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4w6fYaioeGBmSpcbln24RL1dScHYUv7IiA&s" className="image-logo"></img>
                        <h3>Redux Toolkit</h3></div>
                </div>
                <div className="center-wrapper">
                    <div className="skill-card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png" className="image-logo"></img>
                        <h3 className="named-card">Python (Basics)</h3></div>
                </div>

            </div>
        </section>
    );
};
export default Skills;