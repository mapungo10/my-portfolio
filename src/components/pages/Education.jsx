import React from 'react'
import PageHeaderComponent from '../globals/PageHeaderComponent'

function Education() {
    return (
        <>
            {/* ============= pageheader =============== */}
                <PageHeaderComponent title="Education background" subTitle="Bachelor Degree in Information Technology" />

            {/* ============== content ================= */}
                <div className="page-content-con">
                    <div className="container-fluid">
                        <div className="row">
                            {/* ====================== IFM ==================== */}
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">2016 – 2019</h3>
                                        <h3 style={{fontSize: "1em"}}>
                                            Bachelor Degree in Information Technology at Institute of Finance Management (IFM), Dar Es Salaam, Tanzania.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* ====================== hight school ==================== */}
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">2014 – 2016</h3>
                                        <h3 style={{fontSize: "1em"}}>
                                            Advanced Certificate of Advanced Level Education at Sanya Juu High School Kilimanjaro.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* ====================== sec ==================== */}
                            <div className="col-sm-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="sec-hd">2010 – 2013</h3>
                                        <h3 style={{fontSize: "1em"}}>
                                            Certificate of Ordinary Level Education at Rasesa Secondary School Kilimanjaro.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Education
