import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
    return (
        <footer className="flex w-full h-14 text-gray-500 items-center justify-center py-2 text-sm gap-1 animate-pulse">
          Made with <IoMdHeart className="text-sky-500" size={13}/>
          by 
          <strong className="font-semibold">{`Eduardo "Naceja" Toriani`}</strong>
        </footer>
    )
}