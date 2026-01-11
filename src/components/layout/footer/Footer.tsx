import { SiInstagram, SiLinkedin, SiVk, SiTelegram } from 'react-icons/si';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/lingua_voice?igsh=dTFnNmd6azltODZx',
      icon: SiInstagram,
      testId: 'instagram-link',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/iuliia-podgurskaia-3a58b4374/',
      icon: SiLinkedin,
      testId: 'linkedin-link',
      color: 'hover:text-blue-600',
    },
    {
      name: 'VK',
      href: 'https://vk.com/yourprofile',
      icon: SiVk,
      testId: 'vk-link',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/lingua_voice',
      icon: SiTelegram,
      testId: 'telegram-link',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <h4 className="text-foreground font-bold text-lg hover:text-primary transition-colors">
                Premium English
              </h4>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Лучший сервис в России
              <br /> для изучения Английского языка
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h5 className="text-foreground font-semibold text-sm">Навигация</h5>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Главная
              </Link>
              <Link
                href="/courses"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Курсы
              </Link>
              <Link
                href="/chatbot"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                24/7 English
              </Link>
              <Link
                href="/eng-test"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Узнай уровень
              </Link>
              <Link
                href="/eng-club"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Разговорный клуб
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-foreground font-semibold text-sm">Контакты</h5>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <FaPhone className="h-4 w-4" />
                lingua_voice
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <FaEnvelope className="h-4 w-4" />
                linguavoice1@yahoo.com
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-lg 
                    bg-muted 
                    text-muted-foreground 
                    hover:bg-accent 
                    hover:text-accent-foreground 
                    transition-all 
                    duration-300 
                    ${link.color}
                  `}
                  aria-label={`Visit our ${link.name} page`}
                  data-testid={link.testId}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href="mailto:linguavoice1@yahoo.com"
                className="
                  p-2 rounded-lg 
                  bg-muted 
                  text-muted-foreground 
                  hover:bg-accent 
                  hover:text-accent-foreground 
                  hover:text-red-500
                  transition-all 
                  duration-300
                "
                aria-label="Send us an email"
                data-testid="email-link"
              >
                <FaEnvelope className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-muted-foreground text-sm mt-8 pt-6 border-t border-border">
          <p>
            &copy; {new Date().getFullYear()} Premium English. Все права
            защищены.
          </p>
          <p className="text-xs mt-1">Разработано Юлией Подгурской</p>
        </div>
      </div>
    </footer>
  );
}
