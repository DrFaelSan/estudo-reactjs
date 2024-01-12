import { Form } from '@/components/Form'
import { loginFormSchema } from '@/hooks/useSignin'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'

const paramsFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  senha: z.string().nonempty('A senha é obrigatória'),
})


type paramsFormData = z.infer<typeof paramsFormSchema>


export default function ParametrosForm() {
  const loginForm = useForm<paramsFormData>({
    resolver: zodResolver(loginFormSchema),
  })
  
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[#868686] text-2xl font-semibold">Configurações de prazo da Autorregularização</h1>
      <hr />
      <FormProvider {...loginForm}>
          <form  className="flex w-full flex-row gap-4 p-2">
            <Form.Field>
              <Form.Label htmlFor='email'>
                Prazo para contribuinte se regularizar*
              </Form.Label>
              <Form.Input type='email' name='email' />
              <Form.Label >
                Dia(s) (úteis)
              </Form.Label>
              <Form.ErrorMessage field='email'/>
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="senha">
                Prazo a mais solicitado pelo contribuinte*
              </Form.Label>
              <Form.Input type="password" name="senha" />
              <Form.Label>
              Dia(s) (úteis)
              </Form.Label>
              <Form.ErrorMessage field="senha" />
            </Form.Field>
          </form>
        </FormProvider>
    </div>
  )
}
