import React from "react";



const About = () => {

    return (

        <div className="AboutPage">
            <div className="d-flex justify-content-center">
                <div className="key pr-3">
                    <div className="name">Name :</div>
                    <div className="Surnname">SurName :</div>
                    <div className="Age">Age :</div>
                    <div className="Profession">Profession :</div>

                </div>
                <div className="value">
                    <div className="MyName">Tamerlan</div>
                    <div className="MySurName">Hüseynzadə</div>
                    <div className="MyAge">31</div>
                    <div className="MyProfession">Front-End developer</div>
                </div>
            </div>
            <p>I have gratuated Azerbaijan State Economic university Finance faculty and now I am working on this position.In 2020 year I decited change my profil and started learning coding.I finished 4 month Front-End course.Then I continue learning and improved myself.Codding-it really excites me, it is fun to do and I do it by heart.</p>
        </div>

    );
}

export default About;