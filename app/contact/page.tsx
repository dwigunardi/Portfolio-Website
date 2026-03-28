'use client';

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import NavigationBarTop from "@/components/common/NavigationBarTop";
import AnimatedContent from "@/components/AnimatedContent";
import Footer from "@/components/common/FooterSection";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconMail, IconMapPin, IconSend } from "@tabler/icons-react";
import { Textarea } from "@/components/ui/textarea";
import BackgroundSection from "@/components/section/Background";

// 1. Skema Validasi Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000, "Message is too long."),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "8abadc3a-982a-4773-9474-47daecf1e90e"); 
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("subject", `New Message from ${data.name} via Portfolio`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I will get back to you soon.",
          position: "top-center",
          // PERBAIKAN: Toast theme support
          className: "bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-950 dark:text-white dark:border-neutral-800 shadow-lg",
        });
        form.reset(); 
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.", {
        description: "Please try again later or contact me directly via email.",
        position: "top-center",
        className: "bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-950 dark:text-white dark:border-neutral-800 shadow-lg",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // PERBAIKAN: bg-white untuk mode terang
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300 flex flex-col selection:bg-blue-500/30">
      <NavigationBarTop />

      {/* PERBAIKAN: Background Ambience gradien dinamis */}
      <div className="fixed inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-900/20 dark:via-neutral-950 dark:to-neutral-950 pointer-events-none z-0 transition-colors duration-300" />
      
      <BackgroundSection enableWaves={['middle', 'bottom']} opacity={'50'}/>
      
      <main className="grow container mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10 flex items-center justify-center">
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.8}
          className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* =======================================
              BAGIAN KIRI: Teks & Info Kontak
              ======================================= */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-8">
            <div>
              {/* PERBAIKAN: Badge Get in Touch */}
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm transition-colors">
                Get in Touch
              </div>
              
              {/* PERBAIKAN: Judul text-neutral-900 untuk mode terang */}
              <h1 className="text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white tracking-tight mb-4 transition-colors">
                Let's Build <br />
                {/* PERBAIKAN: Gradasi biru lebih gelap sedikit di terang agar kontras */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
                  Together.
                </span>
              </h1>
              
              {/* PERBAIKAN: Paragraf text-neutral-600 */}
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed transition-colors">
                Have a project in mind, a freelance opportunity, or just want to chat about web development? I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
                {/* PERBAIKAN: Icon Box Background */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 text-blue-600 dark:text-blue-400 shadow-inner transition-colors">
                  <IconMail size={22} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium transition-colors">Email Me At</p>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-200 transition-colors">dwigunardi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
                {/* PERBAIKAN: Icon Box Background */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 text-blue-600 dark:text-blue-400 shadow-inner transition-colors">
                  <IconMapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium transition-colors">Based In</p>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-200 transition-colors">Sukabumi, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================
              BAGIAN KANAN: Form Shadcn Modern
              ======================================= */}
          <div className="lg:col-span-3">
            {/* PERBAIKAN: Card Wrapper */}
            <Card className="bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur-xl shadow-2xl transition-colors">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl text-neutral-900 dark:text-white transition-colors">Send a Message</CardTitle>
                <CardDescription className="text-neutral-600 dark:text-neutral-400 text-base transition-colors">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* INPUT: NAME */}
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors">Your Name</label>
                          <Input
                            {...field}
                            id="name"
                            placeholder="John Doe"
                            aria-invalid={fieldState.invalid}
                            // PERBAIKAN: Input styles
                            className="bg-white dark:bg-neutral-950/50 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white h-12 focus-visible:ring-blue-500 transition-colors"
                          />
                          {fieldState.invalid && (
                            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{fieldState.error?.message}</p>
                          )}
                        </div>
                      )}
                    />

                    {/* INPUT: EMAIL */}
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors">Email Address</label>
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            aria-invalid={fieldState.invalid}
                            // PERBAIKAN: Input styles
                            className="bg-white dark:bg-neutral-950/50 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white h-12 focus-visible:ring-blue-500 transition-colors"
                          />
                          {fieldState.invalid && (
                            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{fieldState.error?.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  {/* INPUT: MESSAGE */}
                  <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors">Your Message</label>
                        <Textarea
                          {...field}
                          id="message"
                          placeholder="Tell me about your project, timeline, and goals..."
                          rows={6}
                          aria-invalid={fieldState.invalid}
                          // PERBAIKAN: Textarea styles
                          className="bg-white dark:bg-neutral-950/50 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white min-h-[150px] resize-none focus-visible:ring-blue-500 transition-colors"
                        />
                        <div className="flex justify-between items-center mt-1">
                          {fieldState.invalid ? (
                            <p className="text-xs text-red-500 dark:text-red-400">{fieldState.error?.message}</p>
                          ) : (
                            <p className="text-xs text-neutral-500 dark:text-neutral-500">Markdown is not supported.</p>
                          )}
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 tabular-nums">
                            {field.value.length}/1000
                          </p>
                        </div>
                      </div>
                    )}
                  />
                </form>

              </CardContent>
              <CardFooter className="pt-6 rounded-b-xl border-t border-neutral-200 dark:border-neutral-800 transition-colors">
                <div className="w-full flex justify-end items-center gap-4 h-full">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => form.reset()}
                    // PERBAIKAN: Clear button hover support Light/Dark
                    className="text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 cursor-pointer transition-all"
                  >
                    Clear
                  </Button>
                  <Button 
                    type="submit" 
                    form="contact-form"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium h-10 px-8 transition-all cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <IconSend className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </AnimatedContent>
      </main>
      <Footer />
    </div>
  );
}