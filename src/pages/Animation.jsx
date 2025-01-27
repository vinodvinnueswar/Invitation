import React,{useEffect , useState} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Animation = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    
  return (
    <div className="animation1" data-aos="fade-up">
        Animation 1
    </div>
  )
}

export default Animation