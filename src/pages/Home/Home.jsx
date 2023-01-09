import React from 'react'
// styles
import "./Home.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom'

// LOTTIE AN ANIMATION FILE
import Lottie from 'react-lottie'
import lottie from '../../lottie.json'
import Button from '@mui/material/Button';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Tech from '../Tech/Tech';


const Home = () => {

  // For Adding react lottie file
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <>
    {/*********** Home Section **********/}
      <section className='home-section'>
        <div className='left-section'>
          <div className="heading-withIcons">
            <h1>Hi,</h1>
            <div className='icons-container'>
              <FacebookIcon className="icon" />
              <InstagramIcon className="icon" />
              <TwitterIcon className="icon" />
              <WhatsAppIcon className="icon" />
            </div>
          </div>
          <h1>I'm Umer Siddique</h1>
          <p>Student of Computer Science.</p>
          <h2>Mern Stack Developer</h2>
          <Link to="/projects"><Button >Visit Projects</Button></Link>
        </div>
        <div className='right-section'>
          <Lottie className="home-lottie" options={defaultOptions} />
        </div>
      </section>

      <About/>
      <Skills/>
      <Tech/>

    </>
  )
}

export default Home