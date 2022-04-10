import { useState,useEffect } from "react";


const Welcome =({text})=>{
    const [open, setOpen] = useState({
        fade:'fade-out'
    });
const [DisplayNone,setDisplayNone]=useState({
    display:''
})
    
    useEffect(()=>{
        const Fadeintime=setInterval( ()=>{
                setOpen({
                    fade: 'fade-in'
                })
        },1000)            
    },[open])

const SetdisPlayNoneonClick =()=>{
    setDisplayNone({
        display:'d-none'
    })
}
    
    return(
     
            <div className={`${open.fade} ${DisplayNone.display} welcome-page flex-column align-items-center fw-bolder text-white`}>   
                <div>Welcome to my Front-end world</div><br/>
                <div onClick={SetdisPlayNoneonClick}>Click me</div>
               
            </div>
  

    )
}



export default Welcome