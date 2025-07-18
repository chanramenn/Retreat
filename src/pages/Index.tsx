import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RetreatPrograms from '@/components/RetreatPrograms';
import BenefitsSection from '@/components/BenefitsSection';
import ReviewsSection from '@/components/ReviewsSection';
import SEO from '@/components/SEO';
import { OrganizationStructuredData } from '@/components/StructuredData';

const GreetingSection = () => (
  <section className="py-12 bg-white rounded-2xl shadow-md flex items-center justify-center min-h-[220px]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <p className="text-xl sm:text-3xl text-muted-foreground max-w-8xl mx-auto text-center font-medium">
        Пусть этот ретрит станет для вас началом нового этапа — наполненного гармонией, внутренней силой и радостью. Откройте для себя практики, которые помогут обрести баланс, восстановить энергию и почувствовать себя частью природы и единомышленников.
      </p>
    </div>
  </section>
);

const Index = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/images/lavender-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 0,
      }}
    >
      <SEO 
        title="Ретриты Осознанности | Медитация и Духовные Практики в Крыму и Подмосковье"
        description="Ретриты осознанности в Крыму и Подмосковье. Медитация, йога, духовные практики, восстановление энергии. Однодневные ретриты и выходные для самопознания."
        keywords="ретрит осознанности, медитация ретрит, ретрит тишины, духовные практики, ретрит самопознания, оздоровительный ретрит, ретрит перезагрузка, купить ретрит, центр медитации, ретрит в подмосковье, ретрит московская область, однодневный ретрит в подмосковье, ретрит на выходные москва"
        canonicalUrl="https://chanramenn.github.io/Retreat/"
        ogImage="https://chanramenn.github.io/Retreat/images/satsang.jpg"
      />
      <OrganizationStructuredData
        name="Ретриты Осознанности"
        url="https://chanramenn.github.io/Retreat"
        logo="https://chanramenn.github.io/Retreat/images/satsang.jpg"
        description="Центр ретритов осознанности в Крыму и Подмосковье. Медитация, йога, духовные практики, восстановление энергии и борьба с эмоциональным выгоранием."
        telephone="+7 (916) 030-13-00"
        email="a.solovieva.v@gmail.com"
        address={{
          streetAddress: "ул. Тихая, 15",
          addressLocality: "с. Морское, Республика Крым",
          postalCode: "98000",
          addressCountry: "RU"
        }}
        sameAs={[
          "https://t.me/prichina_i_karma",
          "https://asolovievav.wixsite.com/satsang"
        ]}
      />
      <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none" />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <GreetingSection />
        <RetreatPrograms />
        <BenefitsSection />
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Index;
