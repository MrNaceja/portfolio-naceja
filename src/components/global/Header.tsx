'use client'

import Image from "next/image";
import Link from "next/link";

import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { twMerge } from "tailwind-merge";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from "react";

type TNavLink = {
    label: string,
    route: string
}


const headerNavigations: TNavLink[] = [
    { label: 'Inicio'  , route: '/' },
    { label: 'Projetos', route: '/projetos' },
]

export const Header = () => {
    const currentRoute = usePathname()
    const { scrollY } = useScroll()
    const [scrolledStyle, setScrolledStyle] = useState('border-b-transparent backdrop-blur-md')
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 500)  {
            setScrolledStyle('border-b-white/5 backdrop-blur-lg')
        }
        if (latest <= 500) {
            setScrolledStyle('border-b-transparent backdrop-blur-md')
        } 
    })
    
    return (
        <motion.header 
            initial={{ top: -100, opacity: 0}}
            animate={{ top: 0, opacity: 1}}
            transition={{ duration: 0.5 }}
            className={twMerge(
                "w-full flex items-center justify-center py-5 fixed top-0 z-10 border-b", 
                scrolledStyle
            )}
        >
            <div className="container flex items-center justify-between">
                <Image
                    src='/images/logo_naceja.png'
                    alt='Logo Naceja'
                    width={50}
                    height={50}
                    className="drop-shadow-lg"
                />
                <nav className="flex gap-5 items-baseline">
                    {
                        headerNavigations.map(({ label, route }) => {
                            const isProjectRoute = (route === '/projetos' && currentRoute.startsWith('/projetos'))
                            const isActiveRoute  = currentRoute === route || isProjectRoute
                            return (
                                <Link key={route} href={route} className={
                                    twMerge(`
                                        cursor-pointer select-none uppercase relative text-sm text-gray-400 hover:text-gray-200 
                                        after:block after:absolute after:-bottom-1 after:inset-x-1/2 after:h-1 
                                        after:w-1 after:rounded-full after:bg-transparent after:animate-ping
                                    `,
                                        isActiveRoute && 'text-md text-white font-bold after:bg-white'
                                    )
                                }>{label}</Link>
                            )

                        })
                    }
                </nav>
            </div>
        </motion.header>
    )
}