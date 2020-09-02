import React from 'react' 
import './Carousel.css'
import Desktop from '../../../images/desktop.jpg'
import Slider from 'react-slick';



export const FadeCoursel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (

        <Slider {...settings}>
            <section className='hero is-fullheight' id='home'>

            </section>
        </Slider>
    )
}