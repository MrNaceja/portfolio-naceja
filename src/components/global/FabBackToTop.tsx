'use client'

import { Button } from "@components/global/Button"
import { useCallback, useEffect, useState } from "react"
import { BsBoxArrowUp } from 'react-icons/bs'
import { twMerge } from "tailwind-merge"

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
        <Button 
            onClick={handleGoToTop}
            className={twMerge(
                "fixed right-5 bottom-5 z-20 hover:shadow-button transition-all animate-bounce",
                visible ? 'visible' : 'invisible'
            )}
        >
        <BsBoxArrowUp />
    </Button>
    )
}