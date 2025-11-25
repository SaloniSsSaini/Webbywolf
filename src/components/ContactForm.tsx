'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ContactSchema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) })

type Form = z.infer<typeof ContactSchema>

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(ContactSchema) })

  const onSubmit = async (data: Form) => {
    alert('Message sent — frontend demo')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 bg-white p-6 rounded-lg shadow">
      <input {...register('name')} placeholder="Your name" className="border px-3 py-2 rounded" />
      {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" className="border px-3 py-2 rounded" />
      {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}

      <textarea {...register('message')} placeholder="Your message" className="border px-3 py-2 rounded h-36" />
      {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}

      <button type="submit" disabled={isSubmitting} className="mt-2 px-4 py-2 bg-sky-600 text-white rounded">Send Message</button>
    </form>
  )
}
