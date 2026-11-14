import Wizard from "@/components/illustrations/Wizard";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <section id="contact" className="section bg-white">
    <div className="contact-row mx-auto flex max-w-[1040px] flex-wrap items-center gap-16">
      <div className="flex flex-[1_1_300px] flex-col gap-8">
        <h2 className="h-pixel text-center">
          Got an idea?
          <br />
          <span className="text-orange">Let’s talk.</span>
        </h2>
        <Wizard />
      </div>
      <ContactForm className="flex-[1_1_380px]" />
    </div>
  </section>
);

export default ContactSection;
