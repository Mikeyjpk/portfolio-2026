import aboutIcon from "../../../../assets/icons/alien-ship-svg.svg";
import {
  AnimatedAccordion,
  AnimatedAccordionItem,
  AnimatedAccordionTrigger,
  AnimatedAccordionContent,
} from "../../../../components/ui/animated-accordion";

const AboutSection = () => {
  return (
    <section className="flex justify-center items-center gap-10 py-20">
      <img
        src={aboutIcon}
        alt="about icon"
        className="w-50 h-50 sm:block hidden"
      />

      <div className="w-full max-w-lg">
        <AnimatedAccordion type="single">
          <AnimatedAccordionItem value="item-1" accentColor="border-l-accent">
            <AnimatedAccordionTrigger>Who I am</AnimatedAccordionTrigger>
            <AnimatedAccordionContent>
              <p>
                I'm Mikey, I love solving problems, learning new things and
                bringing ideas to life through code.
              </p>
              <p>
                My path hasn't been linear, I've had a mix of experiences that
                have shaped how I think, create, and collaborate today.
              </p>
              <p>
                I care about building things that feel clean, intuitive, and
                genuinely helpful. Whether it's an interface, workflow, or tool,
                I want it to feel thoughtful and enjoyable to use.
              </p>
            </AnimatedAccordionContent>
          </AnimatedAccordionItem>
          <AnimatedAccordionItem value="item-2" accentColor="border-l-red-500">
            <AnimatedAccordionTrigger>Where I've been</AnimatedAccordionTrigger>
            <AnimatedAccordionContent>
              <p>Timeline goes here</p>
            </AnimatedAccordionContent>
          </AnimatedAccordionItem>
          <AnimatedAccordionItem value="item-3" accentColor="border-l-blue-500">
            <AnimatedAccordionTrigger>What I do</AnimatedAccordionTrigger>
            <AnimatedAccordionContent>
              <p>More accordions go here</p>
            </AnimatedAccordionContent>
          </AnimatedAccordionItem>
        </AnimatedAccordion>
      </div>
    </section>
  );
};

export default AboutSection;
