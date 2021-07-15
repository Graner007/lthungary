import Space from "./Space";
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Contact = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    return (
        <div className="contact">
            <div className="contact-text">
                <h1>{language.contact.title}</h1>
                <Space padding="30px" />
                {language.contact.text.map((item, index) => {
                    const text = item.split(":");
                    const label = text[0];
                    return (
                        <p className="large-font" key={index}><b>{label}</b>: {text[1]}</p>
                    )
                })}
            </div>
            <div className="contact-map">
                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.0017013499482!2d16.727540487431487!3d46.42884584692813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768bc75436abb59%3A0x82289980575bfd54!2sLetenye%2C%20De%C3%A1k%20Ferenc%20utca%2038%2C%208868!5e0!3m2!1shu!2shu!4v1625908218756!5m2!1shu!2shu" width="600" height="450" style={{border: 0, float: "right"}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact;