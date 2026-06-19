import type { Metadata } from "next";
import { faqs } from "@/data";
import { FadeIn } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "FAQ | PENO",
  description: "Frequently asked questions about our gifting, marketing, and IT services.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-36 pb-24">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent/60" />
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Help Center</p>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em] mb-4">Frequently Asked</h1>
          <p className="text-ink-muted mb-14 leading-relaxed">Answers to the questions we hear most often. Can&apos;t find what you&apos;re looking for? Reach out anytime.</p>
        </FadeIn>

        <div className="space-y-2">
          {faqs.map(faq => (
            <details key={faq.id} className="border border-ink/5 rounded-sm group bg-cream hover:border-ink/10 transition-colors">
              <summary className="flex items-center justify-between p-5 cursor-pointer text-sm text-ink font-medium hover:text-velvet transition-colors list-none marker:hidden">
                {faq.question}
                <span className="text-ink-muted group-open:rotate-45 transition-transform duration-300 text-xl flex-shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-ink-muted leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-ink/5 text-center">
          <p className="text-ink-muted text-sm">Still have questions? <a href="mailto:info@peno.in" className="text-ink underline underline-offset-4 hover:text-accent transition-colors">Email us</a></p>
        </div>
      </div>
    </div>
  );
}
