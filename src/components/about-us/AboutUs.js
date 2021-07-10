import Space from "../Space";
import { useContext } from 'react';
import { LanguageContext } from "../../contexts/LanguageContext";

const AboutUs = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    return (
        <div className="about-us">
            <h1>{language.about.title}</h1>
            <Space padding="30px" />
            {language.about.text.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default AboutUs;