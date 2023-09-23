import { TechDTO } from "@models/TechDTO"

interface ITechCardProps extends TechDTO {}
export const TechCard = ({name: tech, icon, experienceTime} : ITechCardProps) => {
    return (
        <div className={`
            flex flex-col justify-between rounded-lg bg-sky-950/20 text-gray-400 p-5 transition-all shadow-sm
            hover:bg-sky-950/50 hover:text-sky-500 cursor-pointer
        `}>
            <div className="flex flex-row items-center justify-between">
                <h3 className="font-bold text-lg">{tech}</h3>
                <span className="text-2xl">{icon}</span>
            </div>
            <span className="font-light text-md">{experienceTime}</span>
        </div>
    )
}