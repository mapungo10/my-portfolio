import React, {useState} from 'react'
import { BsTelephone, BsWhatsapp, BsGoogle, BsLinkedin, BsGithub } from "react-icons/bs";
import ContactIconComponent from './ContactIconComponent';

const FooterComponent = () => {
    // ============== states ==================
    const [contactIcon] = useState([
        {
            icon: <BsTelephone style={{fontSize: '1.4em'}} />,
            link: 'tel:+255743967568',
            backgroundColor: '#003366',
            color: 'white'
        },
        {
            icon: <BsWhatsapp style={{fontSize: '1.4em'}} />,
            link: 'https://wa.me/+255743967568',
            backgroundColor: '#33cc33',
            color: 'white'
        },
        {
            icon: <BsGoogle style={{fontSize: '1.4em'}} />,
            link: 'mailto:mapungo10@gmail.com',
            backgroundColor: '#ff3333',
            color: 'white'
        },
        {
            icon: <BsLinkedin style={{fontSize: '1.4em'}} />,
            link: 'https://www.linkedin.com/in/golden-mapungo-a02979193',
            backgroundColor: '#3399ff',
            color: 'white'
        },
        {
            icon: <BsGithub style={{fontSize: '1.4em'}} />,
            link: 'https://github.com/mapungo10',
            backgroundColor: '#252525',
            color: 'white'
        },
    ])

    // ================ return ==================
    return (
        <>
            <div className="col-sm-12 footer-con">
                <div className="mt-1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex">
                                {
                                    contactIcon.map((icon, index) => (
                                        <ContactIconComponent key={index} icon={icon.icon} color={icon.color} backgroundColor={icon.backgroundColor} link={icon.link} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponent
