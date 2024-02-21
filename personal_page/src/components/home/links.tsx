import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './stylesheet_home.css'

const links = () => {
  return (
    
    <div className="links">
        <a href="www.linkedin.com/in/anshpandey10" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/apandey16" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default links