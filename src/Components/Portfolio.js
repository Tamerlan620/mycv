import React from "react";


const  Portfolio = ({MyProjects,selected,setSelected,selectedLanguage})=> {
  
    
        return (
            <div className="PortfolioPage">
                <div className="d-flex projectType">
                    <h1 onClick={()=>setSelected(true)} className={`w-100 ${selected ? "active" : "passive"}`}>
                    {
                        selectedLanguage==="AZ" ?
                        "Sadə" :
                        "Basic"
                        }
                    
                    </h1>
                    <h1 onClick={()=>setSelected(false)} className={`w-100 ${selected ? "passive" : "active"}`}>React</h1>
                </div>
                <div className="disflex d-flex flex-wrap my-Projects">
                    {
                        
                        MyProjects.filter(Project => Project.type===(selected ? "simple" : "react")).map(filteredData=>(
                            
                            <div key={filteredData.id} className="Projects">
                            <a target="blank" href={filteredData.URL}>
                                <img className="ProjectImg" src={require(`${filteredData.Picture}`)} alt="" />
                            </a>
                            <h3 className="ProjectName">{filteredData.name}</h3>
                        </div>
                        ))
                      
                    }
                </div>


            </div>
        )
    
}

export default Portfolio