import React from 'react'
import WeatherBox from './WeatherBox/WeatherBox'
import HeaderLink from '../HeaderLink/HeaderLink'
import Links from './Links/Links'

const Footer = props => {
  return (
    <div className='Footer'>
          <div className='ADS'>
            <img src='/123.jpg' alt='Рекламный блок'></img>
          </div>  
          <div className='LinkBlock'>
              <div className='LinkBlockCol'>
                  <WeatherBox />
                  <HeaderLink />
                  <Links />
                  <Links />
                  <Links />
              </div>

              <div className='LinkBlockCol'>
                  <HeaderLink />
                  <Links />
                  <Links />
                  <Links />
                  <HeaderLink />
                  <Links />
                  <Links />
                  <Links />
                  <Links />
              </div>
          </div>
    </div>
  )
}

export default Footer