
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'О ретритах', href: '/about' },
    { label: 'Ведущие', href: '/instructors' },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold text-nature-green">
              Ретриты Осознанности
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-nature-green font-medium'
                      : 'text-foreground hover:text-nature-green'
                  } px-3 py-2 text-sm transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link to="/contacts">
              <Button className="bg-nature-green hover:bg-sea-wave/90">
                Записаться
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-nature-green"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-nature-green font-medium'
                    : 'text-foreground hover:text-nature-green'
                } block px-3 py-2 text-base`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contacts">
                <Button className="w-full bg-nature-green hover:bg-nature-green/90">
                  Записаться
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
