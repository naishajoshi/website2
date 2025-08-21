import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Zap, Star } from 'lucide-react';

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  featured?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const equipment: EquipmentItem[] = [
  {
    id: '1',
    name: 'Ducati Performance Helmet',
    category: 'Safety Gear',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhcnxlbnwxfHx8fDE3NTU3NzEwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    icon: Shield
  },
  {
    id: '2',
    name: 'Ducati Racing Jacket',
    category: 'Riding Apparel',
    price: '$695',
    image: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhcnxlbnwxfHx8fDE3NTU3NzEwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Star
  },
  {
    id: '3',
    name: 'Performance Exhaust System',
    category: 'Accessories',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhcnxlbnwxfHx8fDE3NTU3NzEwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Zap
  },
  {
    id: '4',
    name: 'Carbon Fiber Tank Cover',
    category: 'Accessories',
    price: '$549',
    image: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhcnxlbnwxfHx8fDE3NTU3NzEwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Star
  },
  {
    id: '5',
    name: 'Ducati Racing Gloves',
    category: 'Safety Gear',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhcnxlbnwxfHx8fDE3NTU3NzEwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Shield
  },
  {
    id: '6',
    name: 'LED Headlight Kit',
    category: 'Accessories',
    price: '$329',
    image: 'https://images.unsplash.com/photo-1715498780900-61b73ac29b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhcnxlbnwxfHx8fDE3NTU3NzEwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Zap
  },
];

export function EquipmentSection() {
  return (
    <section id="equipment" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            DUCATI <span className="ducati-red">EQUIPMENT</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your riding experience with authentic Ducati gear, 
            accessories, and performance parts designed for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {equipment.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.id} 
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  item.featured ? 'ring-2 ring-[var(--ducati-red)]' : ''
                }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="w-5 h-5 text-[var(--ducati-red)]" />
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-ducati-red text-white px-3 py-1 text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xl ducati-red font-bold mb-4">
                    {item.price}
                  </p>
                  
                  <Button className="w-full bg-gray-900 hover:bg-[var(--ducati-red)] text-white transition-colors rounded-none">
                    ADD TO CART
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-[var(--ducati-red)] text-[var(--ducati-red)] hover:bg-[var(--ducati-red)] hover:text-white px-8 py-4 rounded-none"
          >
            SHOP ALL EQUIPMENT
          </Button>
        </div>
      </div>
    </section>
  );
}