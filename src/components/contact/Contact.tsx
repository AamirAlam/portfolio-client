import { FadeIn } from '../animations/FadeIn';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <ContactInfo />
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}