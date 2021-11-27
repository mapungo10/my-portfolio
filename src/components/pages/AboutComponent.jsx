import React, {useState} from 'react'
import CV from '../../assets/media/documents/deniceJuliusMinja.pdf'
import PageHeaderComponent from '../globals/PageHeaderComponent'
import PersonalInfoCardComponent from '../globals/PersonalInfoCardComponent'

const AboutComponent = () => {
    // ================= state =================
    const [personalInfo] = useState([
        {
            title: 'Gender',
            info: 'Male'
        },
        {
            title: 'Nationality',
            info: 'Tanzanian'
        },
        {
            title: 'Date of birth',
            info: '20-02-1996'
        },
        {
            title: 'Place of birth',
            info: 'Arusha'
        },
        {
            title: 'Current Location',
            info: 'Dar Es Saalam'
        },
        {
            title: 'Marital status',
            info: 'Single'
        }
    ]) 

    // =============== return ===================
    return (
        <>
            {/* ============= pageheader =============== */}
                <PageHeaderComponent title="Denice Minja" subTitle="Full-stack web developer" />

            {/* ============== content ================= */}
                <div className="page-content-con">
                    <div className="container-fluid">
                        <div className="row">
                            {/* ================= discription ================== */}
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">Hey, I'm Denice Minja</h3>
                                        <ul>
                                            <li className="ml-3">
                                                <p>
                                                    I'm web developer with 2+ year experience in design and developing web application. I had been working at Wazawa College of Arts, Media and Design <strong>(WACAMED)</strong> and gain a lot of experience in different web technologies such as laravel(pHp framework), javaScript, jSON, ReastAPI, MysqlDB and many more.
                                                </p>
                                            </li>
                                            <li className="ml-3">
                                                <p className="mt-2">
                                                    My achievement during working time is successful developing a college website and College E-learning system.
                                                </p>
                                                <p>
                                                    <strong>College website : </strong> 
                                                    <a href="https://wacamed.com" style={{color: '#0099cc'}}>wacamed.com</a>
                                                </p>
                                                <p>
                                                    <strong>College E-learning : </strong> 
                                                    <a href="https://lms.wacamed.com" style={{color: '#0099cc'}}>lms.wacamed.com</a>
                                                </p>
                                            </li>
                                        </ul>
                                        <div>
                                            <center>
                                                <a href={CV} download className="btn btn-info custom-btn mt-4">
                                                    Download my Regume
                                                </a>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* =============== personal info ================= */}
                            <div className="col-sm-12 mt-4 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">Personal info's</h3>
                                        <div className="container-fluid">
                                            <div className="row">
                                                {
                                                    personalInfo.map((info, index) => (
                                                        <PersonalInfoCardComponent key={index} title={info.title} info={info.info} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AboutComponent
 