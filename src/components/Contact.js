import Space from "./Space";
import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";

const Contact = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    return (
        <div className="contact">
            <h1>{language.contact.title}</h1>
            <Space padding="30px" />
            {language.contact.text.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default Contact;