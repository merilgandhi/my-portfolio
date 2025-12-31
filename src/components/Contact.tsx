import { useState } from "react";
import { Github, Linkedin, Mail, Send, Sparkles, ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      username: "@merilgandhi",
      href: "https://github.com/merilgandhi",
      icon: Github,
    },
    {
      name: "LinkedIn",
      username: "@merilgandhi",
      href: "https://www.linkedin.com/in/merilgandhi",
      icon: Linkedin,
    },
    {
      name: "Email",
      username: "meril.gandhi03@gmail.com",
      href: "mailto:meril.gandhi03@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-secondary/40 rounded-br-lg" />
              
              {/* Name field */}
              <div className="relative group">
                <label 
                  htmlFor="name" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'name' || formData.name 
                      ? '-top-2.5 text-xs text-primary bg-card px-2' 
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  {'// '}Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="h-14 bg-background/50 border-primary/20 text-foreground rounded-xl 
                    focus:border-primary/50 focus:bg-background/80 transition-all duration-300
                    hover:border-primary/30 placeholder:text-transparent"
                />
              </div>

              {/* Email field */}
              <div className="relative group">
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'email' || formData.email 
                      ? '-top-2.5 text-xs text-primary bg-card px-2' 
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  {'// '}Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="h-14 bg-background/50 border-primary/20 text-foreground rounded-xl 
                    focus:border-primary/50 focus:bg-background/80 transition-all duration-300
                    hover:border-primary/30 placeholder:text-transparent"
                />
              </div>

              {/* Message field */}
              <div className="relative group">
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'message' || formData.message 
                      ? '-top-2.5 text-xs text-primary bg-card px-2' 
                      : 'top-4 text-muted-foreground'
                  }`}
                >
                  {'// '}Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  required
                  className="pt-5 bg-background/50 border-primary/20 text-foreground rounded-xl resize-none
                    focus:border-primary/50 focus:bg-background/80 transition-all duration-300
                    hover:border-primary/30 placeholder:text-transparent"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium
                  transition-all duration-300 neon-glow hover:scale-[1.02]
                  disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Social links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-muted-foreground text-sm mb-6">Or reach out directly through:</p>
            
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-xl glass-card
                  hover-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-xl glass neon-border flex items-center justify-center
                  group-hover:bg-primary/20 transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">{link.name}</p>
                  <p className="text-muted-foreground text-sm truncate">{link.username}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                  transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
