import Image from "next/image"
import { Badge } from "@components/Badge"
import { Button } from "@components/Button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandWhatsapp, TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb'
import { TECHS } from "@utils/models/TechDTO"

const CONTACTS = [
    {
        link: '',
        icon: <TbBrandGithub />
    },
    {
        link: '',
        icon: <TbBrandWhatsapp />
    },
    {
        link: '',
        icon: <TbBrandFacebook />
    },
    {
        link: '',
        icon: <TbBrandInstagram />
    },
    {
        link: '',
        icon: <TbBrandLinkedin />
    },
]

export const HeroSection = () => {
    return (
        <section className="lg:h-screen bg-cover bg-no-repeat bg-center bg-hero-image bg-sky-500 bg-blend-multiply w-full flex flex-col justify-end py-32">
            <main className="container flex justify-between flex-col-reverse md:flex-row items-center gap-3">
                <div className="flex flex-col w-full lg:w-2/4 gap-1 text-center sm:text-left">
                    <h2 className="text-sky-500 text-2xl">Olá, me chamo</h2>
                    <h1 className="text-3xl mb-4">Eduardo Toriani</h1>
                    <p>Meu nome é <b>Eduardo Toriani</b>, mas pode me chamar de <b>Naceja</b>. Tenho 21 anos, sou profissional de Ti atuando atualmento como programador PHP e sou apaixonado por design.</p>
                    <div className="flex items-center gap-2 mt-2">
                        {
                            TECHS.map((tech, index) => (
                                <Badge label={tech.name} key={index} />
                            ))
                        }
                    </div>
                   <div className="flex mt-10 gap-5 sm:items-center flex-col sm:flex-row">
                        <Button className="shadow-button">
                            Meus contatos
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="flex flex-row gap-2 justify-center sm:justify-start">
                            {
                                CONTACTS.map(({link, icon}, index) => (
                                    <a 
                                        className="text-white/70 hover:text-white text-2xl"
                                        key={index} 
                                        href={link}
                                        target="_blank"
                                    >{icon}</a>
                                ))
                            }
                        </div>
                   </div>
                </div>
                <Image
                    src='/images/avatar_naceja.png'
                    alt="Imagem de perfil do Naceja"
                    width={300}
                    height={300}
                    className="rounded-md bg-sky-400 object-cover shadow-2xl"
                />
            </main>
        </section>
    )
}