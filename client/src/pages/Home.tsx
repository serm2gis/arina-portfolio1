import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Mail, Instagram, Phone } from "lucide-react";

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Портретный сеанс",
      category: "Портреты",
      image: "/portfolio/image1.jpg",
    },
    {
      id: 2,
      title: "Редакционная мода",
      category: "Мода",
      image: "/portfolio/image2.jpg",
    },
    {
      id: 3,
      title: "Художественная фотография",
      category: "Арт",
      image: "/portfolio/image3.jpeg",
    },
    {
      id: 4,
      title: "Творческие портреты",
      category: "Портреты",
      image: "/portfolio/image4.jpg",
    },
  ];

  const services = [
    {
      id: "portraits",
      title: "Портретные сеансы",
      description:
        "Профессиональная портретная фотография, включая фото для профиля, личный брендинг и художественные портреты",
      price: "₽8000 - ₽15000",
      duration: "1-2 часа",
    },
    {
      id: "fashion",
      title: "Мода и редакция",
      description:
        "Высокого уровня модная фотография, лукбуки и редакционные съёмки для брендов и моделей",
      price: "₽15000 - ₽45000",
      duration: "4-8 часов",
    },
    {
      id: "events",
      title: "Фотография событий",
      description:
        "Съёмка свадеб, корпоративных мероприятий, вечеринок и особых случаев",
      price: "₽24000 - ₽60000",
      duration: "Полный день",
    },
    {
      id: "commercial",
      title: "Коммерческая и товарная",
      description:
        "Фотография товаров, коммерческие съёмки и фотография для брендов",
      price: "₽12000 - ₽36000",
      duration: "2-4 часа",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold tracking-tight text-foreground">
            Арина Куряшкина
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Цены
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                  Ловлю моменты, создаю воспоминания
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Профессиональный фотограф, специализирующийся на портретной, модной и
                  редакционной фотографии с современной эстетикой
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Забронировать сеанс
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Смотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
              <img
                src="/portfolio/image1.jpg"
                alt="Героическое изображение"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Избранные работы
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Тщательно отобранная коллекция моих лучших фотографических работ
                в различных жанрах и стилях
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg aspect-square md:aspect-auto md:h-96 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium text-white/80">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Услуги
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Профессиональные фотоуслуги, адаптированные под ваши потребности
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-border"
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    {activeService === service.id && (
                      <p className="text-foreground/80 text-sm">
                        {service.description}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Цены
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Прозрачное ценообразование для всех услуг. Индивидуальные пакеты
                доступны по запросу.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Старт",
                  price: "₽8000",
                  features: [
                    "Одночасовой сеанс",
                    "30-50 отретушированных фото",
                    "Цифровая доставка",
                    "Базовая ретушь",
                  ],
                },
                {
                  name: "Профессиональный",
                  price: "₽22500",
                  features: [
                    "Четырёхчасовой сеанс",
                    "150-200 отретушированных фото",
                    "Цифровая и печатная доставка",
                    "Профессиональная ретушь",
                    "Кустомный альбом",
                  ],
                  highlighted: true,
                },
                {
                  name: "Премиум",
                  price: "₽45000+",
                  features: [
                    "Полнодневная съёмка",
                    "500+ отретушированных фото",
                    "Все форматы доставки",
                    "Профессиональная ретушь",
                    "Премиум альбом",
                    "Консультация включена",
                  ],
                },
              ].map((plan, idx) => (
                <Card
                  key={idx}
                  className={`p-8 space-y-6 ${
                    plan.highlighted
                      ? "border-2 border-primary shadow-lg scale-105"
                      : "border-border"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-3xl font-bold text-primary mt-2">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Начать
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Создадим что-то прекрасное вместе
              </h2>
              <p className="text-lg text-muted-foreground">
                Готовы забронировать сеанс? Свяжитесь со мной и давайте обсудим
                ваши потребности в фотографии.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Почта</h3>
                <a
                  href="mailto:arina@photography.com"
                  className="text-primary hover:underline"
                >
                  arina@photography.com
                </a>
              </Card>

              <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Телефон</h3>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline"
                >
                  +7 (999) 123-45-67
                </a>
              </Card>

              <Card className="p-6 text-center border-border hover:shadow-lg transition-shadow">
                <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/arina"
                  className="text-primary hover:underline"
                >
                  @arina.kuryashkina
                </a>
              </Card>
            </div>

            <div className="bg-secondary/50 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Отправить сообщение
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Ваша почта"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Арина Куряшкина Фотография. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

