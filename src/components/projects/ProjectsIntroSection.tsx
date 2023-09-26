import { SectionDescriptive } from "@components/global/SectionDescriptive"
import Link from "next/link"
import { HiArrowNarrowLeft } from 'react-icons/hi'
export const ProjectsIntroSection = () => {
    return (
        <SectionDescriptive 
            title="Meus projetos" 
            subtitle="projetos"
            full
            className="h-[500px] items-center justify-center px-16 bg-gradient-to-b from-sky-500/25 from-10%"
        >
         <p className="text-gray-400 text-md max-w-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis expedita, repudiandae, sunt quo ad veritatis tempora nulla dolor eos eum natus! Et maxime voluptatem obcaecati eius inventore minus corrupti ad.</p>
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