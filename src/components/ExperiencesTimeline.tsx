import Image from "next/image"
import { FaBriefcase } from 'react-icons/fa'
import { Divider } from "./Divider"
export const ExperiencesTimeline = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[42px,1fr]">
                <div className="flex flex-col items-center gap-2">
                   <div className="rounded-full border border-gray-400 p-2 grid place-items-center">
                       <FaBriefcase />
                   </div>
                   <Divider direction="vertical"/>
                </div>
                <div>
                    <div className="flex flex-col">
                        <a href="https://www.ipm.com.br/" target="_blank">@ IPM Sistemas</a>
                        <h4>Desenvolvedor Back-end</h4>
                        <span>16 Ago • atual • 2 anos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}