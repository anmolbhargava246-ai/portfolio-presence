import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const subjectOptions: Array<{ value: string; label: string }> = [
  { value: "project", label: "Project request" },
  { value: "rate-card", label: "Rate card" },
  { value: "consulting", label: "Consulting / advisory" },
  { value: "general", label: "General inquiry" },
  { value: "other", label: "Other" },
];

// EmailJS credentials (public — safe in client code per EmailJS design)
const EMAILJS_SERVICE_ID = "service_o4v8mav";
const EMAILJS_TEMPLATE_NOTIFICATION = "template_tbz85oj";
const EMAILJS_TEMPLATE_AUTOREPLY = "template_1yh50ym";
const EMAILJS_PUBLIC_KEY = "yQwTVKyWAbZKxvvVy";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    try {
      // Notification email to Anmol
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_NOTIFICATION,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      // Auto-reply to sender (best-effort — don't fail the whole flow if this errors)
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_AUTOREPLY,
          formRef.current,
          EMAILJS_PUBLIC_KEY,
        );
      } catch (_) {
        /* ignore auto-reply failure */
      }
      toast({
        title: "Message sent",
        description:
          "Thanks for reaching out. I'll get back to you within a few working days.",
      });
      setData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Couldn't send",
        description:
          "Something went wrong. Please email me directly at anmol.bhargava246@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const subjectLabel =
    subjectOptions.find((o) => o.value === data.subject)?.label ?? "";

  return (
    <Layout>
      <section className="container-page">
        <div className="project-meta">CONTACT · AVAILABLE FOR PROJECTS</div>
        <h1 className="h1">Have a problem worth digging into?</h1>

        <p className="subtitle">
          Send a note through the form below, and I'll get back to you within a
          few working days. If you'd rather skip the form, my email and LinkedIn
          are below too.
        </p>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
        >
          {/* Hidden fields included in the EmailJS template */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <input type="hidden" name="subject_label" value={subjectLabel} />

          <div className="contact-form-row">
            <label className="contact-form-field">
              <span className="contact-form-label">Name</span>
              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="contact-form-input"
              />
            </label>
            <label className="contact-form-field">
              <span className="contact-form-label">Email</span>
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="contact-form-input"
              />
            </label>
          </div>

          <label className="contact-form-field">
            <span className="contact-form-label">What can I help with?</span>
            <select
              id="subject"
              name="subject"
              value={data.subject}
              onChange={handleChange}
              required
              className="contact-form-input"
            >
              <option value="">Select an option</option>
              {subjectOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="contact-form-field">
            <span className="contact-form-label">
              Message <span className="contact-form-optional">(optional)</span>
            </span>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={handleChange}
              rows={5}
              className="contact-form-input contact-form-textarea"
              placeholder="A line or two about what you're working on, what you've tried, your rough timeline."
            />
          </label>

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-editorial"
            >
              {submitting ? "Sending…" : "Send message"}
              <i className="ti ti-send" aria-hidden="true"></i>
            </button>
          </div>
        </form>

        {/* Direct contact */}
        <div className="section-label" style={{ marginTop: "3rem" }}>
          Or reach out directly
        </div>
        <ul className="contact-list">
          <li>
            <i className="ti ti-mail" aria-hidden="true"></i>
            <a href="mailto:anmol.bhargava246@gmail.com">
              anmol.bhargava246@gmail.com
            </a>
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
            <i className="ti ti-map-pin" aria-hidden="true"></i>
            <span>Bangalore, India</span>
          </li>
        </ul>

        <div className="section-label" style={{ marginTop: "3rem" }}>
          Available for
        </div>
        <ul className="work-list">
          <li>Project-based research with founders and small teams</li>
          <li>Agency partnership on fieldwork, synthesis, or full workstreams</li>
          <li>Advisory and retainer support for teams without a researcher</li>
        </ul>
      </section>
    </Layout>
  );
};

export default Contact;
