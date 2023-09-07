import Image from "next/image";
import { TNavLink } from "@components/NavLink";

const headerNavigations : TNavLink[] = [
    {label: 'Home'    , route: '/'},
    {label: 'Projetos', route: '/projetos'},
]

export default function Header() {
    return (
        <header className="container items-center justify-between flex py-5">
            <Image 
                src='/images/logo_naceja.png'
                alt='Logo Naceja'
                width={50}
                height={50}
            />
            <nav className="flex gap-5">
                {
                    headerNavigations.map(({label, route}) => (
                        <span role="nav-item" key={route}>{label}</span>
                    ))
                }
            </nav>
        </header>
    )
}