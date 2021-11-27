import React from 'react'
import PageHeaderComponent from '../globals/PageHeaderComponent'

const ExperienceComponent = () => {
    return (
        <>
            {/* ============= pageheader =============== */}
                <PageHeaderComponent title="Work experience" subTitle="2+ year Web development experience" />

            {/* ============== content ================= */}
                <div className="page-content-con">
                    <div className="container-fluid">
                        <div className="row">
                            {/* ====================== wacamed 2020 ==================== */}
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">April 2020 – To date</h3>
                                        <h3 style={{fontSize: "1em"}}>
                                            Working as a developer at WAZAWA COLLEGE OF ARTS AND MEDIA DESIGN<strong> (WACAMED)</strong> with the following responsibilities:
                                        </h3>
                                        <ol className="pl-3">
                                            <li>College website design and development – ref: (<a style={{color: '#0099cc'}} href="https://wacamed.com" target="_blank" rel="noreferrer">wacamed.com</a>).</li>
                                            <li>College E-learning website design and development – ref:  (<a style={{color: '#0099cc'}} href="https://wacamed.com" target="_blank" rel="noreferrer">lms.wacamed.com</a>)</li>
                                            <li>Website management and maintenance.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* ====================== TANAPA 2018 ==================== */}
                            {/* <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">July 2018 - October 2018</h3>
                                        <h3 style={{fontSize: "1em"}}>
                                            Working as IT Technician TANZANIA NATIONAL PARK <strong>(TANAPA)</strong> with the following responsibilities:
                                        </h3>
                                        <ol className="pl-3">
                                            <li>Network hardware configuration and troubleshooting</li>
                                            <li>Computer repair maintenance</li>
                                            <li>Data backup and recovery</li>
                                            <li>Logical network design by using CISCO packet tracer software.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div> */}
                            {/* ====================== wacamed 2017 ==================== */}
                            {/* <div className="col-sm-12 mt-4 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">July 2017 - October 2017</h3>
                                        <h3 style={{fontSize: "1em"}}>
                                            Working as IT Technician TANZANIA NATIONAL PARK <strong>(TANAPA)</strong> with the following responsibilities:
                                        </h3>
                                        <ol className="pl-3">
                                            <li>Computer maintenance and troubleshooting</li>
                                            <li>Printer and network printer troubleshooting</li>
                                            <li>Network survey</li>
                                            <li>Data digitalization/File document scanning project.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ExperienceComponent

