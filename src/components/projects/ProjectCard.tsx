import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className={`
            rounded-lg h-[430px] overflow-hidden bg-slate-700 border border-transparent hover:border-sky-500 
            group transition-all duration-200 cursor-pointer flex flex-col opacity-50 hover:opacity-100
            hover:shadow-md scale-95 hover:scale-100 mask-gradient-r
        `}>
            <div className="w-full h-52 overflow-hidden">
                <Image 
                    width={200}
                    height={350}
                    alt="Imagem projeto e-conomize"
                    src='/images/project_economize.png'
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-150 transition-all duration-300"
                />
            </div>
            <div className="p-5 gap-3 flex flex-col" /** verificar possibilidade de uma cor dinamica aqui (verde economize)*/>
                <h1 className="text-md group-hover:text-sky-500 font-semibold uppercase">E-conomize</h1>
                <p className="text-sm text-gray-400 font-medium line-clamp-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quisquam ratione sequi officia voluptatibus numquam qui totam accusantium deleniti necessitatibus corporis dolore blanditiis hic, quis soluta culpa voluptatem molestias ducimus!</p>
            </div>
        </div>
    )
}