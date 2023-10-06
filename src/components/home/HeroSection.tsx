'use client'

import Image from "next/image"
import { Badge } from "@components/global/Badge"
import { Button } from "@components/global/Button"
import { BsBoxArrowDown } from 'react-icons/bs'
import { TechDTO } from "@utils/models/TechDTO"

import { SocialMediaDTO } from "@utils/models/SocialMediaDTO"
import { IconSvg } from "@components/global/IconsSvg"

import { motion } from 'framer-motion'

export type HeroSectionDTO = {
    introduction: string,
    socialMedias: SocialMediaDTO[],
    principalTechs: TechDTO[],
    profilePhoto: string
}
interface IHeroSectionProps {
    data: HeroSectionDTO
}
export const HeroSection = ({ data } : IHeroSectionProps) => {
    const { introduction, socialMedias, principalTechs, profilePhoto } = data

    const handleGoContact = () => {
        const ContactSectionDOM = document.getElementById('contact')
        ContactSectionDOM?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="lg:h-screen bg-cover bg-no-repeat bg-center bg-hero-image bg-sky-500 bg-blend-multiply w-full flex flex-col py-32 justify-end">
            <main className="container flex justify-between flex-col-reverse md:flex-row items-center gap-3 h-full">
                <motion.div 
                    initial={{ opacity: 0, x: '-100%' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.5}}
                    className="flex flex-col w-full lg:w-2/4 gap-1 text-center sm:text-left"
                >
                    <h2 className="text-sky-500 text-2xl">Olá, me chamo</h2>
                    <h1 className="text-3xl mb-4">Eduardo Toriani</h1>
                    <div dangerouslySetInnerHTML={{ __html: introduction }}></div>
                    <div className="flex items-center gap-2 mt-2">
                        {
                            principalTechs.map((tech, index) => (
                                <Badge 
                                    initial={{ opacity: 0, scale:0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    label={tech.name} key={index}
                                />
                            ))
                        }
                    </div>
                   <div className="flex mt-10 gap-5 sm:items-center flex-col sm:flex-row">
                        <Button className="shadow-button" onClick={handleGoContact}>
                            Entre em contato
                            <BsBoxArrowDown size={18} />
                        </Button>
                        <div className="flex flex-row gap-2 justify-center sm:justify-start">
                            {
                                socialMedias.map(({iconSvg, url}, index) => (
                                    <a 
                                        className="text-white/70 hover:text-white text-2xl"
                                        key={index} 
                                        href={url}
                                        target="_blank"
                                    ><IconSvg icon={iconSvg} /></a>
                                ))
                            }
                        </div>
                   </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="origin-top"
                >
                    <Image
                        src={profilePhoto}
                        alt="Imagem de perfil do Naceja"
                        width={300}
                        height={300}
                        unoptimized
                        className="rounded-md object-cover md:-translate-y-16 aspect-auto"
                    />
                </motion.div>
            </main>
        </section>
    )
}