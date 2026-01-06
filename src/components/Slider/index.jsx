import Card from "../Card";
import { ContainerSlides } from "../Slider/styles";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ info, title }) {
   
    return (

        <ContainerSlides>
            <h2>{title}</h2>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={"auto"}
                className="swiper-container"
                >
                {info.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                    <Card item={item}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </ContainerSlides>
    )
}

export default Slider;