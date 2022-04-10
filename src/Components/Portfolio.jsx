import React from "react";


class Portfolio extends React.Component {
    state = {
        MyProjects: [
            {
                name: 'FullStackProject',
                URL: 'https://e-ticaretproject.000webhostapp.com/index.php',
                Picture: './Pics/1.jpg'

            },
            {
                name: 'Relax',
                URL: 'https://tamerlan620.github.io/Test9',
                Picture: '../Pics/2.jpg'

            },
            {
                name: 'Snapshoot',
                URL: 'https://tamerlan620.github.io/Snabshoot',
                Picture: './Pics/3.jpg'

            },
            {
                name: 'Developer',
                URL: 'https://tamerlan620.github.io/Type-project',
                Picture: './Pics/4.jpg'

            },
            {
                name: 'Technologi',
                URL: 'https://tamerlan620.github.io/MyNewApp',
                Picture: './Pics/5.jpg'

            },
            {
                name: 'OnlineStore',
                URL: 'https://tamerlan620.github.io/Online_store',
                Picture: './Pics/6.jpg'

            }
        ]
    }

    render() {
        const MyProjects = this.state.MyProjects;
        return (
            <div className="PortfolioPage d-flex flex-wrap justify-content-between">
                {
                    MyProjects.map((Project) => (
                        <div className="Projects"><a href={Project.URL}>
                            <img className="ProjectImg" src={Project.Picture} alt="" />
                        </a>
                            <h3 className="ProjectName">{Project.name}</h3>
                        </div>
                    ))
                }


            </div>
        )
    }
}

export default Portfolio