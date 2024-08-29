import React from 'react'

function AboutMe() {
  return (
    <div className="about">
      <img src="/images/me.jpg" alt="headshot" className='img'/>
      <h2 style={{
        color: "white",
        backgroundColor: '#3D405B',
        borderRadius: '8px',
        paddingLeft: '8px'
          }}>About Me</h2>
          <p>Hello, my name is Ted Perez. I am an enthusastic, ambitious and driven beginner developer. I'm ready and willing to take on any challenge and constantly set new goals of achievment for greatness. My goal is to some day make it into one of the large corporations such as sony, apple, google etc. as a top level developer and eventually be the one in charge of projects. I am a mature team worker that can work in a team environmentas well as using my own iniative when the time is needed. I work well under pressure and can adhere to strict deadlines On my spare time I train and compete in jiu jitsu and is currently at the purple belt level, my goal for the future is become a black belt and eventually teach the next generation of competitors.</p>
    </div>
  )
}

export default AboutMe