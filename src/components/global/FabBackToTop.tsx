'use client'

import { Button } from "@components/global/Button"
import { useCallback, useEffect, useState } from "react"
import { BsBoxArrowUp } from 'react-icons/bs'
import { twMerge } from "tailwind-merge"
import { AnimatePresence, motion } from "framer-motion"

export const FabBackToTop = () => {
    const [visible, setVisible] = useState(false)

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleScroll = useCallback(() => {
        if (!visible && window.scrollY > 600) setVisible(true)
        if (visible && window.scrollY <= 500) setVisible(false)
    }, [ visible ])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [ handleScroll ])
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity:0, right: -20 }}
                    exit={{ opacity:0, right: -20 }}
                    animate={{ opacity: 1, right: 20 }}
                    className="fixed right-5 bottom-20 z-20"
                >
                    <Button onClick={handleGoToTop} className="hover:shadow-button">
                        <BsBoxArrowUp />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}