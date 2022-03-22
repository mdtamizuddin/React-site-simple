import React from 'react'
import Button from '../sub-comp/Button'

function About() {
    const style = {
        display : 'flex',
        justifyContent:'center',
        alignItems: 'center',
        height:"100vh",
        width: '100vw'
    }
    function about() {
      console.log('i am  from about');
    }
  return (
    <div style={style}>
         <Button 
         onclick={about}
          width='300px' 
          color='white' 
          btnBg='#f30ca6'
           id='hero-btn' 
           to='' btnText='About Page'/>
    </div>
  )
}

export default About