import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/animations";

export const metadata: Metadata = { title: "Privacy Policy | PENO", description: "PENO privacy policy." };

const sections = [
  { title: "Information We Collect", content: "When you visit peno.in, we may collect information you provide directly (name, email, phone, company details when you submit forms), and information collected automatically (browser type, pages visited). We use this to improve our services." },
  { title: "How We Use Your Information", content: "We use collected information to respond to your inquiries, process requests, improve our website and services, send relevant communications (with consent), and comply with legal obligations." },
  { title: "Cookies", content: "Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings." },
  { title: "Data Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers subject to confidentiality agreements." },
  { title: "Data Security", content: "We implement reasonable security measures to protect your personal information." },
  { title: "Your Rights", content: "You have the right to access, correct, or request deletion of your personal data. Contact info@peno.in." },
  { title: "Contact", content: "For privacy inquiries: info@peno.in or 8th Floor, Asiana Plaza, Budha Marg, Near GPO Golambar, Patna, Bihar 800001, India." },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-36 pb-24">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent/60" />
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Legal</p>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em] mb-3">Privacy Policy</h1>
          <p className="text-xs text-ink-muted mb-14">Last updated: January 2025</p>
        </FadeIn>
        <div className="space-y-10">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.04} direction="up">
              <div>
                <h2 className="font-serif text-xl text-ink mb-3">{s.title}</h2>
                <p className="text-ink-muted leading-relaxed text-sm">{s.content}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
