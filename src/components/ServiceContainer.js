import Service from "./Service";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const ServiceContainer = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    return (
        <div className="service-container">
            {language.service.map((item, index) => (
                <Service key={index} service={item} />
            ))}
        </div>
    )
}

export default ServiceContainer;