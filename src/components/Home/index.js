import React from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useState,useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import Loader from 'react-loaders'

const Home = () => {
  const[letterClass,setLetterClass] = useState('text-animate')
  const nameArray = ['r','i','s','t','i','a','n']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

  useEffect(() => {
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)
  }, []);

  return (
    <>
      <div className='container home-page'>
          <div className='text-zone'>
              <h1>Hi, <br/> I'm
              <img src={LogoTitle} alt='developer'/>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
              </h1>
              <h2>Frontend Developer / Javascript Expert / Youtuber</h2>
              <Link to='/contact' className='flat-button'>CONTACT ME</Link>
          </div>
          <Logo/>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home