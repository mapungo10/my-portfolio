import React from 'react'


const SkillsCardComponent = (props) => {
    return (
        <>
            <div className="col-sm-2 col-6 p-0">
                <div className="card">
                    <div className="card-body row skill-card p-1">
                        <div className="col-sm-6 col-7">
                            <center>
                                <img src={props.image} alt="" />
                            </center>
                        </div>
                        <div className="col-sm-12 col-7 p-0">
                            <center>
                                <h5>{props.skill}</h5>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsCardComponent
