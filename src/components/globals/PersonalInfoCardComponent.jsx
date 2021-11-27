import React from 'react'

const PersonalInfoCardComponent = (props) => {
    return (
        <>
           <div className="col-sm-4 col-6 p-0 p-md-2 mt-2">
                <div className="card personal-info-card">
                    <div className="card-body p-2">
                        <center>
                            <h1>{props.title}</h1>
                            <h2>{props.info}</h2>
                        </center>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default PersonalInfoCardComponent