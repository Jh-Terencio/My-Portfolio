import './Profile.css'
import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <a href='https://twitter.com/TerencioCRVG'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='https://www.instagram.com/jhterencio/?next=%2F'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='https://github.com/Jh-Terencio'>
              <i className='fa fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/jo%C3%A3o-ter%C3%AAncio-36295722b/'>
              <i className='fa fa-linkedin-square'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
