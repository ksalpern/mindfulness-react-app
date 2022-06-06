import React from "react";
import { Carousel } from 'react-bootstrap';
import nature from '../images/nature.jpg';
import nature2 from '../images/nature2.jpg';
import nature3 from '../images/nature3.jpg';
import nature4 from '../images/nature4.jpg';
import nature5 from '../images/nature5.jpg';


export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                className="d-block w-100"
                src={nature}
                alt="nature"
                />
                <Carousel.Caption>
                    <h3>Beauty of nature</h3>
                    <p>Nature is life: every breath you take, every drop you drink, every bite you eat — it all comes from nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                className="d-block w-100"
                src={nature2}
                alt="nature"
                />
                <Carousel.Caption>
                    <h3>Beauty of nature</h3>
                    <p>Nature is life: every breath you take, every drop you drink, every bite you eat — it all comes from nature.</p>
                </Carousel.Caption>
            </Carousel.Item><Carousel.Item style={{'height': '600px'}}>
                <img
                className="d-block w-100"
                src={nature3}
                alt="nature"
                />
                <Carousel.Caption>
                    <h3>Beauty of nature</h3>
                    <p>Nature is life: every breath you take, every drop you drink, every bite you eat — it all comes from nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                className="d-block w-100"
                src={nature4}
                alt="nature"
                />
                <Carousel.Caption>
                    <h3>Beauty of nature</h3>
                    <p>Nature is life: every breath you take, every drop you drink, every bite you eat — it all comes from nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                className="d-block w-100"
                src={nature5}
                alt="nature"
                />
                <Carousel.Caption>
                    <h3>Beauty of nature</h3>
                    <p>Nature is life: every breath you take, every drop you drink, every bite you eat — it all comes from nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}