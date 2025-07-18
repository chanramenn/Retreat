import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Добрый день. Хочу поблагодарить вас девочки за этот ретрит и за то состояние, которое внутри, очень хочется прибывать в нем и сохранить его.  Очень благодарна вам ",
      rating: 5,
      retreat: "Ретрит в горах Крыма, июнь 2025"
    },
    {
      name: "Михаил Козлов",
      text: "Отличная организация, профессиональные преподаватели. Информационный детокс был именно тем, что нужно. Рекомендую всем, кто устал от стресса.",
      rating: 5,
      retreat: "Ретрит в горах Крыма, июнь 2025"
    },
    {
      name: "Елена Петрова",
      text: "Прекрасное место, вкусная еда, атмосфера полного спокойствия. Научилась управлять стрессом и тревожностью. Планирую вернуться снова.",
      rating: 5,
      retreat: "Ретрит в горах Крыма, июнь 2025"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-lavender-new sm:text-4xl font-bold text-foreground mb-4">
            Отзывы участников
          </h2>
          <p className="text-lg text-muted-foreground">
            Что говорят люди о своем опыте на наших ретритах
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-8 min-w-[1200px]" style={{width: '100%', scrollSnapType: 'x mandatory'}}>
            {Array.from({ length: 8 }).map((_, index) => (
              index === 0 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review1.jpg" alt="Review 1" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 1 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review18.png" alt="Review 2" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 2 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review12.jpg" alt="Review 3" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 3 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review13.jpg" alt="Review 4" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 4 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white/0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review17.jpg" alt="Review 5" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 5 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review16.jpg" alt="Review 6" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 6 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review14.jpg" alt="Review 7" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : index === 7 ? (
                <div
                  key={index}
                  className="w-96 h-[36rem] bg-white0 rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                  style={{ minWidth: '24rem', minHeight: '36rem' }}
                >
                  <img src="/images/review15.jpg" alt="Review 8" className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
