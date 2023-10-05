import { contactSchema } from "@utils/models/ContactDTO";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    try {
        const body = await request.json()
        const { name, email, message } = contactSchema.parse(body)
        const contactMessage = {
            embeds: [
                {
                  type: 'rich',
                  title: 'Mensagem de contato de possível interessado',
                  description: 'Dados do interessado',
                  color: 0x38bdf8,
                  fields: [
                    {
                      name: 'Nome',
                      value: name,
                      inline: true
                    },
                    {
                      name: 'Email',
                      value: email,
                      inline: true
                    },
                    {
                      name: 'Mensagem',
                      value: message
                    }
                  ]
                }
            ]
        }
        console.log(JSON.stringify(contactMessage))
        await fetch(process.env.DISCORD_WEBHOOK!, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactMessage),
          })
          return NextResponse.json({
            message: 'Muito obrigado! Sua mensagem foi enviada com sucesso.'
          })
    } catch (error) {
        return NextResponse.error()
    }
}