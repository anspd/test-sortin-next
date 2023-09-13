import React, { useState, useEffect } from "react";
import { easeIn, motion, useAnimation } from "framer-motion";

const MiniOrbe = () => {
  const animationDuration = 4;
  const [div1Controls] = useState(useAnimation());
  const [div2Controls] = useState(useAnimation());

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const getRandomPosition = () => ({
    x: Math.random() * (screenWidth - 70),
    y: Math.random() * (screenHeight - 70),
  });

  useEffect(() => {
    const animateRandomPosition = async (controls) => {
      while (true) {
        const newPosition = getRandomPosition();
        await controls.start(newPosition);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    };

    animateRandomPosition(div1Controls);
    animateRandomPosition(div2Controls);
  }, [div1Controls, div2Controls]);

  return (
    <div>
      
      <motion.div
        className="moving-div div1"
        initial={false}
        animate={div1Controls}
        transition={{
          duration: animationDuration
        }}
        style={{    
          backgroundColor: "blue",
        }}
      />

      <motion.div
        className="moving-div div2"
        initial={false}
        animate={div2Controls}
        transition={{
          duration: animationDuration
        }}
        style={{
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default MiniOrbe;