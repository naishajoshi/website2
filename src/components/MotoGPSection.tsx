import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ChevronRight } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const news: NewsArticle[] = [
  {
    id: '1',
    title: 'Ducati Dominates at Silverstone: Double Victory in WorldSBK',
    summary: 'An incredible weekend for Ducati as both riders secured podium positions in challenging conditions at the British circuit.',
    image: 'https://images.unsplash.com/photo-1565544843827-187614119ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvZ3AlMjByYWNpbmclMjB0cmFja3xlbnwxfHx8fDE3NTU3NzEwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Marco Rossi',
    date: '2025-08-20',
    category: 'WorldSBK',
    readTime: '3 min read'
  },
  {
    id: '2',
    title: 'New Ducati Panigale V4 R Sets Lap Record at Mugello',
    summary: 'The latest iteration of our flagship superbike proves its worth on the legendary Italian circuit with unprecedented performance.',
    image: 'https://images.unsplash.com/photo-1565544843827-187614119ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvZ3AlMjByYWNpbmclMjB0cmFja3xlbnwxfHx8fDE3NTU3NzEwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Elena Ferrari',
    date: '2025-08-18',
    category: 'Technology',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'Behind the Scenes: MotoGP Team Preparation',
    summary: 'Exclusive access to Ducati Corse as they prepare for the upcoming Austrian Grand Prix. See what goes into race-day success.',
    image: 'https://images.unsplash.com/photo-1565544843827-187614119ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvZ3AlMjByYWNpbmclMjB0cmFja3xlbnwxfHx8fDE3NTU3NzEwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Giovanni Bianchi',
    date: '2025-08-15',
    category: 'MotoGP',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Ducati Celebrates 30 Years of Racing Excellence',
    summary: 'A look back at three decades of innovation, victories, and the passionate engineers who made it all possible.',
    image: 'https://images.unsplash.com/photo-1565544843827-187614119ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvZ3AlMjByYWNpbmclMjB0cmFja3xlbnwxfHx8fDE3NTU3NzEwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Andrea Conte',
    date: '2025-08-12',
    category: 'Heritage',
    readTime: '6 min read'
  },
];

export function MotoGPSection() {
  return (
    <section id="motogp" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            RACING <span className="ducati-red">NEWS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest from Ducati Corse, MotoGP achievements, 
            and behind-the-scenes stories from the world of motorcycle racing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {news.map((article, index) => (
            <Card 
              key={article.id} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'
              }`}>
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-ducati-red text-white px-3 py-1 text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[var(--ducati-red)] transition-colors ${
                  index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'
                }`}>
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="font-medium">{article.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between p-0 h-auto text-[var(--ducati-red)] hover:text-red-700 hover:bg-transparent group"
                >
                  READ MORE
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-[var(--ducati-red)] text-[var(--ducati-red)] hover:bg-[var(--ducati-red)] hover:text-white px-8 py-4 rounded-none"
          >
            VIEW ALL NEWS
          </Button>
        </div>
      </div>
    </section>
  );
}