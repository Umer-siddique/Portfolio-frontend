import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <div className='main-container'>
            <div className='skills__container'>
                <div className='skills__heading'>
                    <h1>Skills</h1>
                </div>

                <div className='skills__info'>
                    <div className='skills__Details'>
                        <h1>Web Develoment</h1>
                        <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
                    </div>
                    <div className='skills__Details'>
                        <h1>Mobile App Development</h1>
                        <p>I am Full Stack React Native Mobile App developer a cross platform for developing Mobile Apps.</p>
                    </div>
                    <div className='skills__Details'>
                        <h1>Problem Solving</h1>
                        <p>I love solving problems whether programming problems or real life problems.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills