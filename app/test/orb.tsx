'use client'

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Orb.css";

function Orb() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollX = Math.sin(scrollY * 0.02) * 1500; 

    controls.start({ x: scrollX, y: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="Orb">
      <div className="spacer" />
      <motion.div
        className="movingDiv"
        animate={controls}
        initial={{ x: 0, y: 0 }}
        transition={{ type: "tween" }}
      />

      <div className="content">
        <div className="miniorb mini" />
        <div className="miniorb2 mini" />
        <div className="miniorb3 mini" />
        <div className="miniorb4 mini" />
      </div>
    </div>
  );
}

export default Orb;





//css\\



// body{
//   background-color: black;
// }
// .Orb {
//     font-family: Arial, sans-serif;
//     overflow: hidden; 
//     position: relative;
    
//   }
//   /* Moving div */
//   .movingDiv {
//     width: 200px;
//     height: 200px;
//     background-color: #70d9dd;
//     right: 0;
//     transform: translateX(100%) , translateY(100%);
//     position: fixed;
//     border-radius: 50%;
//     z-index: 1; 
//     filter: blur(120px);
//     /*box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
//   }

//   .miniorb{
//     width: 80px;
//     height: 80px;
//     left: 0;
//     top: 40px;
//     animation: ease-in 0.3ms;
//   }
//   .mini{
//     background-color: #70d9dd;
//     position: fixed;
//     border-radius: 50%;
//     z-index: 1; 
//     filter: blur(50px);
//   }
//   .miniorb2{
//     width: 80px;
//     height: 80px;
//     left: 130px;
//     top: 250px;
//   }
 
//   .miniorb3{
//     width: 80px;
//     height: 80px;
//     left: 500px;
//     top: 200px;
//   }
  
//   .miniorb4{
//     width: 80px;
//     height: 80px;
//     left: 600px;
//     top: 500px;
//   }
//   /* Content container */
//   .content {
//     padding: 20px;
//     height: 150vh; /* Adjust to create enough space for scrolling */
//   }
  

