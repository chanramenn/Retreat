
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/sea.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-nature-white">Ретриты Осознанности</span>
          <br />
          <span className="text-xl sm:text-2xl">в Крыму и Подмосковье</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Медитация, йога и духовные практики для восстановления энергии и борьбы с эмоциональным выгоранием
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4  justify-center items-center">
          <Link to="/contacts">
            <Button size="lg" className="bg-nature-green rounded-full hover:bg-nature-green/90 text-white px-8 py-3">
              Записаться на ретрит
            </Button>
          </Link>
          {/* <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-foreground px-8 py-3">
            Узнать подробнее
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
