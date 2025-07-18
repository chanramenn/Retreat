import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const RetreatPrograms = () => {
  const upcomingRetreats = [
    {
      id: 1,
      title: "Ретрит ДАРЫ АВГУСТА в Крыму",
      dates: "15-19 августа 2025",
      duration: "5 дней",
      description: "Пять незабываемых дней практики в окружении Крымских гор и на побережье Черного моря! Ежедневные практики йоги и цигун, ежедневные походы и экскурсии, вечерние медитации и чаепития у моря, ну и конечно – купание! В чистейших бухтах Ласпи, Форос, Фиолент!"      
      ,
      price: "22 000 ₽",
      available: true
    },
    {
      id: 2,
      title: "Загорянский ретрит",
      dates: "сентябрь 2025",
      duration: "1 день",
      description: "Однодневный ретрит в Подмосковье - это возможность короткой, но эффективной перезагрузки! На один субботний день мы собираемся в Йога Дом в старом дачном поселке Загорянский, расположенном в сосновом лесу.",
      price: "7 700 ₽",
      available: true
    }
  ];

  const pastRetreats = [
    {
      id: 3,
      title: "Весенний ретрит в Загорянском",
      dates: "26 апреля 2025",
      duration: "1 день",
      description: "Теплая живая встреча с чаепитием, играми, совместными практиками и медитациями.",
      participants: 12,
      completed: true
    },
    {
      id: 4,
      title: "Ретрит в Крыму",
      dates: "20-24 июня 2025",
      duration: "5 дней",
      description: "Пребывание и практики в Месте Силы, незабываемые горные походы и великолепные морские пляжи.",
      participants: 12,
      completed: true
    }
  ];

  return (
    <section className="py-16 bg-nature-beige/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-nature-green sm:text-4xl font-bold text-foreground mb-4">
            Программы Ретритов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Выбирайте подходящую по времени программу. А также посмотрите отчеты об уже проведенных ретритах!

          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-nature-green">
            Предстоящие ретриты
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingRetreats.map((retreat) => (
              <Card key={retreat.id} className="shadow-lg hover:shadow-xl transition-shadow">
                {/* Square photo placeholder at the top */}
                {retreat.id === 1 ? (
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden mb-4">
                    <img src="/images/sun.jpg" alt={`Ретрит в Крыму - ${retreat.title} - йога и медитация у моря`} className="object-cover w-full h-full" />
                  </div>
                ) : retreat.id === 2 ? (
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden mb-4">
                    <img src="/images/retreatProgram2.jpg" alt={`Однодневный ретрит в Подмосковье - ${retreat.title} - медитация и йога для перезагрузки`} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden mb-4">
                    <span className="text-gray-400 text-lg">Фото</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-nature-green">{retreat.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {retreat.dates} • {retreat.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{retreat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-nature-green">{retreat.price}</span>
                    <div className="flex gap-2">
                      {retreat.id === 1 ? (
                        <Link to="/retreats/vipassana-mountains">
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                        </Link>
                      ) : retreat.id === 2 ? (
                        <Link to="/retreats/one-day-sea">
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" size="sm">
                          Подробнее
                        </Button>
                      )}
                      <Link to="/contacts">
                        <Button size="sm" className="bg-nature-green hover:bg-nature-green/90">
                          Записаться
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-muted-foreground">
            Проведенные ретриты
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pastRetreats.map((retreat) => (
              <Card key={retreat.id} className="opacity-80">
                <CardHeader>
                  <CardTitle className="text-muted-foreground">{retreat.title}</CardTitle>
                  <CardDescription>
                    {retreat.dates} • {retreat.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{retreat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Участников: {retreat.participants}
                    </span>
                    <Button variant="outline" size="sm" disabled>
                      Завершен
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatPrograms;
