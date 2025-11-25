import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ChatbotBubble from '../components/ChatbotBubble'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">What people say</h2>
          <Testimonials />
        </div>
      </section>
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
      <Footer />
      <ChatbotBubble />
    </main>
  )
}
