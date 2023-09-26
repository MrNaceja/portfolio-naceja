
interface IBadgeProps {
    label: string
}
export const Badge = ({ label } : IBadgeProps) => {
    return (
        <span className="text-sky-400 bg-sky-800/50 px-4 py-1 rounded-md text-sm uppercase">
            {label}
        </span>
    )
}