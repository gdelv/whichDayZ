import React from 'react'
import './Home.scss'
import '../Home/Carousel/FadeCarousel'
import { FadeCarousel }  from '../Home/Carousel/FadeCarousel'

export default function Home() {
    return (
        <>
        <FadeCarousel/>
        </>
        // <section className='hero is-fullheight' id='home'>
        //     <div className="home-container">
        //           <h1 className="subtitle is-uppercase has-text-centered has-text-primary is-size-1">our new site is</h1>
        //     <h1 className="title is-uppercase has-text-centered has-text-primary is-size-1">coming soon</h1>
        // <h1 className="subtitle is-uppercase has-text-centered has-text-primary is-size-1">stay tuned!</h1>
        //     </div>
        // </section>
    )
}
