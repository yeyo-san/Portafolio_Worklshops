'use client'

import { fadeIn } from "@/utils/motion.transition"
import { motion } from "framer-motion"

interface Transition_fadeInProps {
    children: React.ReactNode
    position: 'right' | 'bottom' | 'left'
    className?: string
}

export const Transition_fadeIn = (props: Transition_fadeInProps) => {
    const { children, position, className} = props

    return(
        <motion.div
        variants={fadeIn(position)}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className={className}>

            {children}
        </motion.div>
    )
}