import { useCallback, useState, type CSSProperties } from "react";
import Wizard from "@/components/illustrations/Wizard";
import { SPELLS, nextSpell } from "@/components/illustrations/spells";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [spellIndex, setSpellIndex] = useState(0);
  const spell = SPELLS[spellIndex];

  // As the orb starts charging, pick the next spell. The orb, projectile and
  // burst take the new colour straight away; the heading waits for the
  // impact (see .spell-text).
  const handleCharge = useCallback(
    () => setSpellIndex((i) => nextSpell(i)),
    [],
  );

  return (
    <section
      id="contact"
      className="section bg-white"
      style={{ "--spell": spell.color } as CSSProperties}
    >
      <div className="contact-row mx-auto flex max-w-[1040px] flex-wrap items-center gap-16">
        <div className="flex flex-[1_1_300px] flex-col gap-8">
          <h2 className="h-pixel text-center">
            Got an idea?
            <br />
            <span className="spell-text">Let’s talk.</span>
          </h2>
          <Wizard spell={spell} onCharge={handleCharge} />
        </div>
        <ContactForm className="flex-[1_1_380px]" />
      </div>
    </section>
  );
};

export default ContactSection;
