import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import SEO from '@/components/SEO';

const About = () => {
  const features = [
    {
      title: "УНИКАЛЬНЫЕ МЕСТА СИЛЫ",
      description: "Лучшие места Крыма и Подмосковья помогают сбросить усталость, отдохнуть и наполнится состоянием гармонии и радости"
    },
    {
      title: "ТЕПЛОЕ ПРОСТРАНСТВО",
      description: "Мы создаем теплое, мягкое и душевное пространство которое каждому чувствовать себя спокойно и безопасно в общих практиках"
    },
    {
      title: "ВСЕГДА СВЕЖАЯ ПРОГРАММА",
      description: "Каждый наш ретрит уникален. Нам всегда есть чем поделиться!"
    },
    {
      title: "АТМОСФЕРА ТИШИНЫ И ГАРМОНИИ",
      description: "Наши практики медитации будут интересны как начинающим практикующим, так и участникам с глубоким опытом погружению внутрь себя"
    },
    {
      title: "ТЕОРИЯ И ПРАКТИКА ВМЕСТЕ",
      description: "Мы совмещаем небольшую теоретическую часть с глубокой индивидуальной проработкой для оптимального результата"
    },
    {
      title: "ПРАКТИКИ ОСОЗНАННОСТИ",
      description: "Мы предлагаем разные практики для того, чтобы помочь стать каждому более присутствующими и бдительными"
    }
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/images/flowers.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        zIndex: 0,
      }}
    >
      <SEO 
        title="О наших ретритах | Духовные практики и медитация в Крыму и Подмосковье"
        description="Светский подход к практикам осознанности, основанный на научных исследованиях и многовековых традициях медитации. Однодневные ретриты в Подмосковье и пятидневные ретриты в Крыму."
        keywords="ретрит самопознания, оздоровительный ретрит, ретрит перезагрузка, купить ретрит, центр медитации, ретрит в подмосковье, ретрит московская область, однодневный ретрит в подмосковье, ретрит на выходные москва, йога ретрит подмосковье, ретрит в загорянском, ретрит центр подмосковье"
        canonicalUrl="https://chanramenn.github.io/Retreat/about"
        ogImage="https://chanramenn.github.io/Retreat/images/satsang.jpg"
      />
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none" />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/sea1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-white/0"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              О наших ретритах
            </h1>
            <p className=" text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Светский подход к практикам осознанности, основанный на научных исследованиях 
              и многовековых традициях медитации
            </p>
          </div>
        </section>

        {/* Wisdom Block */}
        <div className="w-full bg-white py-12 flex items-center justify-center">
          <p className="text-4xl text-muted-foreground mb-0 text-center max-w-10xl mx-auto">
            <span className="luxurious-script italic">Путь один - внутрь себя</span>
          </p>
        </div>

        <div className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                О наших ретритах
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Светский подход к практикам осознанности, основанный на научных исследованиях 
                и многовековых традициях медитации
              </p>
            </div> */}

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-nature-green">
                Виды ретритов
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white/90 rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-nature-green mb-4">Однодневный ретрит в Подмосковье</h3>
                  <p className="text-muted-foreground mb-0">
                    Однодневный ретрит в Подмосковье проходит по субботам, и это отличная возможность отдохнуть и быстро восстановиться после рабочей недели тем, у кого нет времени на длительные поездки. Прекрасная природа и уютная атмосфера помогут почувствовать приятное расслабление и наполненность всего за один день.
                  </p>
                </div>
                <div className="bg-white/90 rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-nature-green mb-4">Пятидневный ретрит в Крыму</h3>
                  <p className="text-muted-foreground mb-0">
                    Пятидневный ретрит в Крыму подойдет тем, кто готов совместить ретрит с пляжным и экскурсионным отдыхом. Крымская природа, горы и моря способствуют полной перезагрузке и зарядят энергией на целый год.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-lavender-dark">
                Особенности наших ретритов
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="relative group h-48 flex items-center justify-center bg-white/80 rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all">
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                      <span className="text-lg text-lavender-dark font-bold text-center px-4 w-full">{feature.title}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-6">
                      <span className="text-muted-foreground text-center w-full">{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SCHEDULE SECTION MOVED FROM Schedule.tsx --- */}
            <div className="min-h-screen pt-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                  <h1 className="text-4xl text-lavender-new sm:text-5xl font-bold text-foreground mb-6">
                    Расписание ретритов
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Выберите программу, которая подходит вашему уровню практики и доступному времени
                  </p>
                </div>

                <div className="space-y-8">
                  {/* --- BEGIN SCHEDULE CARDS --- */}
                  {/* Випассана в горах Крыма */}
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/sunrise1.jpg')" }}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">Ретрит ДАРЫ АВГУСТА в Крыму</h3>
                        <p className="text-xl mb-4">15-19 августа 2025 • 5 дней</p>
                        <p className="text-lg opacity-90">Интенсивная практика медитации осознанности в окружении крымских гор</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold">22 000 ₽</span>
                        <div className="flex gap-4">
                          <Link to="/retreats/vipassana-mountains">
                            <Button className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black">
                              Подробнее
                            </Button>
                          </Link>
                          <Link to="/contacts">
                            <Button className="bg-lavender-dark hover:bg-nature-green/90">
                              Записаться
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ретрит в Загорянском */}
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/retreatProgram2.jpg')" }}
                    >
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">Ретрит в Загорянском</h3>
                        <p className="text-xl mb-4">сентябрь 2025 • 1 день</p>
                        <p className="text-lg opacity-90">Однодневный ретрит в Подмосковье - короткая, но эффективная перезагрузка</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold">7 700 ₽</span>
                        <div className="flex gap-4">
                          <Link to="/retreats/one-day-sea">
                            <Button className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black">
                              Подробнее
                            </Button>
                          </Link>
                          <Link to="/contacts">
                            <Button className="bg-lavender-dark hover:bg-nature-green/90">
                              Записаться
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --- END SCHEDULE CARDS --- */}
                </div>

                <div className="mt-16 bg-nature-green/10 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-lavender-dark">
                    Не нашли подходящий ретрит?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Оставьте заявку, и мы сообщим вам о новых программах и датах проведения ретритов
                  </p>
                  <Link to="/contacts">
                    <Button className="bg-lavender hover:bg-nature-green/90">
                      Оставить заявку на уведомления
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* --- END SCHEDULE SECTION --- */}

            <div className="bg-nature-beige/20 rounded-lg p-8">
              <h2 className="text-4xl font-bold text-center mb-8 text-lavender-new">
                Фотогалерея ретрит-центра
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <img src="/images/retreat1.jpg" alt="..." />
                <img src="/images/retreat2.jpg" alt="..." />
                <img src="/images/retreat3.jpg" alt="..." />
                <img src="/images/retreat4.jpg" alt="..." />
                <img src="/images/retreat5.jpg" alt="..." />
                <img src="/images/retreat6.jpg" alt="..." />
                <img src="/images/retreat7.jpg" alt="..." />
                <img src="/images/retreat8.jpg" alt="..." />
                <img src="/images/retreat9.jpg" alt="..." />  
                <img src="/images/retreat10.jpg" alt="..." />
                <img src="/images/retreat11.jpg" alt="..." />
                <img src="/images/retreat12.jpg" alt="..." />


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
