import { z } from "zod"

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  senha: z.string().nonempty('A senha é obrigatória'),
})
