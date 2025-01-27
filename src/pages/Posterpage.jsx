import React, { useEffect, useState } from 'react'
import { Data } from '../helpers/Data';
import Aos from "aos";
import "aos/dist/aos.css";
import images from '../images/BR.jpeg';
import Bride from '../images/Bride.jpeg';
import Groom from '../images/Groom.jpeg';
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom"

const Posterpage = () => {

   const [Items , setItems] = useState(Data);

   useEffect(()=>{
    Aos.init({duration:2000});
   },[])

  return (
    <div className="Invite">
        <div className="invite-section" data-aos="fade-right" >
        <div className="title">
            <h2>Wedding Invitation</h2>
        </div>
        <div className="matter" data-aos="fade-up">
            <h5>We're Getting Married </h5>
            <p>Emma & Jhon</p>
            <div className="Date_Time" data-aos="fade-left">
                Firday , Jan. 31, 2025<br></br>
                Venue : Sarpavaram Junction , Venkanababu Function Hall
            </div>
        </div>
        <div className="couple" data-aos="fade-left">
        <div className="Img" data-aos="fade-left">
                  <p className='mess' data-aos="fade-right">Celebrating our Love <br /> 
                  with all your's Blessing's  </p>
                    <img data-aos="fade-left" src={images} alt="" />
                </div>
        </div> 
        <div className="content" data-aos="zoom-in-up">
            <h2>Our Ceremony</h2>
            <p>we can't wait to be surrounded </p>
              <p>by our favorite people</p>
        </div>
       <div className="Bride">
        <div className="Bride-Img" data-aos='flip-right'>
            <img src={Bride} alt="" />
        </div>
        <div className="Bride-details" data-aos='fade-left'>
        <p>A . Emma </p>
        <p>  MSC   Computer Science</p>
        <div className='Bride-li'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, sint modi? Dignissimos a obcaecati ab velit hic delectus ad repellat distinctio nemo aut, unde quasi voluptatibus magnam alias eos eaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi odio soluta adipisci provident quisquam aliquam quibusdam. Et, iure. Sed molestiae porro dicta odit omnis dignissimos doloribus assumenda vel accusamus.
        </p>
        </div>
        </div>
        
       </div>

       <div className="Groom">
        <div className="Groom-details" data-aos='fade-left'>
        <p>D . Jhon </p>
        <p>  B.Tech  Civil Engineering</p>
        <div className='Groom-li'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, sint modi? Dignissimos a obcaecati ab velit hic delectus ad repellat distinctio nemo aut, unde quasi voluptatibus magnam alias eos eaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi odio soluta adipisci provident quisquam aliquam quibusdam. Et, iure. Sed molestiae porro dicta odit omnis dignissimos doloribus assumenda vel accusamus.
        </p>
        </div>
        </div>
        <div className="Groom-Img" data-aos='flip-left'>
            <img src={Groom} alt="" />
        </div>
        
       </div>
      <div className="Our-memories" data-aos='zoom-in-up'>
        <h2>Our Memories</h2>
        <div className="wed_videos" data-aos='flip-down'>
            <ReactPlayer 
            url={'https://youtu.be/r4KBqiAnhNo?si=TCaf7Xvy9eJlhbIP'}
            />
          
        </div>
      </div>
      <div className="details" data-aos='fade-left'>
        <h2>Our Big Day</h2>
        <div className="time" data-aos='flip-right'>
          <strong><p>When</p></strong>
          <p>----</p>
          <p>Jan 31,2025 8:00 PM - Feb 1,2025 12:00 AM</p>
        </div>
        {/* <div className="lunch">
          <strong><p>Lunch</p></strong>
          <p></p>
        </div> */}
      </div>

      <div className="location" data-aos="zoom-in-up">
        <h2>Venue Location</h2>
        <div className="map" data-aos= "fade-left">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.834889439881!2d82.22869667493642!3d16.98267001433846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382839555bb587%3A0xd097557ca4e75416!2sVenkanna%20Babu%20Function%20Hall!5e0!3m2!1sen!2sin!4v1737988979751!5m2!1sen!2sin" width="450" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         <div className="button" href="https://maps.app.goo.gl/yZkLZ2JRFwJB99oa8">
          <a href="https://maps.app.goo.gl/yZkLZ2JRFwJB99oa8">View Map</a>
         </div>
      
        </div>
        <div className="div">
        
        </div>
      </div>

    </div>
    </div>
  )
}

export default Posterpage