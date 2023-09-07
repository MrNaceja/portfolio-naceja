import Link from "next/link";

export type TNavLink = {
    label: string,
    route: string
}

interface INavLinkProps extends TNavLink {}
export default function NavLink({ label, route } : INavLinkProps) {
    return (
        <Link href={route}>
            <span className="cursor-pointer select-none">
                {label}
            </span>
        </Link>
    )
}