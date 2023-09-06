import React from 'react'
import {FaGithub} from 'react-icons/fa'

export default function ProjectItem({image,name}) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <h1>{name}</h1>
      <a  className='coding'
          href='https://github.com/Prasannakumar018'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='profileImg' style={{color:'white', height:'30px', width:'30px'}}/>
        </a>
    </div>
  )
}
