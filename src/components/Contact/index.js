import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet';



const Contact = () => {

  const[letterClass,setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },3000)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_dquhjan', 'template_1g6xz5j', refForm.current, "TleIAVlZ4cLxNe8w1")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','o','n','t','a','c','t',' ','M','e']}
            idx={15}
            />
        </h1>
        <p>
          I am interested in freelance opportunities - specially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below from either.
        </p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type="text" name="name" placeholder='Name' />
              </li>
              <li className='half'>
                <input type="email" name="email" placeholder='Email' />
              </li>
              <li>
                <input type="text" name="subject" placeholder='Subject' />
              </li>
              <li>
                <textarea name="message" placeholder='Message' />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className='info-map'>
        Cristian F. Masci
        <br/>
        Australia
        <br/>
        <span>crissmdev@gmail.com</span>

      </div>
      <div className="map-wrap">
          <MapContainer center={[-33.8688, 151.2093]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.8688, 151.2093]}>
              <Popup>We can build an amazing web for you here</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact