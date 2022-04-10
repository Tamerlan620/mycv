import { BsArrowDownLeft, BsArrowDownRight, BsArrowUpLeft, BsArrowUpRight } from 'react-icons/bs';
import { useState } from "react";
import { Link } from 'react-router-dom';




const MyCv = () => {
    const [openleftdown, setopenleftdown] = useState({
        fade: ''
    });
    const [openrightdown, setopenrightdown] = useState({
        fade: ''
    });
    const [openleftup, setopenleftup] = useState({
        fade: ''
    });
    const [openrightup, setopenrightup] = useState({
        fade: ''
    });




    const OpenCloseBtnLeftDown = () => {
        if (openleftdown.fade === "") {
            setopenleftdown({
                fade: 'openleftdown'
            })
        } else {
            setopenleftdown({
                fade: ''
            })
        }
    }
    const OpenCloseBtnLeftUp = () => {
        if (openleftup.fade === "") {
            setopenleftup({
                fade: 'openleftup'
            })
        } else {
            setopenleftup({
                fade: ''
            })
        }
    }
    const OpenCloseBtnRightDown = () => {
        if (openrightdown.fade === "") {
            setopenrightdown({
                fade: 'openrightdown'
            })
        } else {
            setopenrightdown({
                fade: ''
            })
        }
    }
    const OpenCloseBtnRightUp = () => {
        if (openrightup.fade === "") {
            setopenrightup({
                fade: 'openrightup'
            })
        } else {
            setopenrightup({
                fade: ''
            })
        }
    }
    return (
        <div className="ContainerCv">

            <div className='MyPic'>
                <nav>
                    <ul>
                        <li className={`Home ${openleftup.fade}`} ><Link className="GoToHome" to="/">Home</Link></li>
                        <li className={`About ${openrightup.fade}`}><Link className="GoToAbout" to="/about">About</Link></li>
                        <li className={`Skills ${openleftdown.fade}`}><Link className="GoToSkills" to="/skills">Skills</Link></li>
                        <li className={`Portfolio ${openrightdown.fade}`}><Link className="GoToPortfolio" to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
                <div className="directions">
                    <span onClick={OpenCloseBtnLeftDown} className='leftdown'><BsArrowDownLeft /></span>
                    <span onClick={OpenCloseBtnRightDown} className='rightdown'><BsArrowDownRight /></span>
                    <span onClick={OpenCloseBtnLeftUp} className='leftup'><BsArrowUpLeft /></span>
                    <span onClick={OpenCloseBtnRightUp} className='rightup'><BsArrowUpRight /></span>

                </div>

            </div>



        </div>


    )
}
export default MyCv


