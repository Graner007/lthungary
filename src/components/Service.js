import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { useParams, Link } from "react-router-dom";
import Space from "./Space";


const Service = () => {

    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    const { name } = useParams();
    const [service, setService] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        switch (name) {
            case 'sea-shipping':
                setService(language.service[0]);
                setLoading(false);
                break;
            case 'vehicular-transport':
                setService(language.service[1]);
                setLoading(false);
                break;
            case 'train-transport-from-china':
                setService(language.service[2]);
                setLoading(false);
                break;
            case 'air-transport':
                setService(language.service[3]);
                setLoading(false);
                break;
            default:
                break;
        }
    }, [name, language.service]);

    return (
        loading ? <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div> : 
            <div className="service-container container">
                <h1>{service.title}</h1>
                <Space padding={30} />
                {service.text.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <button className="btn btn-primary" style={{marginTop: "2%"}}><Link className="link" to="/offer" style={{color: "white"}}>{language.navbar[3]}</Link></button>
            </div>
    )
}

export default Service;