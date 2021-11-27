import React, {useState} from 'react'
import ProfilePicture from '../../assets/media/images/dp.jpg'
import { NavLink } from 'react-router-dom'
import { BsFillHouseFill, BsFillTrophyFill, BsGrid1X2Fill, BsLayersHalf } from "react-icons/bs";

const NavbarComponent = () => {
    // ============ state ===============
    const [navLinks] = useState([
        {
            name: 'About me',
            url: '/',
            icon: <BsFillHouseFill  className="link-icon" />,
        },
        {
            name: 'Education',
            url: '/education-background',
            icon: <BsFillTrophyFill  className="link-icon" />,
        },
        {
            name: 'Technical Skills',
            url: '/technical-skills',
            icon: <BsFillTrophyFill  className="link-icon" />,
        },
        {
            name: 'My portfolios',
            url: '/my-portfolios',
            icon: <BsGrid1X2Fill  className="link-icon" />,
        },
        {
            name: 'Work experience',
            url: '/work-experience',
            icon: <BsLayersHalf  className="link-icon" />,
        },
    ])
    
    // =========== return ===============
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* =========== profile picture =========== */}
                        <div className="col-sm-12 dp-con">
                            <img src={ProfilePicture} alt="dp" />
                        </div>

                    {/* ============ links ==================== */}
                        <div className="col-sm-12 p-0 nav-link-con">
                            <div className="">
                                <ul className="list-group">
                                    {
                                        navLinks.map((link, index) => (
                                            <li key={index} className="list-group-item p-1">
                                                <NavLink to={link.url} className="nav-link">
                                                    {link.icon} 
                                                    {link.name} 
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                </div>
            </div>  
        </>
    )
}

export default NavbarComponent
