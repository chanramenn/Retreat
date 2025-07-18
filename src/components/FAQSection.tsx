
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Подходит ли ретрит для начинающих?",
      answer: "Да, наши программы разработаны для людей с любым уровнем опыта. У нас есть специальные однодневные ретриты для новичков, а также более продвинутые многодневные программы."
    },
    {
      question: "Что включено в стоимость ретрита?",
      answer: "В стоимость входит: проживание, трехразовое вегетарианское питание, все занятия и материалы, трансфер от ближайшей станции, доступ к инфраструктуре центра."
    },
    {
      question: "Можно ли пользоваться телефоном во время ретрита?",
      answer: "Мы настоятельно рекомендуем полный информационный детокс для максимальной эффективности практики. Телефоны сдаются на хранение, но экстренная связь возможна через администрацию."
    },
    {
      question: "Где проходят ретриты?",
      answer: "Ретриты проводятся в специализированном центре в экологически чистом районе Крыма, окруженном природой. Центр оборудован всем необходимым для комфортного пребывания и практики."
    },
    {
      question: "Нужна ли специальная подготовка?",
      answer: "Специальная подготовка не требуется. Мы предоставляем все необходимые инструкции и поддержку. Рекомендуется удобная одежда и открытость к новому опыту."
    },
    {
      question: "Как проходит день в ретрите?",
      answer: "День включает утренние медитации, теоретические занятия, практические сессии, йогу, здоровое питание и время для отдыха. Расписание сбалансировано для максимальной пользы."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-nature-beige/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы о наших ретритах
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default FAQSection;
