
"use client";

import { Button } from "@/components/ui/button";
import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useAnimation(0.2);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-card/30 bg-gradient-to-br from-background via-card/50 to-background"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Work With Me
            <span
              className={cn(
                "absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300",
                isVisible ? "scale-x-100" : "scale-x-0"
              )}
              style={{ transformOrigin: "left" }}
            />
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            Have a project in mind or want to connect? Reach out via email or find me on social media.
          </p>
        </div>

        <div
          className={cn(
            "glassmorphism max-w-2xl mx-auto rounded-lg p-8 text-center transition-all duration-700 delay-300 hover:shadow-2xl hover:shadow-primary/20",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button variant="default" size="lg" className="group w-full max-w-xs mx-auto" asChild>
            <a href="mailto:kashidasmongre.x@gmail.com">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Email Me Directly
            </a>
          </Button>

            <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Or connect with me on:</p>
                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/kashi-das-mongre-9495b121a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/kashidasmongre" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://x.com/Kashi_Mongre" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
