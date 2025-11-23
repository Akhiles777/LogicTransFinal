import Header from "./components/Header";
import HeroSection from "@/app/components/section/HeroSection";
import WhyUs from "@/app/components/section/WhyUs";
import ProcessSteps from "@/app/components/section/ProcessSteps";
import StatsDetails from "@/app/components/section/StatsDetails";
import CasesAndTestimonials from "@/app/components/section/CasesAndTestimonials";
import ContactSection from "@/app/components/section/ContactSection";
import Footer from "@/app/components/Footer";



const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Express Logistics",
  "url": "https://example.com",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+7-917-355-50-07",
      "contactType": "customer service",
      "areaServed": "RU"
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Сочи",
      "streetAddress": "ул. Голенева, 36"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Уфа",
      "streetAddress": "ул. Цюрупы, 128"
    }
  ]
};

export default function Home() {
  return (
      <main className="min-h-screen bg-white font-sans text-slate-900">
        {/* Structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Header />

        {/* 1. HERO SECTION (Главный экран) */}
     <HeroSection/>

        {/* 2. WhyUs(Почему выбирают нас) */}
<WhyUs/>

        {/* Разделитель */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200" />
        </div>

        {/* 3. PROCESS SECTION (#process) */}

        <ProcessSteps/>



        {/* Разделитель */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200" />
        </div>

        {/* 4. STATISTICS & DETAILS SECTION (#stats) */}


        <StatsDetails/>

        {/* 5. WORK IN ACTION & TESTIMONIALS */}
<CasesAndTestimonials/>

        {/* 6. CONTACTS SECTION (#contacts) */}
<ContactSection/>

       <Footer/>
      </main>
  );
}