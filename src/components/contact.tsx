
"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from 'react-dom';

import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

const initialState: {
  type: string;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
} = {
  type: '',
  message: '',
  errors: null,
};


const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Sending..." : "Send Message"}
        </Button>
    )
}

const Contact = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useAnimation(0.2);

  useEffect(() => {
    if (!state || !state.type) return;

    if (state.type === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Simple form reset would require state management, which is complex with server actions.
      // The form will clear on page reload. For a better UX, we could use a client-side form library.
    } else if (state.type === "error") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message || "Please correct the errors below.",
      });
    }
  }, [state, toast]);
  
  const allErrors = state?.errors;

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
            Fill this form and I’ll get back to you personally.
          </p>
        </div>

        <div
          className={cn(
            "glassmorphism max-w-2xl mx-auto rounded-lg p-8 transition-all duration-700 delay-300 hover:shadow-2xl hover:shadow-primary/20",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                className={allErrors?.name ? "border-destructive" : ""}
              />
              {allErrors?.name && (
                <p className="text-sm text-destructive">{allErrors.name[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className={allErrors?.email ? "border-destructive" : ""}
              />
              {allErrors?.email && (
                <p className="text-sm text-destructive">{allErrors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                className={allErrors?.message ? "border-destructive" : ""}
              />
              {allErrors?.message && (
                <p className="text-sm text-destructive">{allErrors.message[0]}</p>
              )}
            </div>
            <SubmitButton />
          </form>
           <div className="relative my-6 flex items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-muted-foreground text-sm">OR</span>
            <div className="flex-grow border-t border-border"></div>
          </div>
           <Button variant="outline" className="w-full group" asChild>
            <a href="mailto:kashidasmongre.x@gmail.com">
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Email Me Directly
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
