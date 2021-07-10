import AliceCarousel from 'react-alice-carousel';

const ImageSlider = ({images}) => {
    return (
        <div className="image-slides">
            <AliceCarousel
                autoPlayInterval={3000} 
                //autoPlayDirection="rtl" 
                autoPlay={true} 
                fadeOutAnimation={true}  
                disableAutoPlayOnAction={false}
                disableButtonsControls={true}
                disableDotsControls={true}
                infinite={true}>
                {images.map((image, index) => (
                    <img key={index} src={image} className="sliderimg" alt="" />
                ))}
            </AliceCarousel>
        </div>
    )
}

export default ImageSlider;