'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({ email: z.string().email('Enter a valid email') })

type Form = z.infer<typeof schema>

export default function NewsletterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: Form) => {
    alert('Thanks! We will keep you updated — this is a frontend demo.')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 max-w-md relative">
      <input {...register('email')} className="flex-1 border rounded px-4 py-2" placeholder="Your email" />
      <button type="submit" disabled={isSubmitting} className="bg-sky-600 text-white px-4 py-2 rounded">Notify me</button>
      {errors.email && <p className="text-sm text-red-600 absolute mt-12">{errors.email.message}</p>}
    </form>
  )
}
