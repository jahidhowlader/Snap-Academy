import { motion } from "framer-motion"
import { useState } from "react";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
}


const ToggleButton = ({setOpen}) => {

    // const [open, setOpen] = useState(false)

    return (
        <button
            className=" rounded-full bg-transparent border-none"
            onClick={() => setOpen(prev => !prev)}
        >
            <svg width="23" height="15" viewBox="0 0 23 23">
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    d="M 1 9.423 L 15 9.423"
                    variants={{
                        closed: {opacity: 1},
                        open: { opacity: 0}
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    );
};

export default ToggleButton;