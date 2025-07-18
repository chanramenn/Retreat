import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "ОЦЕНКА ИСХОДНОГО СОСТОЯНИЯ",
      description: (
        <>
          <ul className="text-left list-disc pl-4 mb-2">
            <li>психоэмоционального напряжения</li>
            <li>общего уровня энергии</li>
          </ul>
          <span>Используем инструменты прикладной кинезиологии и Метод работы в Причине В.П. Гоча.</span>
        </>
      )
    },
    {
      title: "ДИАГНОСТИКА",
      description: (
        <>
          <span>Канально-меридиональной системы по традиционной китайской медицине.<br/>Используем технологии И.Накатани (Япония).<br/>Состояния работы чакр, тонких тел, используя Метод работы в Причине.</span>
        </>
      )
    },
    {
      title: "КОРРЕКТИРОВКА СОСТОЯНИЯ",
      description: (
        <>
          <span>На практиках в группах или индивидуально с наставниками.<br/>Вы ощутите изменения в своем теле и эмоциях с первого дня.</span>
        </>
      )
    },
    {
      title: "ИНСТРУМЕНТЫ",
      description: (
        <>
          <span>В области кинезиотейпирования, самомассажа, эмоциональной коррекции, традиционной китайской медицине.<br/>Вы сможете использовать полученные знания для помощи не только себе, но и своим близким.</span>
        </>
      )
    },
    {
      title: "ОЦЕНКА ЗАКЛЮЧИТЕЛЬНОГО СОСТОЯНИЯ",
      description: (
        <>
          <ul className="text-left list-disc pl-4 mb-2">
            <li>психоэмоционального напряжения</li>
            <li>общего уровня энергии</li>
          </ul>
          <span>Используем инструменты прикладной кинезиологии и Метод работы в Причине В.П. Гоча.</span>
        </>
      )
    },
    {
      title: "РЕКОМЕНДАЦИИ",
      description: (
        <>
          <span>По восстановлению здоровья и внутренней гармонии.<br/>Как не только поддерживать достигнутый уровень, но и двигаться дальше по пути внутренней гармонии и полноты жизни.</span>
        </>
      )
    }
  ];

  return (
    <section className="py-16" style={{ background: 'linear-gradient(to bottom, rgba(58, 20, 115, 0) 65%, rgba(76,29,149,0.0) 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-lavender-new text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Преимущества участия в ретрите
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Основанные на научных исследованиях практики осознанности для улучшения качества жизни
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group perspective">
              <div className="relative w-full h-[340px] transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card - Title only */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <Card className="w-full h-full text-center p-6 rounded-2xl flex flex-col justify-center shadow-md relative overflow-hidden" style={{backgroundImage: "url('/images/background1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="absolute inset-0 bg-white/90 z-0 pointer-events-none" />
                    <CardHeader className="p-0 mb-0 border-0 bg-transparent relative z-10">
                      <CardTitle className="text-lavender-dark text-xl font-semibold">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                
                {/* Back of card - Description only */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <Card className="w-full h-full text-center p-6 rounded-2xl flex flex-col justify-center shadow-md relative overflow-hidden" style={{backgroundImage: "url('/images/background1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="absolute inset-0 bg-white/80 z-0 pointer-events-none" />
                    <CardContent className="p-0 text-lg text-lavender-dark flex-1 flex flex-col justify-center relative z-10">
                      <div className="space-y-2 text-left mx-auto max-w-xs">
                        {benefit.description}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
