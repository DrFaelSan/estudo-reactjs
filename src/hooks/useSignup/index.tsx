import { z } from "zod"

export const registerFormSchema = z
.object({
  nome: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((palavra) => {
          return palavra[0].toLocaleUpperCase().concat(palavra.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  senha: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa de no minimo 6 caracteres'),
  confirmSenha: z.string().nonempty('A confirmação de senha é obrigatória'),
})
.refine((data) => data.senha === data.confirmSenha, {
  message: 'Senhas não são iguais',
  path: ['confirmSenha'],
})

export function useSignup() {
function isPasswordStrong(userPassword: string) : boolean {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
    userPassword,
  )
}

function isPassWordInputed(userPassword: string) : boolean {
  return /^.{6,}$/.test(userPassword)
}

  return {
    isPasswordStrong,
    isPassWordInputed
  };
}