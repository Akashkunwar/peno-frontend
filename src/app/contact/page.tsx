"use client";
import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/ui/animations";
import { Check, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-36 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
          <FadeIn direction="up">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-accent/60" />
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Get in Touch</p>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-ink">Let&apos;s talk</h1>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <p className="text-ink-muted max-w-md leading-relaxed">
              Whether you&apos;re planning a corporate gifting program, need marketing support, or want to discuss technology — we&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <FadeIn direction="up" className="lg:col-span-3">
            {sent ? (
              <div className="bg-velvet text-white p-10 rounded-sm">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl mb-2">Message sent</h3>
                <p className="text-white/60 text-sm leading-relaxed">We&apos;ll be in touch within 24 hours. Looking forward to creating something memorable with you.</p>
              </div>
            ) : (
              <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-2">Name *</label>
                    <input type="text" required className="w-full bg-cream-dark border border-ink/10 text-ink px-4 py-3.5 rounded-sm outline-none focus:border-ink/30 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-2">Email *</label>
                    <input type="email" required className="w-full bg-cream-dark border border-ink/10 text-ink px-4 py-3.5 rounded-sm outline-none focus:border-ink/30 transition-colors text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-2">Phone</label>
                    <input type="tel" className="w-full bg-cream-dark border border-ink/10 text-ink px-4 py-3.5 rounded-sm outline-none focus:border-ink/30 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-2">Company</label>
                    <input type="text" className="w-full bg-cream-dark border border-ink/10 text-ink px-4 py-3.5 rounded-sm outline-none focus:border-ink/30 transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-2">Message *</label>
                  <textarea rows={6} required className="w-full bg-cream-dark border border-ink/10 text-ink px-4 py-3.5 rounded-sm outline-none focus:border-ink/30 transition-colors text-sm resize-none" />
                </div>
                <button type="submit" className="bg-velvet text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-velvet-deep transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="lg:col-span-2">
            <div className="space-y-8 bg-cream-dark p-8 md:p-10 rounded-sm">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <h3 className="font-serif text-lg text-ink">Email</h3>
                </div>
                <a href="mailto:info@peno.in" className="text-ink-muted hover:text-ink transition-colors text-sm">info@peno.in</a>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <h3 className="font-serif text-lg text-ink">Address</h3>
                </div>
                <address className="text-ink-muted not-italic leading-relaxed text-sm">
                  8th Floor, Asiana Plaza,<br />
                  Budha Marg, Near GPO Golambar,<br />
                  Patna, Bihar 800001,<br />
                  India
                </address>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <h3 className="font-serif text-lg text-ink">Hours</h3>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">Mon–Fri: 10AM–7PM<br />Sat: 10AM–2PM<br />Sun: Closed</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
