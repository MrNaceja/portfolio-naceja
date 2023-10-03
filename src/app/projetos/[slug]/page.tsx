import { Badge } from "@components/global/Badge";
import { Button } from "@components/global/Button";
import { SectionDescriptive } from "@components/global/SectionDescriptive";
import { TECHS } from "@utils/models/TechDTO";
import { TbBrandGithub } from 'react-icons/tb'
import { HiOutlineStatusOnline, HiArrowNarrowLeft } from 'react-icons/hi'
import Link from "next/link";
import { ProjectDemosSection } from "@components/projects/ProjectDemosSection";

export default function ProjectPage() {
    return (
        <>
            <SectionDescriptive 
                title="E-conomize" 
                subtitle="projeto"
                full
                className="h-[600px] md:h-[500px] items-center justify-end px-16 relative"
            >
                <figure 
                    className="absolute inset-0 z-[-1] mask-gradient-b"
                    style={{
                        background: 'url(/images/hero_bg.png) no-repeat center/cover, url(/images/project_economize.png) no-repeat center/cover',
                    }}
                />
                <p className="text-gray-400 text-sm max-w-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem repudiandae distinctio minima esse obcaecati eos necessitatibus at, veritatis praesentium consequatur illum inventore nulla suscipit facere repellat tempore dolore ipsum.</p>
                <div className="flex flex-wrap w-full max-w-[500px] gap-2 items-center justify-center">
                    { TECHS.map((tech, index) => <Badge label={tech.name} key={index}/>) }
                </div>
                <div className="flex justify-between gap-5">
                    <a href="www.github.com" target="_blank">
                        <Button>
                            <TbBrandGithub />
                            Repositório
                        </Button>
                    </a>
                    <a href="www.github.com" target="_blank">
                        <Button>
                            <HiOutlineStatusOnline />
                            Demonstração
                        </Button>
                    </a>
                </div>
                <Link href='/projetos' className={`
                    flex gap-2 items-center border border-transparent p-3 rounded-md
                    hover:gap-3 transition-all
                `}>
                    <HiArrowNarrowLeft />
                    Voltar aos projetos
                </Link>
            </SectionDescriptive>
            <ProjectDemosSection />
        </>
    )
}