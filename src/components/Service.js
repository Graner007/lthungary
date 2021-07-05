import React from 'react'

const Service = ({service}) => {
    return (
        <div className='service'>
            <img src={service.src} alt="" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
        </div>
    )
}

export default Service;