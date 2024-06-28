'use client'

import { transitionPage } from "@/utils/motion.transition"
import { AnimatePresence, motion } from "framer-motion"

export const TransitionComponent = () =>{
    return(
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                className="fixed top-0 bottom-0 right-full w-screen z-30 bg-tercery"
                variants={transitionPage}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{delay: 0.1, duration: 0.5, ease: 'easeInOut'}}>

                </motion.div>
            </div>
        </AnimatePresence>
    )
}