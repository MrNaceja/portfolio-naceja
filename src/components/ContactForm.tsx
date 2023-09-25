'use client'

import { useForm } from "react-hook-form"
import { Button } from "@components/Button"
import { SectionDescriptive } from "@components/SectionDescriptive"
import { RiMailSendLine } from 'react-icons/ri'
import { TContact, contactSchema } from "@utils/models/ContactDTO"

import { zodResolver } from '@hookform/resolvers/zod'

export const ContactForm = () => {

    const { handleSubmit, register } = useForm<TContact>({
        resolver: zodResolver(contactSchema)
    })

    const handleContactMe = (formData : TContact) => {

    }

    return (
        <SectionDescriptive title="Gstou do meu trabalho?" subtitle="contato">
            <div className="flex flex-col items-center justify-center gap-3 mx-auto w-full max-w-md">
                <h1 className="text-2xl">Entre em contato</h1>
                <form className="flex flex-col gap-4 items-center w-full" onSubmit={handleSubmit(handleContactMe)}>
                    <input 
                        placeholder="Seu lindo nome"
                        type="text"
                        className={`
                            w-full bg-sky-950/75 text-gray-300 p-2
                            placeholder:text-sky-600 
                            rounded-md focus:outline-none focus:ring-2 ring-sky-500
                        `}
                        {...register('name')}
                    />
                    <input 
                        placeholder="Seu email"
                        type="email"
                        className={`
                            w-full bg-sky-950/75 text-gray-300 p-2
                            placeholder:text-sky-600 
                            rounded-md focus:outline-none focus:ring-2 ring-sky-500
                        `}
                        {...register('email')}
                    />
                    <textarea 
                        placeholder="Nossa primeira conversa"
                        maxLength={500}
                        className={`
                            resize-none
                            h-36
                            w-full bg-sky-950/75 text-gray-300 p-2
                            placeholder:text-sky-600 
                            rounded-md focus:outline-none focus:ring-2 ring-sky-500
                        `}
                        {...register('message')}
                    />
                    <Button className="w-full shadow-button mt-4">
                        Enviar mensagem
                        <RiMailSendLine />
                    </Button>
                </form>
            </div>
        </SectionDescriptive>
    )
}