import characterIcon from "../../../../assets/icons/character.svg";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="contact-us-title">Got an idea? Let&apos;s talk...</div>
      <div className="flex gap-10">
        <img
          src={characterIcon}
          alt="about icon"
          className="w-50 h-50 sm:block hidden"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
