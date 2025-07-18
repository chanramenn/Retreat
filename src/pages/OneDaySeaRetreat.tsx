import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MapPin, Car } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const schedule = [
  {
    day: 'День ретрита',
    items: [
      '09:00 – 10:00 Приветственный чай/кофе',
      '10:00 – 11:00 Мягкая утренняя практика (дыхание, медитация)',
      '11:00 – 13:00 Лекция',
      '13:00 – 14:00 Обед',
      '14:00 – 16:00 Лекция',
      '16:00 – 16:30 чай/кофе',
      '16:30 – 18:00 Лекция',
      '18:00 – 19:00 Мягкая вечерняя практика (дыхание, медитация)',
      '19:00 – 20:00 Подведение итогов, обратная связь',
    ],
  },
];

function OneDayFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqs = [
    {
      question: 'Что взять с собой?',
      answer: 'Удобную одежду для практик, коврик для йоги (если есть), воду, блокнот для записей.'
    },
    {
      question: 'Как добраться?',
      answer: 'Адрес: п. Загорянский, ул. Щербакова 28А. Можно на автомобиле (есть парковка) или на электричке до ст. Загорянская Ярославского вокзала. Бесплатный трансфер от станции по желанию.'
    },
    {
      question: 'Можно ли приехать с детьми?',
      answer: 'Ретрит рассчитан на взрослых.'
    },
    {
      question: 'Что включено в стоимость?',
      answer: 'Все практики, лекции, обед, чай/кофе, материалы.'
    },
    {
      question: 'Нужен ли опыт?',
      answer: 'Подходит для всех уровней, специальная подготовка не требуется.'
    },
  ];
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader 
            onClick={() => toggleItem(index)}
            className="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <CardTitle className="text-left text-lg font-medium">
              {faq.question}
            </CardTitle>
            {openItem === index ? (
              <ChevronUp className="h-5 w-5 text-nature-green" />
            ) : (
              <ChevronDown className="h-5 w-5 text-nature-green" />
            )}
          </CardHeader>
          {openItem === index && (
            <CardContent className="pt-0">
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}

const OneDaySeaRetreat = () => (
  <div className="min-h-screen pt-0 bg-background relative" style={{ backgroundImage: "url('/images/background1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
    <div className="absolute inset-0 bg-white/70 pointer-events-none z-0"></div>
    <div className="relative z-10">
      {/* Banner Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/leaves.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Загорянский ретрит сентябрь 2025
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Однодневный ретрит в Подмосковье • Йога Дом, п. Загорянский
          </p>
          <Link to="/contacts">
            <Button className="bg-nature-green hover:bg-nature-green/90 text-2xl px-12 py-6 rounded-full shadow">
              Записаться
            </Button>
          </Link>
        </div>
      </section>
      {/* Description Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-muted-foreground mb-0 text-center max-w-8xl mx-auto">
            Однодневный ретрит в Подмосковье - это возможность короткой, но эффективной перезагрузки! На один субботний день мы собираемся в Йога Дом в старом дачном поселке Загорянский, расположенном в сосновом лесу. Мягкое и благостное пространство Дома помогает провести время ретрита с максимальным комфортом и наслаждением, а также погрузиться в практики с максимальной пользой для души и тела.<br/><br/>Каждый наш ретрит уникальный! Мы подбираем новые практики и медитации, и совместно движемся к все более и более гармоничному раскрытию своего творческого потенциала.
          </p>
        </div>
      </section>
      {/* Schedule Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-4">
          <h2 className="text-3xl font-bold text-nature-green mb-6 text-center">Расписание ретрита</h2>
          {schedule.map((day, idx) => (
            <div key={day.day} className="mb-6">
              <div className="text-xl font-semibold text-nature-green mb-2">{day.day}</div>
              <ul className="list-disc pl-6 text-muted-foreground">
                {day.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Location and Photos Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-0 max-w-5xl">
        <div className="bg-nature-beige/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-nature-green mb-4">Локация и фото</h2>
          <div className="flex overflow-x-auto gap-6 mb-4 pb-4 scrollbar-thin scrollbar-thumb-nature-beige/50">
            <img src="/images/oneday3.jpg" alt="Ретрит фото 1" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday4.jpg" alt="Ретрит фото 2" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday5.jpg" alt="Ретрит фото 3" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday1.jpg" alt="Ретрит фото 4" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday2.jpg" alt="Ретрит фото 5" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday.jpg" alt="Ретрит фото 6" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday7.jpg" alt="Ретрит фото 7" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday6.jpg" alt="Ретрит фото 8" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday8.jpg" alt="Ретрит фото 9" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
            <img src="/images/oneday9.jpg" alt="Ретрит фото 10" className="rounded-2xl shadow-lg w-[350px] h-[480px] object-cover flex-shrink-0" />
          </div>
        </div>
      </section>
      {/* Practice/Lead Info Section
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        <div className="bg-white rounded-2xl shadow p-6 border border-nature-beige/50 flex flex-col items-center mb-8">
          <h3 className="text-xl font-bold mb-3 text-nature-green">Ведущие и программа</h3>
          <p className="text-muted-foreground mb-2 text-center">Практики, медитации, лекции и мягкие телесные практики для гармонии души и тела. Каждый ретрит — новые техники и раскрытие творческого потенциала.</p>
        </div>
      </section> */}
      {/* FAQ Section */}
      <section className="py-4 bg-nature-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы об однодневном ретрите
            </p>
          </div>
          <OneDayFAQ />
        </div>
      </section>

    

      {/* Location and Directions Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-nature-green">
                <MapPin className="h-5 w-5 mr-2" />
                Расположение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-nature-beige/20 rounded-lg flex items-center justify-center overflow-hidden">
                <YMaps>
                  <Map
                    defaultState={{ center: [55.911527, 37.911573], zoom: 15 }}
                    width="100%"
                    height="100%"
                  >
                    <Placemark geometry={[55.911527, 37.911573]} />
                  </Map>
                </YMaps>
              </div>
              <p className="text-sm text-muted-foreground">
                Адрес: п. Загорянский, ул. Щербакова 28А. Йога Дом в старом дачном поселке среди соснового леса.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-nature-green">
                <Car className="h-5 w-5 mr-2" />
                Как добраться
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">На автомобиле:</h4>
                <p className="text-sm text-muted-foreground">
                  Парковочное место есть у дома
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">На электричке:</h4>
                <p className="text-sm text-muted-foreground">
                  До станции Загорянская Ярославского вокзала, далее бесплатный трансфер до дома по желанию
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

  

    </div>
  </div>
);

export default OneDaySeaRetreat; 