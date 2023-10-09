import Image from "next/image"
import { FaBriefcase } from 'react-icons/fa'
import { Divider } from "@components/global/Divider"
import { Badge } from "@components/global/Badge"
import { ExperienceWorkDTO } from "@utils/models/ExperienceWorkDTO"
import { format, formatDistance } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import { motion } from "framer-motion"

interface IExperiencesTimelineProps {
    experiences: ExperienceWorkDTO[]
}
export const ExperiencesTimeline = ({ experiences } : IExperiencesTimelineProps) => {
    const dateConfig = { addSuffix: true, locale: ptBR }
    return (
        <div className="flex flex-col gap-2">
            {
                experiences.map((exp, index) => {
                    const sinceFormatted = format(new Date(exp.since), 'MMM yyyy', dateConfig)
                    const untilFormatted = exp.until ? format(new Date(exp.until), 'MMM yyyy', dateConfig) : 'atual'
                    const timeHouse      = formatDistance(exp.until ? new Date(exp.until) : new Date(), new Date(exp.since), dateConfig)
                    return (
                        <div className="grid grid-cols-[42px,1fr] gap-5" key={`${index}-${exp.companyName}`}>
                            <div className="flex flex-col items-center gap-2">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: .3 }}
                                    className="grid place-items-center"
                                >
                                    {/* <FaBriefcase /> */}
                                    <Image 
                                        width={40}
                                        height={40}
                                        unoptimized
                                        src={exp.companyLogo.url}
                                        alt={`Logo da companhia ${exp.companyName}`}
                                        className="bg-cover w-full h-full"
                                    />
                                </motion.div>
                                <Divider 
                                    initial={{ opacity: 0, height: 0 }}
                                    whileInView={{ opacity:1, height: '100%' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: .8, delay: .4 }}
                                    direction="vertical"
                                    className="origin-top"
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                exit={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: .6 }}
                            >
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
                                            exp.technologies.map((tech, index) => (
                                                <Badge 
                                                    initial={{ opacity:0, y:100 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity:0, y: 100 }}
                                                    transition={{ duration: .3, delay: 0.1 * index }}
                                                    label={tech.name} key={`${tech.name}-tech-${tech.experienceTime}`}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                })
            }
        </div>
    )
}