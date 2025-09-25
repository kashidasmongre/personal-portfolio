"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [state, formAction] = useActionState(submitContactForm, null);
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useAnimation(0.2);

  useEffect(() => {
    if (!state) return;

    if (state.type === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      reset();
    } else if (state.type === "error") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast, reset]);

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
                {...register("name")}
                placeholder="Your Name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell me about your project..."
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;