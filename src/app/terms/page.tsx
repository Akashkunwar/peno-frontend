import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/animations";

export const metadata: Metadata = { title: "Terms & Conditions | PENO", description: "PENO terms and conditions." };

const sections = [
  { title: "Acceptance of Terms", content: "By accessing peno.in, you accept and agree to be bound by these Terms & Conditions." },
  { title: "Use of Website", content: "You agree to use this website for lawful purposes only." },
  { title: "Products and Services", content: "All product descriptions, images, and pricing are subject to change without notice." },
  { title: "Orders and Payments", content: "Orders are subject to acceptance and availability. Prices in Indian Rupees (INR)." },
  { title: "Intellectual Property", content: "All content on this website is the property of PENO and protected by Indian intellectual property laws." },
  { title: "Limitation of Liability", content: "PENO shall not be liable for any indirect, incidental, or consequential damages." },
  { title: "Governing Law", content: "These terms are governed by the laws of India. Disputes subject to jurisdiction of courts in Patna, Bihar." },
  { title: "Contact", content: "Questions: info@peno.in." },
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em] mb-3">Terms & Conditions</h1>
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
