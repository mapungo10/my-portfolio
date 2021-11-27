import React from 'react'

const ContactIconComponent = (props) => {
    return (
        <>
            <a href={props.link}>
                <div className="m-2 d-flex justify-content-center align-items-center" style={{height: '2.5em', width: '2.5em', borderRadius: '100%', color: props.color, backgroundColor: props.backgroundColor}}>
                    {props.icon}
                </div> 
            </a>
        </>
    )
}

export default ContactIconComponent
