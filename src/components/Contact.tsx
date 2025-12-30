import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/50 max-w-xl">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form - Git styled */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-2 mb-6 text-white/50 text-sm font-mono">
              <span className="text-green-400">$</span>
              <span>git commit -m "new message"</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-white/50 mb-2 font-mono">
                  --author
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-transparent border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/50 mb-2 font-mono">
                  --email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-transparent border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/50 mb-2 font-mono">
                  --message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="bg-transparent border-white/10 text-white placeholder:text-white/30 focus:border-white/30 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-white/90 rounded-lg"
              >
                {isSubmitting ? (
                  "Pushing..."
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    git push
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Social links */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/merilgandhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white text-sm">GitHub</p>
                    <p className="text-white/50 text-xs">@merilgandhi</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/merilgandhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white text-sm">LinkedIn</p>
                    <p className="text-white/50 text-xs">@merilgandhi</p>
                  </div>
                </a>
                
                <a
                  href="mailto:contact@merilgandhi.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white text-sm">Email</p>
                    <p className="text-white/50 text-xs">Get in touch</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};