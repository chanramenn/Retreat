
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Отправка...");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "8bac3045-241d-4d05-9fa1-d5d0078de2c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Форма успешно отправлена!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      details: [
        "Республика Крым, Ретрит-центр 'Сад Радости'",
        "с. Морское, ул. Тихая, 15",
        "98000"
      ]
    },
    {
      icon: Phone,
      title: "Телефон",
      details: [
        "+7 (916) 030-13-00",
        "Звонки принимаются ежедневно",
        "с 9:00 до 21:00"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "a.solovieva.v@gmail.com",
      ]
    },
    {
      icon: Clock,
      title: "Режим работы",
      details: [
        "Понедельник - Воскресенье",
        "9:00 - 21:00",
        "Без выходных"
      ]
    }
  ];

  const faqContacts = [
    {
      question: "Как добраться до центра?",
      answer: "Мы организуем бесплатный трансфер от ближайшей ж/д станции или аэропорта. Также можно добраться на личном автомобиле - предоставляем подробную схему проезда."
    },
    {
      question: "Можно ли приехать посмотреть центр заранее?",
      answer: "Да, мы проводим дни открытых дверей каждую субботу с 14:00 до 17:00. Предварительная запись обязательна."
    },
    {
      question: "Как происходит оплата?",
      answer: "Принимаем оплату банковскими картами, банковскими переводами и наличными. Возможна рассрочка платежа."
    },
    {
      question: "Есть ли скидки для постоянных участников?",
      answer: "Да, действует программа лояльности. После третьего ретрита предоставляется скидка 15% на все последующие программы."
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundImage: "url('/images/contacts1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <SEO 
        title="Контакты | Ретриты Осознанности в Крыму и Подмосковье"
        description="Запишитесь на ретрит осознанности в Крыму или Подмосковье. Медитация, йога, духовные практики для восстановления энергии и борьбы с эмоциональным выгоранием."
        keywords="купить ретрит, центр медитации, ретрит в подмосковье, ретрит московская область, однодневный ретрит в подмосковье, ретрит на выходные москва, йога ретрит подмосковье, ретрит в загорянском, ретрит центр подмосковье, ретрит на один день москва, ретрит в крыму, йога ретрит крым, ретрит у моря, медитация в крыму"
        canonicalUrl="https://chanramenn.github.io/Retreat/contacts"
        ogImage="https://chanramenn.github.io/Retreat/images/satsang.jpg"
      />
      <div className="absolute inset-0 bg-white/60 pointer-events-none z-0"></div>
      <div className="relative z-10">
        {/* Removed Hero Section */}
        <div className="pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
            <div className="w-full flex justify-center mb-16">
              <div className="w-full max-w-2xl shadow-2xl p-2 bg-white/90 rounded-2xl">
                <div className="text-3xl text-lavender-dark text-center font-bold mb-6 mt-4">Оставить заявку</div>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="name" placeholder="Ваше имя *" required className="bg-white/10 border border-nature-green/30 rounded-lg px-4 py-3 w-full" />
                    <input name="phone" placeholder="Телефон *" type="tel" required className="bg-white/10 border border-nature-green/30 rounded-lg px-4 py-3 w-full" />
                  </div>
                  <input name="email" placeholder="Email *" type="email" required className="bg-white/10 border border-nature-green/30 rounded-lg px-4 py-3 w-full" />
                  <input name="subject" placeholder="Тема обращения" className="bg-white/10 border border-nature-green/30 rounded-lg px-4 py-3 w-full" />
                  <textarea name="message" placeholder="Ваше сообщение или вопрос" rows={4} required className="bg-white/10 border border-nature-green/30 rounded-lg px-4 py-3 w-full" />
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" required />
                    <label className="text-sm text-muted-foreground">
                      Согласен с обработкой персональных данных и получением информационных сообщений
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-lavender hover:bg-nature-green/90 text-lg py-4 rounded-full text-white font-semibold">
                    Отправить заявку
                  </button>
                </form>
                <span className="block text-center mt-4 text-nature-green font-medium">{result}</span>
              </div>
            </div>
            {/* Контактная информация и соцсети - below */}
            <div className="w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-8 mt-8 text-nature-green text-center">
                Как с нами связаться
              </h2>
              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
                  {contactInfo.filter(c => c.title !== 'Адрес').map((contact, index) => (
                    <Card key={index} className="flex flex-col items-center justify-center aspect-square min-h-[220px] rounded-3xl">
                      <CardHeader className="pb-3 flex flex-col items-center">
                        <CardTitle className="flex flex-col items-center text-lg text-nature-green">
                          <contact.icon className="h-8 w-8 mb-2" />
                          {contact.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-center text-center p-0">
                        {contact.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-nature-green text-center">
                  Мы в социальных сетях
                </h3>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    WhatsApp

                  </Button>
                  {/* <Button variant="outline" size="sm">
                    Instagram
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
