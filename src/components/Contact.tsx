import { useState } from "react";
import { Github, Linkedin, Mail, Send, Sparkles, ArrowUpRight } from "lucide-react";
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
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/70">Let's collaborate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative group">
                <label 
                  htmlFor="name" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name 
                      ? '-top-2.5 text-xs text-white/70 bg-background px-2' 
                      : 'top-4 text-white/40'
                  }`}
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="h-14 bg-white/[0.03] border-white/10 text-white rounded-xl 
                    focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300
                    hover:border-white/20 hover:bg-white/[0.04]"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
              </div>

              {/* Email field */}
              <div className="relative group">
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email 
                      ? '-top-2.5 text-xs text-white/70 bg-background px-2' 
                      : 'top-4 text-white/40'
                  }`}
                >
                  Your Email
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
                  className="h-14 bg-white/[0.03] border-white/10 text-white rounded-xl 
                    focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300
                    hover:border-white/20 hover:bg-white/[0.04]"
                />
              </div>

              {/* Message field */}
              <div className="relative group">
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                    focusedField === 'message' || formData.message 
                      ? '-top-2.5 text-xs text-white/70 bg-background px-2' 
                      : 'top-4 text-white/40'
                  }`}
                >
                  Your Message
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
                  className="pt-5 bg-white/[0.03] border-white/10 text-white rounded-xl resize-none
                    focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300
                    hover:border-white/20 hover:bg-white/[0.04]"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-white text-black hover:bg-white/90 rounded-xl font-medium
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                  disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
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
            <p className="text-white/50 text-sm mb-6">Or reach out directly through:</p>
            
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-xl glass
                  hover:bg-white/[0.08] transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center
                  group-hover:bg-white/10 transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium">{link.name}</p>
                  <p className="text-white/50 text-sm truncate">{link.username}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white/70 
                  transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}

            {/* Availability indicator */}
            <div className="mt-8 p-4 rounded-xl glass">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white/70 text-sm">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
