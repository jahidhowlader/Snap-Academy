import { motion } from "framer-motion";
import React, { useState } from "react";

const Instructor = () => {

    const [isSlideVisible, setSlideVisible] = useState(false);

    const variants = {
        hidden: { x: -400 },
        visible: { x: 0 },
    };

    const toggleSlide = () => {
        setSlideVisible(!isSlideVisible);
    };

    return (
        <div>
            <motion.div
                initial="hidden"
                animate={isSlideVisible ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: .6, stiffness: 300 }}
                style={{ width: "100%", height: "100%", background: "lightblue" }}
            >
                {/* Your content inside the sliding div */}
                <h1>This is sliding content</h1>
            </motion.div>

            <button onClick={toggleSlide}>Toggle Slide</button>
        </div>
    );
};

export default Instructor;