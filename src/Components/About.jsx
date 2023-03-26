import React from "react";



const About = ({selectedLanguage}) => {

    return (

        <div className="AboutPage">
            <div className="d-flex justify-content-center">
                <div className="key pr-3">
                    <div className="name">
                    {
                    selectedLanguage==="AZ" ?
                    "Ad :" :
                    "Name :"
                    }
                    </div>
                    <div className="Surnname">
                    {
                    selectedLanguage==="AZ" ?
                    "Soyad :" :
                    "Surname :"
                    }
                    </div>
                    <div className="Age">
                    {
                    selectedLanguage==="AZ" ?
                    "Yaş :" :
                    "Age :"
                    }
                    </div>
                    <div className="Profession">
                    {
                    selectedLanguage==="AZ" ?
                    "Vəzifə :" :
                    "Profession :"
                    }
                    </div>

                </div>
                <div className="value">
                    <div className="MyName">Tamerlan</div>
                    <div className="MySurName">Hüseynzadə</div>
                    <div className="MyAge">32</div>
                    <div className="MyProfession">Front-End developer</div>
                </div>
            </div>
            <p>
            {
                selectedLanguage==="AZ" ?
                "Mən Azərbaycan Dövlət İqtisad Universitetinin Maliyyə fakültəsini bitirmişəm və hazırda bu vəzifədə çalışıram. 2020-ci ildə profilimi dəyişmək qərarına gəldim və kodlaşdırma öyrənməyə başladım. 4 aylıq Front-End kursunu bitirdim. Sonra öyrənməyə davam etdim və özümü təkmilləşdirdim.Kodlaşdırma - məni həyəcanlandırır, bunu etmək əyləncəlidir və mən bunu ürəkdən edirəm." :
                "I have gratuated Azerbaijan State Economic university Finance faculty and now I am working on this position.In 2020 year I decited change my profil and started learning coding.I finished 4 month Front-End course.Then I continue learning and improved myself.Codding-it really excites me, it is fun to do and I do it by heart."
                }
            </p>
        </div>

    );
}

export default About;