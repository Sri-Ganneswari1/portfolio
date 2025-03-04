const EducationFlipBox = () => {
    return (
        <div className="container" id="skills">
            <h1 className="main-heading">EDUCATION DETAILS</h1>
            <div className="grid-container">
                <div className="flip-container">
                    <div className="flip-box">
                        <div className="flip-box-front">
                            BSc
                        </div>
                        <div className="flip-box-back">
                            <h2>Computer Science</h2>
                            <p>Pithapur Raja's Government College (Autonomous) | Kakinada |2022 - 2025</p>
                            <p>CGPA: 8.2/10</p>
                        </div>
                    </div>
                </div>
                <div className="flip-container">
                    <div className="flip-box">
                        <div className="flip-box-front">
                            Intermediate
                        </div>
                        <div className="flip-box-back">
                            <h2>MPC</h2>
                            <p>Madhuri Junior College<br></br> | Gollaprolu | 2020 - 2022</p>
                            <p>Percentage: 90%</p>
                        </div>
                    </div>
                </div>
                <div className="flip-container">
                    <div className="flip-box">
                        <div className="flip-box-front">
                            SSC
                        </div>
                        <div className="flip-box-back">
                            <h2>Secondary School of Education</h2>
                            <p>Z.P.P.Girl's High School | Gollaprolu | 2019 - 2020</p>
                            <p>Percentage: 96%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EducationFlipBox;