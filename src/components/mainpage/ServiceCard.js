import React from 'react';
import { Link } from "react-router-dom";

const Service = ({service, url}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{service.title}</h5><br /><br />
                <Link to={url} className="card-link btn btn-primary">{service.title}</Link>
            </div>
        </div>
    )
}

export default Service;