import React from 'react'
import "./Home.scss"
import profilePic from '../../assets/imgs/profilePic.jpg'
const Home = () => {
  return (
    <div class="supContainer">
    
    <div className="homeContainer">
        <div className="profileCard"> 
        {/* <div className='profilePic'>
         <img src={profilePic} alt="Raj's Pic"></img>
        </div> */}
        <h1 className='neonText1'> Hi, I am Raj Patel</h1>
        <p className='neonText4'>"I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations."</p>
    
        </div>
        <div className="contactInfo neonText1" >
        <span> E : praj48848@gmail.com</span>
        <span> P : +91-9724140616</span>

        </div>
    </div>
    </div>
  )
}

export default Home