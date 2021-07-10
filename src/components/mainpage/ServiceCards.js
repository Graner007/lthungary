import ServiceCard from "./ServiceCard";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";

const ServiceContainer = () => {
    const {isHuTrue, hu, en} = useContext(LanguageContext);
    const language =  isHuTrue ? hu : en;
    return (
        <div className="service-cards">
            {language.service.map((item, index) => (
                <ServiceCard key={index} service={item} />
            ))}
        </div>
    )
}

export default ServiceContainer;