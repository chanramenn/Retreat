
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Award, BookOpen, Users } from 'lucide-react';

const Instructors = () => {
  const instructors = [
   {
      name: "Татьяна Бялая",
      title: "Дипломированный психолог, специалист по причинной психологии, мастер Школы Причинности",
      image: "/images/tanya.jpg",
      experience: "20+ лет",
      education: "Дипломированный психолог, специализация: Причинная психология",
      specialization: ["Причинная психология", "Индивидуальные приемы", "Работа с тонкими телами и энерго-информационными структурами", "Методика работы в Причинности В.П. Гоча"],
      description: "Работаю в Школе Причинности более 20 лет. Используя Методику работы в Причинности и психологию, провожу индивидуальные приемы. Работаю с тонкими телами человека, с его энерго-информационными структурами. Высшая ступень Мастера в Школе Причинности позволяет мне видеть, отрабатывать и с успехом выводить людей из трудной жизненной ситуации, хронических болезней, депрессии. Помогаю налаживать личную жизнь и решать вопросы взаимоотношений в семье и с близкими. Обучаю Методу работы в Причине В.П. Гоча, веду практики. Провожу авторские семинары.",
      achievements: [
        "Высшая ступень Мастера в Школе Причинности",
        "Более 20 лет работы в Школе Причинности",
        "Проведение индивидуальных приемов и авторских семинаров",
        "Обучение Методу работы в Причине В.П. Гоча"
        
      ],
      languages: ["Русский"],
      contact: "tatyana@retreat-crimea.ru"
    }, 
    {
      name: "Анна Соловьёва",
      title: "Бизнес-тренер, преподаватель йоги, кинезиолог, биодинамист, специалист по ТКМ и эмоциональной коррекции",
      image: "/images/anna1.jpg",
      experience: "15 лет",
      education: [
        "Преподаватель йоги (Федерация йоги России, программы Садхгуру)",
        "Кинезиолог (Академия медицинской кинезиологии Л.Ф. Васильевой)",
        "Биодинамист (Школа прицельной биодинамики РОВА)",
        "Специалист в области традиционной китайской медицины, преподаватель цигун (Академия 'Познай себя' В.Заворотного)",
        
      ].join(', '),
      specialization: [
        "Йога", "Цигун", "Медитация", "Биодинамика", "Кинезиологический массаж", "Традиционная китайская медицина", "Эмоциональная коррекция"
      ],
      description: "Провожу практики йоги, цигун, медитации, сеансы биодинамики и кинезиологического массажа. Помогаю людям восстанавливать свое физическое, энергетическое, эмоциональное здоровье, обретать состояние внутреннего баланса и гармонии.",
      achievements: [
        "Бизнес-тренер",
        "Преподаватель йоги (Федерация йоги России, программы Садхгуру)",
        "Кинезиолог (Академия медицинской кинезиологии Л.Ф. Васильевой)",
        "Биодинамист (Школа прицельной биодинамики РОВА)",
        "Специалист по традиционной китайской медицине и преподаватель цигун (Академия 'Познай себя' В.Заворотного)",
        "Специалист по эмоциональной коррекции (Школа эмоциональной коррекции Н.Волынкина)"
      ],
      languages: ["Русский"],
      contact: "anna@retreat-crimea.ru"
    },
    
    
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundImage: "url('/images/flowers2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-0"></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/sky9.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-white/20"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Наши ведущие
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Квалифицированные мастера медитативных техник с многолетним опытом 
              и специальной подготовкой для преподавания осознанности
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-0 max-w-9xl">
          <div className="bg-white/80 rounded-2xl shadow-md p-16 flex flex-col md:flex-row items-center gap-16 min-h-[480px]">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-nature-green mb-4 text-center md:text-left">Давайте знакомиться :)</h2>
              <p className="text-2xl text-muted-foreground mb-6 text-center md:text-left">
                Мы, Татьяна Бялая и Анна Соловьева, приглашаем  принять участие в наших совместных практиках. Мы поделимся лучшими трансформационными инструментами, собранными за годы работы. Если вы хотите изменить свою жизнь, улучшить себя, найти новые направления развития - присоединяйтесь!<br/><br/>Ждем вас
              </p>
            </div>
            <div className="flex-shrink-0 w-160 h-80 lg:w-[535px] lg:h-[630px] rounded-2xl overflow-hidden shadow-md">
              <img src="/images/girls.jpg" alt="Татьяна Бялая и Анна Соловьева" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <div className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {instructors.map((instructor, index) => (
                <Card key={index} className="overflow-hidden">
                  {/* Square photo at the top */}
                  <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="text-center">
                      <CardTitle className="text-2xl text-nature-green mb-1">
                        {instructor.name}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground mb-2">
                        {instructor.title}
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          Опыт: {instructor.experience}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      {instructor.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2 text-nature-green flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Образование
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {instructor.education}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-nature-green">
                        Специализация
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.specialization.map((spec, i) => (
                          <Badge key={i} variant="secondary" className="bg-nature-beige/30">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-nature-green">
                        Достижения
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {instructor.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-nature-green mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-end items-center pt-4 border-t">
                      {/* <Button
                        variant="outline"
                        size="sm"
                        className="border-nature-green text-nature-green hover:bg-nature-green hover:text-white"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                         связаться 
                         
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
