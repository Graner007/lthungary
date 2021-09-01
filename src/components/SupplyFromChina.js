import Space from "./Space";
import { useContext } from 'react';
import { Link } from "react-router-dom";

import { LanguageContext } from "../contexts/LanguageContext";
import balazs from '../static/balazs.jpg';

const AboutUs = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    return (
        <div className="supply-from-china">
            <h1>{language.china.title}</h1>
            <Space padding="30px" />
            {language.china.beginningText.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <p>{language.china.list.title}</p>
            <ul>
                {language.china.list.elements.map((item, index) => (
                    <li style={{marginLeft: 30}} key={index}>{item}</li>
                ))}
            </ul>
            <button className="btn btn-primary" style={{marginTop: "2%"}}><Link className="link" to="/offer" style={{color: "white"}}>{language.navbar[4]}</Link></button>
            <Space padding="20px" />
            <div className="introduction">
                <div className="card">
                    <img src={balazs} alt="pic" style={{maxWidth: '100%', height: 'auto'}} />
                    <div className="card-container">
                        <br />
                        <h4><b>{language.china.introduction.name}</b></h4> 
                        <p>{language.china.introduction.role}</p> 
                    </div>
                </div>
                <Space padding="3%" />
                <div className="desc">
                    {language.china.introduction.desc.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;