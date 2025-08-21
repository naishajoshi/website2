import { Separator } from './ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  motorcycles: {
    title: 'Motorcycles',
    links: [
      'Superbike',
      'Hypermotard',
      'Monster',
      'Multistrada',
      'Scrambler',
      'Electric'
    ]
  },
  services: {
    title: 'Services',
    links: [
      'Find a Dealer',
      'Test Ride',
      'Service Booking',
      'Warranty',
      'Financing',
      'Insurance'
    ]
  },
  racing: {
    title: 'Racing',
    links: [
      'MotoGP',
      'WorldSBK',
      'Ducati Corse',
      'Racing Heritage',
      'Riders',
      'Results'
    ]
  },
  support: {
    title: 'Support',
    links: [
      'Contact Us',
      'Owner\'s Manual',
      'Parts & Service',
      'Technical Support',
      'Recalls',
      'FAQ'
    ]
  }
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function Footer() {
  return (
    <footer className="bg-ducati-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold ducati-red mb-6">
              DUCATI
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Born in Bologna, Italy, Ducati has been crafting motorcycles 
              that combine Italian style with racing performance since 1926. 
              Join the brotherhood of passionate riders worldwide.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--ducati-red)] flex-shrink-0" />
                <span className="text-gray-300">Via Cavalieri Ducati, Bologna, Italy</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--ducati-red)] flex-shrink-0" />
                <span className="text-gray-300">+1 (800) DUCATI-1</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--ducati-red)] flex-shrink-0" />
                <span className="text-gray-300">info@ducati.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-bold text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[var(--ducati-red)] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
            <span>&copy; 2025 Ducati Motor Holding S.p.A.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-[var(--ducati-red)] rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}