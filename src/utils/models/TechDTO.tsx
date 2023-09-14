import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandPhp } from "react-icons/tb"

export type TechDTO = {
    name: string,
    experienceTime: string,
    icon:  React.ReactNode,
}

export const TECHS : TechDTO[] = [
    {
        name: 'PHP',
        experienceTime: '2 anos',
        icon: <TbBrandPhp />
    },
    {
        name: 'Javascript',
        experienceTime: '4 anos',
        icon: <TbBrandJavascript />
    },
    {
        name: 'HTML',
        experienceTime: '4 anos',
        icon: <TbBrandHtml5 />
    },
    {
        name: 'CSS',
        experienceTime: '4 anos',
        icon: <TbBrandCss3 />
    },
    {
        name: 'SQL',
        experienceTime: '2 anos',
        icon: <TbBrandMysql />
    },
]