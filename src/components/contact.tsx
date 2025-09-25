"use client";

import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useAnimation(0.2);

  return (
    <section id="contact" ref={sectionRef} className="bg-card/30 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Work With Me
            <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
          <p className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            Fill this form and I’ll get back to you personally.
          </p>
        </div>

        <div className={cn("glassmorphism max-w-4xl mx-auto rounded-lg p-2 transition-all duration-700 delay-300 hover:shadow-2xl hover:shadow-primary/20", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdf_AbC_XYZ/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-md"
                >
                Loading…
              </iframe>
            </div>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
            Note: Please replace the `src` in the iframe with your own Google Form embed link.
        </p>
      </div>
    </section>
  );
};

export default Contact;
