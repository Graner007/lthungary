import ImageSlider from "./ImageSlider";
import air from "../static/air.jpeg";
import ship from "../static/ship.jpg";
import ship2 from "../static/ship2.jpeg";
import train from "../static/train.jpeg";
import truck from "../static/truck.jpeg";

const Mainpage = () => {
    const images = [ship, train, ship2, air, truck]; 
    return (
        <div>
            <ImageSlider images={images} />
        </div>
    )
}

export default Mainpage;