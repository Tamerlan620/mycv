import React from "react";


class Portfolio extends React.Component {
    state = {
        MyProjects: [
            {
                id: 1,
                name: 'FullStackProject',
                URL: 'https://e-ticaretproject.000webhostapp.com/index.php',
                Picture: './Pics/1.jpg'

            },
            {
                id: 2,
                name: 'Relax',
                URL: 'https://tamerlan620.github.io/Test9',
                Picture: './Pics/2.jpg'

            },
            {
                id: 3,
                name: 'Snapshoot',
                URL: 'https://tamerlan620.github.io/Snabshoot',
                Picture: './Pics/3.jpg'

            },
            {
                id: 4,
                name: 'Developer',
                URL: 'https://tamerlan620.github.io/Type-project',
                Picture: './Pics/4.jpg'

            },
            {
                id: 5,
                name: 'Technologi',
                URL: 'https://tamerlan620.github.io/MyNewApp',
                Picture: './Pics/5.jpg'

            },
            {
                id: 6,
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
                        <div key={Project.id} className="Projects"><a href={Project.URL}>
                            <img className="ProjectImg" src={require(`${Project.Picture}`)} alt="" />
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