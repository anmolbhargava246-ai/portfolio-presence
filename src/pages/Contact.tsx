import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const subjectLabels: Record<string, string> = {
  project: "Project Inquiry",
  consulting: "Consulting",
  collaboration: "Collaboration",
  other: "Other",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "0.5px solid var(--color-border-secondary)",
  borderRadius: "var(--radius-md)",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "var(--color-text-primary)",
  background: "var(--color-bg-primary)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  color: "var(--color-text-tertiary)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  marginBottom: 6,
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await Promise.all([
        emailjs.sendForm(
          "service_o4v8mav",
          "template_tbz85oj",
          formRef.current,
          "yQwTVKyWAbZKxvvVy"
        ),
        emailjs.sendForm(
          "service_o4v8mav",
          "template_1yh50ym",
          formRef.current,
          "yQwTVKyWAbZKxvvVy"
        ),
      ]);

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="container-page">
        <h1 className="h1">Get in touch</h1>

        <p className="subtitle">
          Open to UX research roles in B2B SaaS product teams. Happy to chat about behavioural
          research, trust and adoption, or anything in between.
        </p>

        <ul className="contact-list">
          <li>
            <i className="ti ti-mail" aria-hidden="true"></i>
            <a href="mailto:anmol.bhargava246@gmail.com">anmol.bhargava246@gmail.com</a>
          </li>
          <li>
            <i className="ti ti-brand-linkedin" aria-hidden="true"></i>
            <a
              href="https://www.linkedin.com/in/anmolbhargava4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anmolbhargava4
            </a>
          </li>
          <li>
            <i className="ti ti-phone" aria-hidden="true"></i>
            <a href="tel:+919082620650">+91 90826 20650</a>
          </li>
          <li>
            <i className="ti ti-map-pin" aria-hidden="true"></i>
            <span>Bangalore, India</span>
          </li>
        </ul>

        <div className="section-label" style={{ marginTop: "3rem" }}>
          Or send a message
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}
        >
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <input
            type="hidden"
            name="subject_label"
            value={subjectLabels[formData.subject] || ""}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label htmlFor="name" style={labelStyle}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" style={labelStyle}>
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select a subject</option>
              <option value="project">Project inquiry</option>
              <option value="consulting">Consulting</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-sans)" }}
            />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="btn-editorial">
              {isSubmitting ? "Sending…" : "Send message"}
              <i className="ti ti-send" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
