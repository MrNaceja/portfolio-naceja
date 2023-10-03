import Image from "next/image"
import { FaBriefcase } from 'react-icons/fa'
import { Divider } from "../global/Divider"
import { Badge } from "../global/Badge"
export const ExperiencesTimeline = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="grid grid-cols-[42px,1fr] gap-2">
                <div className="flex flex-col items-center gap-2">
                   <div className="rounded-full border border-gray-400 p-2 grid place-items-center">
                       <FaBriefcase />
                   </div>
                   <Divider direction="vertical"/>
                </div>
                <div>
                    <div className="flex flex-col">
                       <div>
                            <a href="https://www.ipm.com.br/" target="_blank" className="text-sky-500 hover:text-sky-600">@ IPM Sistemas</a>
                            <h4>Desenvolvedor Back-end</h4>
                            <span className="text-gray-300 text-xs">16 Ago • atual • 2 anos</span>
                       </div>
                       <p className="text-sm text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quas maiores ex ipsam vel, magni nesciunt numquam quisquam hic cumque quibusdam, at earum nihil ipsum incidunt itaque tenetur velit porro!</p>
                       <div className="flex flex-col gap-2 mt-3">
                            <h6 className="text-sm">Competências</h6>
                            <div className="flex gap-3 flex-wrap">
                                {/* {TECHS.map((tech, index) => <Badge label={tech.name} key={index}/>)} */}
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}