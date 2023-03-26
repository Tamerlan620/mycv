import React, { useState } from 'react';
import MyCv from './MyCv'
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { BrowserRouter,Route,Switch } from 'react-router-dom';



const App =()=>{

    const [selected,setSelected]= useState(true)
    const [selectedLanguage,setSelectedLanguage]= useState("AZ")
   
        const MyProjects = [
            {
                id: 1,
                name: 'FullStackProject',
                URL: 'https://online-shopping-project.000webhostapp.com/',
                Picture: './Pics/1.jpg',
                type:"simple"
            },
            {
                id: 2,
                name: 'Relax',
                URL: 'https://tamerlan620.github.io/Relax/',
                Picture: './Pics/2.jpg',
                type:"simple"

            },
            {
                id: 3,
                name: 'Snapshoot',
                URL: 'https://tamerlan620.github.io/Snabshoot',
                Picture: './Pics/3.jpg',
                type:"simple"

            },
            {
                id: 4,
                name: 'Developer',
                URL: 'https://tamerlan620.github.io/Type-project',
                Picture: './Pics/4.jpg',
                type:"simple"

            },
            {
                id: 5,
                name: 'Technologi',
                URL: 'https://tamerlan620.github.io/MyNewApp',
                Picture: './Pics/5.jpg',
                type:"simple"

            },
            {
                id: 6,
                name: 'OnlineStore',
                URL: 'https://tamerlan620.github.io/Online_store',
                Picture: './Pics/6.jpg',
                type:"simple"

            },
            {
                id: 7,
                name: 'QuizApp',
                URL: 'https://tamerlan620.github.io/Quiz-app/',
                Picture: './Pics/7.jpg',
                type:"react"

            },
            {
                id: 8,
                name: 'Find Picture',
                URL: 'https://tamerlan620.github.io/Find-pictures-game/',
                Picture: './Pics/8.jpg',
                type:"react"

            },
            {
                id: 9,
                name: 'Weather',
                URL: 'https://tamerlan620.github.io/Weather-app/',
                Picture: './Pics/9.jpg',
                type:"react"

            },
            {
                id: 10,
                name: 'My Current Job',
                URL: 'https://tamerlan620.github.io/My-curent-job-Frontend/',
                Picture: './Pics/10.jpg',
                type:"react"

            },
        ]
    


    

    return(
        <BrowserRouter>
            <MyCv />
            <div>
                <div className="language">
                    <input onClick={()=>setSelectedLanguage('AZ')} className={selectedLanguage==="AZ" ?"activelanguage" : ""} type="button" value="AZ" />
                    <input onClick={()=>setSelectedLanguage('EN')} className={selectedLanguage==="EN" ?"activelanguage" : ""} type="button" value="EN" />
                </div>
                <Switch>
                    {/* <Route path="/" exact element={<App />} />   
                    <Route path="/About" element={<About />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/Portfolio" element={<Portfolio />} /> */}
                    <Route path="/" exact >
                        <Home selectedLanguage={selectedLanguage} />
                    </Route>
                    <Route path="/about">
                        <About selectedLanguage={selectedLanguage} />
                    </Route>
                    <Route path="/skills">
                        <Skills selectedLanguage={selectedLanguage} />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio MyProjects={MyProjects} selected ={selected} setSelected={setSelected} selectedLanguage={selectedLanguage} />
                    </Route>                    
                </Switch>
            </div>
                
            
        </BrowserRouter>
     

    );
}
export default App;