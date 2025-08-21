import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MotorcycleModel {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    weight: string;
  };
}

const models: MotorcycleModel[] = [
  {
    id: '1',
    name: 'Panigale V4',
    category: 'Superbike',
    price: 'From $24,995',
    image: 'https://images.unsplash.com/photo-1726737575750-c4969c817e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWNhdGklMjBwYW5pZ2FsZSUyMHNwb3J0YmlrZXxlbnwxfHx8fDE3NTU3NzEwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      engine: '1103cc',
      power: '214 hp',
      weight: '195 kg'
    }
  },
  {
    id: '2',
    name: 'Monster 1200',
    category: 'Naked',
    price: 'From $16,995',
    image: 'https://images.unsplash.com/photo-1685164815367-db4f6ff3a638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWNhdGklMjBtb3RvcmN5Y2xlJTIwcmVkfGVufDF8fHx8MTc1NTc3MTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      engine: '1198cc',
      power: '147 hp',
      weight: '211 kg'
    }
  },
  {
    id: '3',
    name: 'Multistrada V4',
    category: 'Adventure',
    price: 'From $22,995',
    image: 'https://images.unsplash.com/photo-1685164815367-db4f6ff3a638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWNhdGklMjBtb3RvcmN5Y2xlJTIwcmVkfGVufDF8fHx8MTc1NTc3MTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      engine: '1158cc',
      power: '170 hp',
      weight: '243 kg'
    }
  },
  {
    id: '4',
    name: 'Scrambler Icon',
    category: 'Scrambler',
    price: 'From $9,995',
    image: 'https://images.unsplash.com/photo-1685164815367-db4f6ff3a638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWNhdGklMjBtb3RvcmN5Y2xlJTIwcmVkfGVufDF8fHx8MTc1NTc3MTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: {
      engine: '803cc',
      power: '73 hp',
      weight: '189 kg'
    }
  },
];

export function ModelsSection() {
  return (
    <section id="models" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            OUR <span className="ducati-red">MOTORCYCLES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From track-focused superbikes to versatile adventure machines, 
            discover the Ducati that matches your passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model) => (
            <Card key={model.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-ducati-red text-white px-3 py-1 text-sm font-medium">
                    {model.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {model.name}
                </h3>
                <p className="text-2xl ducati-red font-bold mb-4">
                  {model.price}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Engine:</span>
                    <span className="font-medium">{model.specs.engine}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Power:</span>
                    <span className="font-medium">{model.specs.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{model.specs.weight}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-ducati-red hover:bg-red-700 text-white rounded-none">
                  VIEW DETAILS
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
            VIEW ALL MODELS
          </Button>
        </div>
      </div>
    </section>
  );
}