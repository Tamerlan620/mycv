import React from 'react';
import MyCv from './MyCv'
import Welcome from './Welcome';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { BrowserRouter,Route,Switch } from 'react-router-dom';



const App =()=>{

    

    return(
        <BrowserRouter>
            <MyCv />
            <div>
                <Switch>
                    {/* <Route path="/" exact element={<App />} />   
                    <Route path="/About" element={<About />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/Portfolio" element={<Portfolio />} /> */}
                    <Route path="/" exact >
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>                    
                </Switch>
            </div>
                
            
        </BrowserRouter>
     

    );
}
export default App;