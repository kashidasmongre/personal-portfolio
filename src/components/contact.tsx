"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Mail, href: 'mailto:example@example.com', name: 'Email' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");
    
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <Button 
      ref={buttonRef} 
      type="submit" 
      aria-disabled={pending} 
      disabled={pending} 
      className="w-full relative overflow-hidden" 
      size="lg"
      onClick={handleClick}
    >
      {pending ? "Sending..." : "Submit Message"}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 600ms linear;
          background-color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </Button>
  );
}

const Contact = () => {
  const initialState = { message: "", errors: {}, type: "" };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const { ref: sectionRef, isVisible } = useAnimation(0.2);


  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.type === 'error') {
       const errorMsg = state.errors?.name || state.errors?.email || state.errors?.message || state.message;
       toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: Array.isArray(errorMsg) ? errorMsg.join(', ') : 'Please check the form for errors.',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" ref={sectionRef} className="bg-card/30 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Get In Touch
            <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
          <p className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            Have a project in mind or want to connect? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <form ref={formRef} action={dispatch} className={cn("space-y-6 lg:col-span-2 transition-all duration-700 delay-300", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}>
            <div>
              <Input name="name" placeholder="Name" className="bg-background/50 focus:border-primary focus:ring-primary" />
              {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Input name="email" type="email" placeholder="Email" className="bg-background/50 focus:border-primary focus:ring-primary" />
              {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Textarea name="message" placeholder="Message" rows={5} className="bg-background/50 focus:border-primary focus:ring-primary" />
              {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>

          <div className={cn("space-y-6 transition-all duration-700 delay-500", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
            <h3 className="text-xl font-bold">Connect on Socials</h3>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors group">
                  <social.icon className="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
