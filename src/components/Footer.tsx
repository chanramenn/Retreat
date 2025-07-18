
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-green text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Навигация</h3>
            <div className="space-y-3">
              <Link to="/" className="block opacity-90 hover:opacity-100 transition-opacity">
                Главная
              </Link>
              <Link to="/about" className="block opacity-90 hover:opacity-100 transition-opacity">
                О ретритах
              </Link>
              <Link to="/instructors" className="block opacity-90 hover:opacity-100 transition-opacity">
                Ведущие
              </Link>
              <Link to="/contacts" className="block opacity-90 hover:opacity-100 transition-opacity">
                Контакты
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="opacity-90">+7 (916) 030-13-00</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="opacity-90">a.solovieva.v@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Режим работы</h4>
                <p className="opacity-90">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Социальные сети</h3>
            <div className="space-y-4">
              <a href="https://t.me/prichina_i_karma" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 opacity-90 hover:opacity-100 transition-opacity">
                <MessageCircle className="h-5 w-5" />
                <span>Telegram</span>
              </a>
              <a href="https://wa.me/79160301300" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 opacity-90 hover:opacity-100 transition-opacity">
                <Phone className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              {/* <a href="https://instagram.com/retreat_crimea" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="opacity-90">
            © 2024 Ретриты Медитации Осознанности в Крыму и Подмосковье. Все права защищены.
          </p>
          <p className="opacity-70 mt-2 text-sm">
            Научно-обоснованный светский подход к практикам осознанности
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
