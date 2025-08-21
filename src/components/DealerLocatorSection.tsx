import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

interface DealerInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
  services: string[];
}

const dealers: DealerInfo[] = [
  {
    id: '1',
    name: 'Ducati New York',
    address: '155 W 126th St, New York, NY 10027',
    phone: '(212) 555-0123',
    hours: 'Mon-Sat: 9AM-7PM, Sun: 10AM-5PM',
    distance: '2.3 miles',
    services: ['Sales', 'Service', 'Parts', 'Test Rides']
  },
  {
    id: '2',
    name: 'Manhattan Ducati',
    address: '234 E 58th St, New York, NY 10022',
    phone: '(212) 555-0456',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 9AM-5PM',
    distance: '3.7 miles',
    services: ['Sales', 'Service', 'Test Rides']
  },
  {
    id: '3',
    name: 'Brooklyn Ducati Center',
    address: '789 Atlantic Ave, Brooklyn, NY 11238',
    phone: '(718) 555-0789',
    hours: 'Tue-Sat: 10AM-7PM, Sun: 11AM-4PM',
    distance: '5.1 miles',
    services: ['Sales', 'Parts', 'Accessories']
  },
];

export function DealerLocatorSection() {
  return (
    <section id="dealers" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            FIND A <span className="ducati-red">DEALER</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Locate your nearest Ducati dealer for sales, service, and genuine parts. 
            Experience exceptional service from our certified professionals.
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              placeholder="Enter your zip code or city"
              className="rounded-none"
            />
            <Button className="bg-ducati-red hover:bg-red-700 text-white rounded-none px-6">
              <Navigation className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <Card className="h-96 lg:h-[500px] overflow-hidden border-0 shadow-lg">
              <div className="relative h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map</p>
                  <p className="text-gray-400 text-sm">Dealer locations will be displayed here</p>
                </div>
                
                {/* Mock map pins */}
                <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-ducati-red rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-ducati-red rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-ducati-red rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
            </Card>
          </div>

          {/* Dealer List */}
          <div className="order-1 lg:order-2 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Dealers Near You
            </h3>
            
            {dealers.map((dealer) => (
              <Card key={dealer.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {dealer.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {dealer.distance} away
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-ducati-red hover:bg-red-700 text-white rounded-none"
                    >
                      VISIT
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{dealer.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{dealer.phone}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{dealer.hours}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {dealer.services.map((service) => (
                        <span 
                          key={service}
                          className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button 
              variant="outline"
              className="w-full border-[var(--ducati-red)] text-[var(--ducati-red)] hover:bg-[var(--ducati-red)] hover:text-white rounded-none mt-4"
            >
              VIEW ALL DEALERS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}