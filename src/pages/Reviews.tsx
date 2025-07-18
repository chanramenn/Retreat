import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Анна Смирнова",
      location: "Москва",
      retreat: "Ретрит в горах Крыма",
      date: "июнь 2025",
      rating: 5,
      text: "Дорогая Татьяна, девочки, состояние на ретрите передалось и мне, ну конечно не в полном объеме, но... я прямо летаю и порхаю, как будто с Вами поднималась в горы, смотрела на море, встречала рассветы и посещала святые места! Мне так понравилось! Д спасибо за фото и видео! Спасибо за видео и такой объемный рассказ о Василии Павловиче! Очень красивые стихи об Учителе С.Белова! Благодарю!Благодарю за вебинар БерегаЖизни! Многое открылось, внутри состояние теплоты, нежности и счастья!  Надеюсь, что когда-то буду с Вами уже не онлайн!  СПАСИБО!!!",
      helpful: 23,
      category: "Работа со стрессом",
      beforeAfter: {
        before: "Постоянный стресс, проблемы со сном",
        after: "Спокойствие, улучшение качества сна"
      }
    },
    {
      id: 2,
      name: "Михаил Козлов",
      location: "Москва",
      retreat: "Ретрит в горах Крыма",
      date: "июнь 2025",
      rating: 5,
      text: "Добрый день. Хочу поблагодарить вас девочки за этот ретрит и за то состояние, которое внутри, очень хочется прибывать в нем и сохранить его. Очень благодарна вам ",
      helpful: 19,
      category: "Информационный детокс",
      beforeAfter: {
        before: "Зависимость от гаджетов, рассеянность",
        after: "Улучшение концентрации, осознанное использование технологий"
      }
    },
    {
      id: 3,
      name: "Елена Петрова",
      location: "Москва",
      retreat: "Ретрит в горах Крыма",
      date: "июнь 2025",
      rating: 5,
      text: "Дорогие!  Мы начали с утренней гимнастики и пришли к благодарному кругу принятия. В каждом из Вас я видела себя, через невидимую связь Вы показали мне, что все едино и вечно. Очень рада нашей встрече, встрече с Татьяной, Анной, кто организовал для нас замечательные практики, дальние походы и общение. Мы все положили начало волшебству, которое входит теперь в нашу жизнь каждый день! Ретрит, до свидания! МЫ ПЕРВЫЕ! Выражаю особую благодарность памяти В.П. Гоча, его ученикам, пос. Резервное, крым.",
      helpful: 31,
      category: "Работа с тревожностью",
      beforeAfter: {
        before: "Высокий уровень тревожности",
        after: "Обретение внутреннего спокойствия"
      }
    }
  ];

  const stats = {
    totalReviews: reviews.length,
    averageRating: 4.8,
    ratingDistribution: {
      5: 83,
      4: 17,
      3: 0,
      2: 0,
      1: 0
    },
    categories: [
      { name: "Работа со стрессом", count: 45 },
      { name: "Информационный детокс", count: 32 },
      { name: "Личностный рост", count: 28 },
      { name: "Для начинающих", count: 25 },
      { name: "Работа с тревожностью", count: 22 },
      { name: "Глубокая практика", count: 18 }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Отзывы участников
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные истории людей, которые прошли наши ретриты и изменили свою жизнь
          </p>
        </div>

        {/* Отзывы */}
        <div className="space-y-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{review.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.retreat}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <Badge variant="outline" className="border-nature-green text-nature-green">
                        {review.category}
                      </Badge>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-nature-green/30" />
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </p>
                
                <div className="bg-nature-beige/20 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-nature-green">Результат:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-red-600">До:</span>
                      <p className="text-muted-foreground">{review.beforeAfter.before}</p>
                    </div>
                    <div>
                      <span className="font-medium text-green-600">После:</span>
                      <p className="text-muted-foreground">{review.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{review.helpful} человек считают отзыв полезным</span>
                  <Button variant="ghost" size="sm">
                    Полезно 👍
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
