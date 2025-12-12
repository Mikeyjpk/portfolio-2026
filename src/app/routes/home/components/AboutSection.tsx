import aboutIcon from "../../../../assets/icons/alien-ship-svg.svg";
import {
  AnimatedAccordion,
  AnimatedAccordionItem,
  AnimatedAccordionTrigger,
  AnimatedAccordionContent,
} from "../../../../components/ui/animated-accordion";
import Timeline from "./Timeline";

const AboutSection = () => {
  return (
    <section className="flex justify-center items-center gap-20">
      <img
        src={aboutIcon}
        alt="about icon"
        className="w-50 h-50 sm:block hidden"
      />
      <div className="w-full max-w-md">
        <AnimatedAccordion type="single">
          {/* who i am  */}
          <AnimatedAccordionItem value="item-1" accentColor="border-l-accent">
            <AnimatedAccordionTrigger>Who I am</AnimatedAccordionTrigger>
            <AnimatedAccordionContent>
              <div className="flex flex-col gap-3 text-body">
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
                  genuinely helpful. Whether it's an interface, workflow, or
                  tool, I want it to feel thoughtful and enjoyable to use.
                </p>
              </div>
            </AnimatedAccordionContent>
          </AnimatedAccordionItem>

          {/* where i've been */}
          <AnimatedAccordionItem value="item-2" accentColor="border-l-red-500">
            <AnimatedAccordionTrigger>Where I've been</AnimatedAccordionTrigger>
            <AnimatedAccordionContent>
              <Timeline />
            </AnimatedAccordionContent>
          </AnimatedAccordionItem>

          {/* what i do */}
          <AnimatedAccordionItem value="item-3" accentColor="">
            <AnimatedAccordionTrigger>What I do</AnimatedAccordionTrigger>
            <AnimatedAccordionContent>
              <div className="space-y-4">
                <p className="text-body">
                  I focus on creating digital experiences that are both
                  functional and delightful.
                </p>

                {/* Nested Accordion */}
                <AnimatedAccordion type="multiple" className="mr-3">
                  <AnimatedAccordionItem value="frontend" accentColor="">
                    <AnimatedAccordionTrigger>
                      Frontend Development
                    </AnimatedAccordionTrigger>
                    <AnimatedAccordionContent>
                      <p className="text-body">
                        Building responsive, accessible web applications with
                        React, TypeScript, and modern CSS frameworks.
                      </p>
                    </AnimatedAccordionContent>
                  </AnimatedAccordionItem>

                  <AnimatedAccordionItem value="backend" accentColor="">
                    <AnimatedAccordionTrigger>
                      Backend Development
                    </AnimatedAccordionTrigger>
                    <AnimatedAccordionContent>
                      <p className="text-body">
                        Creating robust APIs and server-side solutions with
                        Node.js, databases, and cloud services.
                      </p>
                    </AnimatedAccordionContent>
                  </AnimatedAccordionItem>

                  <AnimatedAccordionItem value="design" accentColor="">
                    <AnimatedAccordionTrigger>
                      UI/UX Design
                    </AnimatedAccordionTrigger>
                    <AnimatedAccordionContent>
                      <p className="text-body">
                        Designing intuitive interfaces and user experiences that
                        prioritize usability and aesthetics.
                      </p>
                    </AnimatedAccordionContent>
                  </AnimatedAccordionItem>

                  <AnimatedAccordionItem value="niche" accentColor="">
                    <AnimatedAccordionTrigger>
                      My niche
                    </AnimatedAccordionTrigger>
                    <AnimatedAccordionContent>
                      <p className="text-body">
                        Designing intuitive interfaces and user experiences that
                        prioritize usability and aesthetics.
                      </p>
                    </AnimatedAccordionContent>
                  </AnimatedAccordionItem>
                </AnimatedAccordion>
              </div>
            </AnimatedAccordionContent>
          </AnimatedAccordionItem>
        </AnimatedAccordion>
      </div>
    </section>
  );
};

export default AboutSection;
