import Image from "next/image"
import { FaBriefcase } from 'react-icons/fa'
import { Divider } from "@components/global/Divider"
import { Badge } from "@components/global/Badge"
import { ExperienceWorkDTO } from "@utils/models/ExperienceWorkDTO"
import { format, formatDistance } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'

interface IExperiencesTimelineProps {
    experiences: ExperienceWorkDTO[]
}
export const ExperiencesTimeline = ({ experiences } : IExperiencesTimelineProps) => {
    const dateConfig = { addSuffix: true, locale: ptBR }
    return (
        <div className="flex flex-col gap-2">
            {
                experiences.map(exp => {
                    const sinceFormatted = format(new Date(exp.since), 'MMM yyyy', dateConfig)
                    const untilFormatted = exp.until ? format(new Date(exp.until), 'MMM yyyy', dateConfig) : 'atual'
                    const timeHouse = formatDistance(exp.until ? new Date(exp.until) : new Date(), new Date(exp.since), dateConfig)
                    return (
                        <div className="grid grid-cols-[42px,1fr] gap-5">
                            <div className="flex flex-col items-center gap-2">
                            <div className="grid place-items-center">
                                {/* <FaBriefcase /> */}
                                <Image 
                                    width={40}
                                    height={40}
                                    unoptimized
                                    src={exp.companyLogo.url}
                                    alt={`Logo da companhia ${exp.companyName}`}
                                    className="bg-cover w-full h-full"
                                />
                            </div>
                            <Divider direction="vertical"/>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                <div className="mb-2">
                                    <a href={exp.companySite} target="_blank" className="text-sky-500 hover:text-sky-600 flex gap-2 items-center"><FaBriefcase />{exp.companyName}</a>
                                    <h4>{ exp.role }</h4>
                                    <span className="text-gray-400 text-xs">{ `${sinceFormatted} • ${untilFormatted} • ${timeHouse}` }</span>
                                </div>
                                <div className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: exp.activitiesDescription.html }}></div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <h6 className="text-sm">Competências</h6>
                                    <div className="flex gap-3 flex-wrap">
                                        {
                                            exp.technologies.map(tech => (
                                                <Badge label={tech.name} key={`${tech.name}-tech-${tech.experienceTime}`}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}