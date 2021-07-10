import ImageSlider from "./mainpage/ImageSlider";
import air from "../static/air.jpeg";
import ship from "../static/ship.jpg";
import ship2 from "../static/ship2.jpeg";
import train from "../static/train.jpeg";
import truck from "../static/truck.jpeg";
import ServiceCards from "./mainpage/ServiceCards";

const Mainpage = () => {
    const images = [ship, train, ship2, air, truck]; 
    return (
        <div>
            <ImageSlider images={images} />
            <ServiceCards />
        </div>
    )
}

export default Mainpage;