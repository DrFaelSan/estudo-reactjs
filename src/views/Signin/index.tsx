import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from 'zod'
import { loginFormSchema } from "@hooks/useSignin";
import { Form } from "@components/Form";
import { Link } from "react-router-dom";


type loginFormData = z.infer<typeof loginFormSchema>

export default function Signin() {
  const loginForm = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  })
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = loginForm

  const handleForSubmit = (data: loginFormData) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return(
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
      <div className="bg-white w-96 h-[35rem] rounded-xl flex flex-col justify-center items-center p-2">
        <h1 className="font-semibold text-3xl my-2">Login</h1>
        <FormProvider {...loginForm}>
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
            </Form.Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 rounded bg-emerald-500 font-semibold text-white hover:bg-emerald-600"
              >
              Entrar
            </button>
          </form>
        </FormProvider>
        <Link to="/cadastro" 
        className="h-8 rounded bg-emerald-300 font-semibold text-white hover:bg-emerald-400 text-center align-middle w-1/3" 
        >Cadastrar</Link> 
      </div>
    </div>
  )
}
