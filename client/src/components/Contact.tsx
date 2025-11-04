import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? Let's create something beautiful together.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="text-lg p-4 border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-foreground"
              data-testid="input-name"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="text-lg p-4 border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-foreground"
              data-testid="input-email"
            />
          </div>

          <div>
            <Textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="text-lg border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-foreground resize-none"
              data-testid="input-message"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="px-12 py-6 text-base uppercase tracking-wider"
              data-testid="button-submit"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
