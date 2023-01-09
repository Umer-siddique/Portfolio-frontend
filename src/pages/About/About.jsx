import React from 'react'
import "./About.css"
import myImage from "../../images/umer22.jpeg"
import Button from '@mui/material/Button';

const About = () => {
  return (
    <div className='about__container'>
      <div className='about__heading'>
        <h1>About</h1>
        {/* <div /> */}
      </div>

      <div className='about__content'>
        <div className='about__left'>
          <p>Hi, I'm Umer Siddique a computer science student with
            a passion for developing scalable Web and Mobile applications and
            working across the Mern Stack / Full Stack.
            <br />
            <br />
            I love working on new and exciting technologies emerging nowadays. I have good work
            experience as a MERN Stack Developer in startup(s) and UI/UX
            Designer where I was core member of the development team and done quite some contribution to open source as well.
          </p>
          <div className='btn_container'>
            <Button className="btns">Skills</Button>
            <Button className="btns">Resume</Button>
          </div>
        </div>

        <div className='about__right'>
          <div>
            <img src={myImage} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About