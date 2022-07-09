import React from 'react';
import uno from '../img/uno.jpg';
import dos from '../img/dos.jpg';
import tres from '../img/tres.jpg';
import cuatro from '../img/cuatro.jpg';

export const Slider = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className='carousel slide' data-bs-ride="carousel carousel-style">
            <div className='carousel-indicators'>
                <button type='button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className='active' aria-current='true' aria-label="Slide 1"></button>
                <button type='button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type='button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type='button' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={uno} className='d-block img-fluid carousel-img opacity' alt="..." />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5 className='h2'>PLANNING</h5>
                        <p className='p-margin h5'>Bootstrap mobile first front-end framework</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={dos} className='d-block img-fluid carousel-img opacity' alt="..." />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5 className='h2'>PLANNING</h5>
                        <p className='p-margin h5'>Bootstrap mobile first front-end framework</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={tres} className='d-block img-fluid carousel-img opacity' alt="..." />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5 className='h2'>PLANNING</h5>
                        <p className='p-margin h5'>Bootstrap mobile first front-end framework</p>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={cuatro} className='d-block img-fluid carousel-img opacity' alt="..." />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5 className='h2'>PLANNING</h5>
                        <p className='p-margin h5'>Bootstrap mobile first front-end framework</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
