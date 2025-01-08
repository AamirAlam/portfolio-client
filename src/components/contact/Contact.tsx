import { FadeIn } from "../animations/FadeIn";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Get In Touch
            </h2>
            <ContactInfo />
            {/* <ContactForm /> */}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
