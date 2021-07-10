import React from 'react';
import { Link } from "react-router-dom";

const Service = ({service}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.text}</p>
                <Link to="/service/" className="card-link">{service.name}</Link>
            </div>
        </div>
    )
}

export default Service;