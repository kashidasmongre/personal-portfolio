"use client";

import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
            Have a project in mind or want to connect? Reach out to me directly.
          </p>
        </div>

        <div
          className={cn(
            "glassmorphism max-w-2xl mx-auto rounded-lg p-8 text-center transition-all duration-700 delay-300 hover:shadow-2xl hover:shadow-primary/20",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button asChild size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600">
                <Link href="https://wa.me/91830505008" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
