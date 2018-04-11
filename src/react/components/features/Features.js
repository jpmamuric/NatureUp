import React from 'react';

import './Features.scss'

const Features = () => {
  return (
    <section className='section-features'>
      <div className='row'>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-world'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Explore the World</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-compass'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Explore the World</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-map'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Explore the World</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <i className='feature-box__icon icon-basic-heart'></i>
            <h3 className='heading-teriary util-margin-bottom-small'>Explore the World</h3>
            <p className='feature-box__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
