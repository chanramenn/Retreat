import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { MapPin, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import SEO from '@/components/SEO';
import { EventStructuredData, FAQStructuredData } from '@/components/StructuredData';

const schedule = [
  {
    day: 'День 1 НАСТРОЙКА',
    items: [
      '08:00 - 09:00 утренняя практика',
      '09:00 – 10:00 чаепитие, знакомство, запросы и ожидания, правила ретрита',
      '10:00 – 12:00 завтрак',
      '12:00 – 16:00 купание в бухте Ласпи',
      '16:00 – 18:00 обед',
      '18:00 – 20:00 практика по направлениям',
      '20:00 – 21:00 индивидуальные приемы',
      '21:00 – 22:00 вечернее чаепитие и медитация',
    ],
  },
  {
    day: 'День 2 ВОСХОЖДЕНИЕ',
    items: [
      '08:00 - 09:00 утренняя практика',
      '09:00 – 11:00 завтрак',
      '11:00 – 16:00 Подъем на храм Солнца, Ильяс-Кая, купание в бухте Ласпи',
      '16:00 – 18:00 обед',
      '18:00 – 20:00 практика по направлениям',
      '20:00 – 21:00 индивидуальные приемы',
      '21:00 – 22:00 вечернее чаепитие и медитация',
    ],
  },
  {
    day: 'День 3 РАССЛАБЛЕНИЕ ',
    items: [
      '08:00 - 09:00 утренняя практика',
      '09:00 – 11:00 завтрак',
      '11:00 – 16:00 Парк и пляж на Форосе, Форосская церковь',
      '16:00 – 18:00 обед',
      '18:00 – 20:00 практика по направлениям',
      '20:00 – 21:00 индивидуальные приемы',
      '21:00 – 22:00 вечернее чаепитие и медитация',
    ],
  },
  {
    day: 'День 4 НАПОЛНЕНИЕ',
    items: [
      '08:00 - 09:00 утренняя практика',
      '09:00 – 11:00 завтрак',
      '11:00 – 16:00 мыс Фиолент, Монастырь и пляж',
      '16:00 – 18:00 обед',
      '18:00 – 20:00 практика по направлениям',
      '20:00 – 21:00 индивидуальные приемы',
      '21:00 – 22:00 вечернее чаепитие и медитация',
    ],
  },
  {
    day: 'День 5 ИНТЕГРАЦИЯ',
    items: [
      '08:00 - 09:00 утренняя практика',
      '09:00 – 11:00 завтрак',
      '11:00 – 16:00 поход в Холодное ущелье',
      '16:00 – 18:00 обед',
      '18:00 – 22:00 закат на берегу моря, медитация и подведение итогов',
    ],
  },
];

function VipassanaFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqs = [
    {
      question: 'Что взять с собой?',
      answer: 'Удобную одежду для занятий йогой и цигуном, спортивную обувь для прогулок, купальный костюм, головной убор от солнца, легкий дождевик, личные гигиенические принадлежности и коврик для йоги (если есть). Небольшой рюкзак пригодится для экскурсий.'
    },
    {
      question: 'Как добраться?',
      answer: 'Место проведения — село Резерное. Доехать можно из Симферополя - 1,5 часа и Севастополя 30 мин. Такси или общественный транспорт.'
    },
    {
      question: 'Уровень подготовки',
      answer: 'Подходит для всех уровней: занятия и прогулки адаптируются под возможности участников.'
    },
    {
      question: 'Опыт в йоге и цигуне',
      answer: 'Подходит и новичкам, и опытным практикам. Преподаватели учитывают уровень группы.'
    },
    {
      question: 'Место проведения занятий',
      answer: 'Практики проходят на свежем воздухе, при плохой погоде — в зале.'
    },
    {
      question: 'Проживание',
      answer: 'Можно организовать проживание по запросу. Гостиницы, дом, комната в доме.'
    },
    {
      question: 'Дети и животные',
      answer: 'Ретрит рассчитан на взрослых. Можно с детьми и домашними питомцами.'
    },
    {
      question: 'Плохая погода',
      answer: 'Занятия переносятся в помещение, прогулки заменяются мастер-классами.'
    },
    {
      question: 'Регистрация и оплата',
      answer: 'Регистрация онлайн на сайте. Оплата банковским переводом или картой. Места ограничены.'
    },
    {
      question: 'Ограничения по здоровью',
      answer: 'Проконсультируйтесь с врачом при хронических заболеваниях и сообщите нам. Обязательно берите с необходимые вам медикаменты, средства первой помощи.'
    },
    {
      question: 'Коврики для йоги',
      answer: 'Берите свой коврик или сообщите, если нужен напрокат.'
    },
    {
      question: 'Фото- и видеосъемка',
      answer: 'Можно фотографировать, но уважайте личное пространство участников и не снимайте медитации без разрешения.'
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

const VipassanaMountains = () => (
  <div className="min-h-screen pt-0 bg-background relative" style={{ backgroundImage: "url('/images/water.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
    <SEO 
      title="Ретрит ДАРЫ АВГУСТА в Крыму | Йога и Медитация у моря"
      description="Пятидневный ретрит в Крыму с практиками йоги, цигун и медитации. Ежедневные походы, экскурсии и купание в бухтах Ласпи, Форос, Фиолент. Восстановление энергии и жизненных сил."
      keywords="ретрит в крыму, йога ретрит крым, ретрит у моря, медитация в крыму, ретрит в горах крыма, место силы крым, ретрит в крыму в августе, ретрит в резервном крым, ретрит ласпи форос, эзотерический тур крым, ретрит с практиками цигун, сатсанг с мастером, школа причинности гоча ретрит"
      canonicalUrl="https://chanramenn.github.io/Retreat/retreats/vipassana-mountains"
      ogImage="https://chanramenn.github.io/Retreat/images/satsang.jpg"
    />
    <EventStructuredData
      name="Ретрит ДАРЫ АВГУСТА в Крыму"
      description="Пять незабываемых дней практики в окружении Крымских гор и на побережье Черного моря! Ежедневные практики йоги и цигун, походы и экскурсии, вечерние медитации и чаепития у моря, купание в бухтах Ласпи, Форос, Фиолент!"
      startDate="2025-08-15T08:00:00+03:00"
      endDate="2025-08-19T22:00:00+03:00"
      location={{
        name: "Село Резерное, Крым",
        address: "Республика Крым, село Резерное"
      }}
      image="https://chanramenn.github.io/Retreat/images/sand4.jpg"
      price="22000"
      priceCurrency="RUB"
      url="https://chanramenn.github.io/Retreat/retreats/vipassana-mountains"
      organizer={{
        name: "Ретриты Осознанности",
        url: "https://chanramenn.github.io/Retreat"
      }}
    />
    <FAQStructuredData
      questions={[
        {
          question: "Что взять с собой на ретрит в Крыму?",
          answer: "Удобную одежду для занятий йогой и цигуном, спортивную обувь для прогулок, купальный костюм, головной убор от солнца, легкий дождевик, личные гигиенические принадлежности и коврик для йоги (если есть). Небольшой рюкзак пригодится для экскурсий."
        },
        {
          question: "Как добраться до ретрит-центра в Крыму?",
          answer: "Место проведения — село Резерное. Доехать можно из Симферополя - 1,5 часа и Севастополя 30 мин. Такси или общественный транспорт."
        },
        {
          question: "Нужен ли опыт в йоге и медитации для участия в ретрите?",
          answer: "Подходит и новичкам, и опытным практикам. Преподаватели учитывают уровень группы и адаптируют практики под возможности участников."
        },
        {
          question: "Как организовано проживание на ретрите в Крыму?",
          answer: "Можно организовать проживание по запросу. Доступны варианты: гостиницы, дом, комната в доме."
        }
      ]}
    />
    <div className="absolute inset-0 bg-white/60 pointer-events-none z-0"></div>
    <div className="relative z-10">
    {/* Banner Section */}
    <section className="relative min-h-[85vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/sand4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/0"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Ретрит ДАРЫ АВГУСТА в Крыму
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          15-19 августа 2025 • Крым, Ласпи, Форос, Фиолент
        </p>
        <Link to="/contacts">
          <Button className="bg-nature-green hover:bg-nature-green/90 text-lg px-12 py-6 rounded-full shadow">
            Записаться
          </Button>
        </Link>
      </div>
    </section>
    {/* Description Section */}
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-nature-green mb-6 text-center">Описание ретрита</h2> */}
        <p className="text-xl text-muted-foreground mb-0 text-center max-w-10xl mx-auto">
          Пять незабываемых дней практики в окружении Крымских гор и на побережье Черного моря! Ежедневные практики йоги и цигун, ежедневные походы и экскурсии, вечерние медитации и чаепития у моря, ну и конечно – купание! В чистейших бухтах Ласпи, Форос, Фиолент!
        </p>
      </div>
    </section>
    {/* Schedule Section */}
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
        <h2 className="text-3xl font-bold text-nature-green mb-6 text-center">Расписание ретрита</h2>
        <Accordion type="single" collapsible className="w-full">
          {schedule.map((day, idx) => (
            <AccordionItem value={day.day} key={day.day}>
              <AccordionTrigger className="text-nature-green font-semibold text-base">{day.day}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 text-muted-foreground">
                  {day.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* Two Practice Areas */}
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
      <h2 className="text-2xl font-bold text-nature-green mb-6 text-center">Мы проводим практики по развитию себя в двух направлениях:</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 border border-nature-beige/50 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3 text-nature-green">Школа Причинности В.П. Гоча</h3>
          <p className="text-muted-foreground mb-2 text-center">Проводит ежедневные учебные и практические мастер классы <a href="https://t.me/prichina_i_karma"  target="_blank" rel="noopener noreferrer" className="text-nature-green underline">https://t.me/prichina_i_karma</a> Медитации для развития образного виденья, развития тонко-чувственного восприятия. Работа с Первообразами. В программе обязательно включены игры, способствующие раскрытию интуиции и развитию чувствительности к потокам энергии. </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-nature-beige/50 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3 text-nature-green">Клуб Сатсанг</h3>
          <p className="text-muted-foreground mb-2 text-center">Проводит мастер классы по традиционной китайской медицине, акупунктуре, кинезиотейпированию лица и тела, медитативные практики для эмоциональной коррекции. Мы проводим непосредственно сатсанги, т.е. медитационные встречи с нашим внутренним Мастером. Медитации для развития образного виденья, развития тонко-чувственного восприятия. Работа с Первообразами. <a href="https://asolovievav.wixsite.com/satsang" target="_blank" rel="noopener noreferrer" className="text-nature-green underline">https://asolovievav.wixsite.com/satsang</a></p>
        </div>
      </div>
    </section>

    {/* Location and Photos Section */}
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
      <div className="bg-nature-beige/30 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-nature-green mb-4">Локация и фото</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            <img src="/images/retreat3.jpg" alt="Ретрит фото 1" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat2.jpg" alt="Ретрит фото 2" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat1.jpg" alt="Ретрит фото 3" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat4.jpg" alt="Ретрит фото 4" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat5.jpg" alt="Ретрит фото 5" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat6.jpg" alt="Ретрит фото 6" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat7.jpg" alt="Ретрит фото 7" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat8.jpg" alt="Ретрит фото 8" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat9.jpg" alt="Ретрит фото 9" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat10.jpg" alt="Ретрит фото 10" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat11.jpg" alt="Ретрит фото 11" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat12.jpg" alt="Ретрит фото 12" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat13.jpg" alt="Ретрит фото 13" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            {/* <img src="/images/retreat1.jpg" alt="Ретрит фото 1" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat2.jpg" alt="Ретрит фото 2" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat3.jpg" alt="Ретрит фото 3" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat4.jpg" alt="Ретрит фото 4" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat5.jpg" alt="Ретрит фото 5" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat6.jpg" alt="Ретрит фото 6" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat7.jpg" alt="Ретрит фото 7" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat8.jpg" alt="Ретрит фото 8" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat9.jpg" alt="Ретрит фото 9" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat10.jpg" alt="Ретрит фото 10" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat11.jpg" alt="Ретрит фото 11" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat12.jpg" alt="Ретрит фото 12" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" />
            <img src="/images/retreat13.jpg" alt="Ретрит фото 13" className="w-96 h-120 object-cover rounded-lg shadow-lg flex-shrink-0" /> */}
          </div>
        </div>
        {/* <p className="text-muted-foreground">Наш ретрит проходит в живописных местах Крыма: Ласпи, Форос, Фиолент. Природа, горы, море и уникальная атмосфера для практики и отдыха.</p> */}
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-4 bg-nature-beige/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о ретрите "Дары августа"
          </p>
        </div>
        <VipassanaFAQ />
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
                  defaultState={{ center: [44.469774, 33.673878], zoom: 13 }}
                  width="100%"
                  height="100%"
                >
                  <Placemark geometry={[44.469774, 33.673878]} />
                </Map>
              </YMaps>
            </div>
            <p className="text-sm text-muted-foreground">
              Ретрит проходит в сакральном месте силы — село Резерное, Крым, в окружении гор и недалеко от побережья Черного моря.
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
              <h4 className="font-semibold mb-2">На самолете:</h4>
              <p className="text-sm text-muted-foreground">
                Аэропорт Геленжик → трансфер до села Резерное (5 часов)
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">На поезде:</h4>
              <p className="text-sm text-muted-foreground">
                Ж/д вокзал Симферополь → автобус до Севастополя → трансфер до села Резерное
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">На автомобиле:</h4>
              <p className="text-sm text-muted-foreground">
                По трассе Симферополь-Севастополь, поворот на село Резерное
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </div>
  </div>
);

export default VipassanaMountains; 