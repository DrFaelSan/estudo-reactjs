import { FormProvider, useForm } from "react-hook-form";
import { useSignup , registerFormSchema } from "@hooks/useSignup";
import { Form } from "@components/Form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from "react-router-dom";

type registerFormData = z.infer<typeof registerFormSchema>

export default function Signup() {
  const { isPassWordInputed, isPasswordStrong } = useSignup();  
  const registerForm = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = registerForm

  const userPassword = watch('senha');
  
  const handleForSubmit = (data: registerFormData) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
      <div className="bg-white w-96 h-[35rem] rounded-xl flex flex-col justify-center items-center p-2">
        <h1 className="font-semibold text-3xl my-2">Cadastro</h1>
        <FormProvider {...registerForm}>
          <form onSubmit={handleSubmit(handleForSubmit)} className="flex w-full flex-col gap-4 p-2">
            <Form.Field>
              <Form.Label htmlFor='email'>
                Digite seu melhor e-mail
              </Form.Label>
              <Form.Input type='email' name='email' />
              <Form.ErrorMessage field='email'/>
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="senha">Senha</Form.Label>
              <Form.Input type="password" name="senha" />
              <Form.ErrorMessage field="senha" />
              {isPassWordInputed(userPassword) &&
                (isPasswordStrong(userPassword) ? (
                  <span className="text-xs text-emerald-600">Senha forte</span>
                  ) : (
                    <span className="text-xs text-red-500">Senha fraca</span>
                    ))}
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="confirmSenha">Confirmar senha</Form.Label>
              <Form.Input type="password" name="confirmSenha" />
              <Form.ErrorMessage field="confirmSenha" />
            </Form.Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 rounded bg-emerald-500 font-semibold text-white hover:bg-emerald-600"
              >
              Cadastrar
            </button>
          </form>
        </FormProvider>
        <Link to="/" 
        className="h-8 rounded bg-emerald-300 font-semibold text-white hover:bg-emerald-400 text-center align-middle w-1/3" 
        >Voltar</Link> 
      </div>
    </div>
  )
}
