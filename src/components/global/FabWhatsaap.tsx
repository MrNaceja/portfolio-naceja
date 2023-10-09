import Link from "next/link"
import { TbBrandWhatsapp } from "react-icons/tb"

export const FabWhatsapp = () => {
    return (
        <Link
            className="bg-emerald-600 p-2 fixed right-5 bottom-5 z-20 rounded-full animate-bounce" 
            href={process.env.WHATSAPP_CHAT_LINK!}
            target="_blank"
        ><TbBrandWhatsapp size={30}/></Link>
    )
}