import NavigationBarTop from "@/components/common/NavigationBarTop"
import Footer from "@/components/common/FooterSection"
import BackgroundSection from "@/components/section/Background"
import ContactForm from "@/components/section/ContactForm"

export const metadata = {
  title: "Contact",
  description: "Get in touch for freelance opportunities, project inquiries, or just to say hi.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen h-full bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col selection:bg-blue-500/30">
      <NavigationBarTop />
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-900/20 dark:via-neutral-950 dark:to-neutral-950 pointer-events-none z-0 transition-colors duration-300" />
      <BackgroundSection enableWaves={['middle', 'bottom']} opacity={'50'} />
      <main className="grow container mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10 flex items-center justify-center" id="contact-me">
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}