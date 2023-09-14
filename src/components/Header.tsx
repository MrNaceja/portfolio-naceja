'use client'

import Image from "next/image";
import Link from "next/link";

import { usePathname } from 'next/navigation'

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
                />
                <nav className="flex gap-5 items-baseline">
                    {
                        headerNavigations.map(({ label, route }) => {
                            const isActiveRoute = currentRoute == route
                            return <Link key={route} href={route} className={`
                            cursor-pointer select-none uppercase 
                            ${isActiveRoute
                                    ? 'text-lg text-white font-bold'
                                    : 'text-sm text-gray-400 hover:text-gray-200'
                                }
                        `}>{label}</Link>

                        })
                    }
                </nav>
            </div>

        </header>
    )
}