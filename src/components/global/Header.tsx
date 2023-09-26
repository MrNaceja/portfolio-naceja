'use client'

import Image from "next/image";
import Link from "next/link";

import { usePathname } from 'next/navigation'
import { twMerge } from "tailwind-merge";

type TNavLink = {
    label: string,
    route: string
}

const headerNavigations: TNavLink[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Projetos', route: '/projetos' },
]

export const Header = () => {
    const currentRoute = usePathname()
    return (
        <header className="w-full flex items-center justify-center py-5 fixed top-0 z-10 backdrop-blur-md">
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
                            const isActiveRoute = currentRoute == route
                            return <Link key={route} href={route} className={
                                twMerge("cursor-pointer select-none uppercase relative",
                                    isActiveRoute
                                        ? "text-md text-white font-bold after:block after:absolute after:-bottom-1 after:inset-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-white after:animate-ping"
                                        : "text-sm text-gray-400 hover:text-gray-200"
                                )
                            }>{label}</Link>

                        })
                    }
                </nav>
            </div>

        </header>
    )
}