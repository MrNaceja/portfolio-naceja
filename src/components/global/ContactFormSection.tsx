'use client'

import { useForm } from "react-hook-form"
import { Button } from "@components/global/Button"
import { SectionDescriptive } from "@components/global/SectionDescriptive"
import { RiMailSendLine } from 'react-icons/ri'
import { TContact, contactSchema } from "@utils/models/ContactDTO"

import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from "tailwind-merge"
import toast from "react-hot-toast"

export const ContactFormSection = () => {

    const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<TContact>({
        resolver: zodResolver(contactSchema)
    })

    const handleContactMe = async (formData : TContact) => {
        try {
            // const res = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // }).then(res => res.json())
            toast.error('Ops, problemas para enviar a mensagem!')
            toast.success('hhahahha')
            // toast.success(res.message)
        } catch {
            toast.error('Ops, problemas para enviar a mensagem!')
        }
        finally {
            reset()
        }
    }

    return (
        <SectionDescriptive title="Gostou do meu trabalho?" subtitle="contato" id="contact">
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
                    <Button className={twMerge(
                        'w-full shadow-button mt-4 disabled:opacity-50',
                        isSubmitting && 'cursor-not-allowed'
                    )} disabled={isSubmitting}>
                        Enviar mensagem
                        <RiMailSendLine />
                    </Button>
                </form>
            </div>
        </SectionDescriptive>
    )
}