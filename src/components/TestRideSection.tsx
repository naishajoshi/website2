import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function TestRideSection() {
  return (
    <section id="test-ride" className="py-16 lg:py-24 bg-ducati-red">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            EXPERIENCE THE <span className="text-yellow-300">THRILL</span>
          </h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Feel the power, precision, and passion of Ducati. Book a test ride 
            and discover why Ducati riders are part of a special brotherhood.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Easy Booking
                </h3>
                <p className="text-white/90 text-sm">
                  Schedule your test ride online in just a few clicks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Multiple Locations
                </h3>
                <p className="text-white/90 text-sm">
                  Find a Ducati dealer near you for the ultimate experience
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Flexible Hours
                </h3>
                <p className="text-white/90 text-sm">
                  Test rides available throughout the week and weekends
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-[var(--ducati-red)] hover:bg-gray-100 px-8 py-4 text-lg rounded-none font-bold w-full sm:w-auto"
            >
              BOOK TEST RIDE
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--ducati-red)] px-8 py-4 text-lg rounded-none w-full sm:w-auto"
            >
              FIND DEALER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}