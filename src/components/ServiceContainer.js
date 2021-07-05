import Service from "./Service";


const ServiceContainer = () => {
    return (
        <div className="service-container">
            {items.map((item, index) => (
                <Service key={index} serivce={item} />
            ))}
        </div>
    )
}

export default ServiceContainer;