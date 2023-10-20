'use client'

import { SectionDescriptive } from "@components/global/SectionDescriptive"
import Link from "next/link"
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from "framer-motion"

export const ProjectsIntroSection = () => {
    return (
        <SectionDescriptive 
            title="Meus projetos" 
            subtitle="projetos"
            full
            className={`
                h-[500px] items-center justify-center px-16 bg-gradient-to-b [&>header]:items-center relativefrom-sky-500/5 from-10%
                before:absolute before:bg-sky-500/25 before:rounded-full before:blur-3xl before:-z-10
                before:-top-[90%] before:h-full before:w-full
            `}
        >
         <motion.p 
            initial={{ opacity:0, y: 50 }}
            exit={{ opacity:0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="text-gray-400 text-md max-w-2xl text-center"
        >
            Aqui serão apresentados alguns dos meus projetos pessoais e profissionais. Fique a vontade para visualiza-los e descobrir um pouco mais sobre mim e minhas competências. Expero que goste ❤️.
         </motion.p>
         <Link href='/' className={`
            flex gap-2 items-center border border-transparent p-3 rounded-md
            hover:gap-3 transition-all
         `}>
            <HiArrowNarrowLeft />
            Voltar ao inicio
         </Link>
        </SectionDescriptive>
    )
}