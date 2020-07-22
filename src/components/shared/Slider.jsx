import React, {useState} from 'react'
import '../styles/Slider.scss'
import ImgComp from './ImgComp';
import i1 from "../../images/desktop.jpg";
import i2 from "../../images/mobile.jpg";
import i3 from "../../images/tablet.jpg";


export default function Slider() {
    let sliderArr = [
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>
    ];
    const [x, setX] = useState(0)
    const goLeft = () => {
        (x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x+100))
    }
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x-100))
    }
    return (
        <div className='slider'>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })
            }
            <button id="goLeft" onClick={goLeft}>Left</button>
            <button id="goRight" onClick={goRight}>Right</button>
        </div>
    )
}
