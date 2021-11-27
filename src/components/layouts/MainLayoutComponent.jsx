import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FooterComponent from '../globals/FooterComponent'
import NavbarComponent from '../globals/NavbarComponent'
import AboutComponent from '../pages/AboutComponent'
import SkillsComponent from '../pages/SkillsComponent'
import PortfolioComponent from '../pages/PortfolioComponent'
import ExperienceComponent from '../pages/ExperienceComponent'
import Education from '../pages/Education'

const MainLayoutComponent = () => {
    // =============== return =======================
    return (
        <>
            <div className="app-wrap">
                <div className="container-fluid">
                    <div className="row">
                        {/* ================ side navbar ================ */}
                            <div className="col-sm-3 p-0 d-none d-md-block vh-100">
                                <NavbarComponent />
                            </div>

                        {/* ================ main content ================ */}
                            <div className="col-sm-9 p-0 vh-100">
                                {/* ============= contents ============== */}
                                <div style={{height: '90vh'}}>
                                    <Routes>
                                        <Route exact path='/' element={<AboutComponent />} />
                                        <Route exact path='/education-background' element={<Education />} />
                                        <Route exact path='/technical-skills' element={<SkillsComponent />} />
                                        <Route exact path='/my-portfolios' element={<PortfolioComponent />} />
                                        <Route exact path='/work-experience' element={<ExperienceComponent />} />
                                    </Routes>
                                </div>

                                {/* ============= footer ============== */}
                                <div style={{position: 'fixed', bottom: '0', right: '0', left: '0'}}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-3 d-none d-md-block d-lg-block"></div>
                                            <div className="col-sm-9 p-0">
                                                <FooterComponent />
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

export default MainLayoutComponent
