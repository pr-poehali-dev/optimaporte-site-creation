import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Классика Дуб",
    price: 15900,
    oldPrice: 18900,
    material: "wood",
    color: "oak",
    size: "standard",
    badge: "Хит продаж",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/ecb4bfed-ea4a-4a7d-93e6-24e8fc0d5f5f.jpg"
  },
  {
    id: 2,
    name: "Модерн Стекло",
    price: 27500,
    material: "glass",
    color: "black",
    size: "standard",
    badge: "Новинка",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/123e6114-c9d2-44bb-9a16-2c0905af096c.jpg"
  },
  {
    id: 3,
    name: "Элегант Белая",
    price: 16800,
    material: "wood",
    color: "white",
    size: "standard",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/520d56c8-2de4-49fd-a5ce-1f5def633987.jpg"
  },
  {
    id: 4,
    name: "Премиум Дуб",
    price: 24900,
    material: "wood",
    color: "oak",
    size: "large",
    badge: "Премиум",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/796af2ce-66bc-477a-b000-3ace6be30e9c.jpg"
  },
  {
    id: 5,
    name: "Классик Белая XL",
    price: 19900,
    material: "wood",
    color: "white",
    size: "large",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/25e2e861-1388-43f2-830f-2d6cd7947a1c.jpg"
  },
  {
    id: 6,
    name: "Лофт Металл",
    price: 32900,
    oldPrice: 35900,
    material: "metal",
    color: "black",
    size: "large",
    badge: "Акция",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/c9b19374-6635-418e-81ff-9e16e337542d.jpg"
  },
  {
    id: 7,
    name: "Стандарт Дуб",
    price: 12900,
    material: "wood",
    color: "oak",
    size: "standard",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/ecb4bfed-ea4a-4a7d-93e6-24e8fc0d5f5f.jpg"
  },
  {
    id: 8,
    name: "Люкс Белая",
    price: 21500,
    material: "wood",
    color: "white",
    size: "standard",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/520d56c8-2de4-49fd-a5ce-1f5def633987.jpg"
  },
  {
    id: 9,
    name: "Гранд Стекло",
    price: 29900,
    material: "glass",
    color: "black",
    size: "large",
    badge: "Хит",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/123e6114-c9d2-44bb-9a16-2c0905af096c.jpg"
  }
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [materialFilter, setMaterialFilter] = useState<string>("all");
  const [colorFilter, setColorFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000]);

  const filteredProducts = products.filter(product => {
    const matchesMaterial = materialFilter === "all" || product.material === materialFilter;
    const matchesColor = colorFilter === "all" || product.color === colorFilter;
    const matchesSize = sizeFilter === "all" || product.size === sizeFilter;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesMaterial && matchesColor && matchesSize && matchesPrice;
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-foreground tracking-tight">
              OPTIMA PORTE
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                Каталог
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium text-foreground hover:text-muted-foreground transition">
                Контакты
              </button>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+74951234567" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition">
                +7 (495) 123-45-67
              </a>
              <Button size="sm">
                Заказать звонок
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-6 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-left text-lg text-foreground hover:text-muted-foreground transition">
                    Главная
                  </button>
                  <button onClick={() => scrollToSection('catalog')} className="text-left text-lg text-foreground hover:text-muted-foreground transition">
                    Каталог
                  </button>
                  <button onClick={() => scrollToSection('advantages')} className="text-left text-lg text-foreground hover:text-muted-foreground transition">
                    Преимущества
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-left text-lg text-foreground hover:text-muted-foreground transition">
                    О компании
                  </button>
                  <button onClick={() => scrollToSection('services')} className="text-left text-lg text-foreground hover:text-muted-foreground transition">
                    Услуги
                  </button>
                  <button onClick={() => scrollToSection('contacts')} className="text-left text-lg text-foreground hover:text-muted-foreground transition">
                    Контакты
                  </button>
                  <div className="pt-4 border-t">
                    <a href="tel:+74951234567" className="text-lg font-semibold text-foreground block mb-4">
                      +7 (495) 123-45-67
                    </a>
                    <Button className="w-full">
                      Заказать звонок
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Новые идеи,<br />новые возможности
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Производство и продажа межкомнатных и входных дверей премиум-класса. 
              Индивидуальный подход, европейское качество, гарантия результата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('catalog')}>
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Award" size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">
                Официальная гарантия на все двери до 5 лет
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Truck" size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">
                Доставка по Москве и области в день заказа
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Опытные мастера</h3>
              <p className="text-sm text-muted-foreground">
                Профессиональный монтаж от специалистов с опытом 10+ лет
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Percent" size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Выгодные цены</h3>
              <p className="text-sm text-muted-foreground">
                Работаем напрямую с производителями без посредников
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Каталог дверей</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Широкий ассортимент межкомнатных и входных дверей на любой вкус и бюджет
          </p>
          
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Материал</label>
              <Select value={materialFilter} onValueChange={setMaterialFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите материал" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все материалы</SelectItem>
                  <SelectItem value="wood">Дерево</SelectItem>
                  <SelectItem value="glass">Стекло</SelectItem>
                  <SelectItem value="metal">Металл</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Цвет</label>
              <Select value={colorFilter} onValueChange={setColorFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите цвет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все цвета</SelectItem>
                  <SelectItem value="white">Белый</SelectItem>
                  <SelectItem value="black">Черный</SelectItem>
                  <SelectItem value="oak">Дуб</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Размер</label>
              <Select value={sizeFilter} onValueChange={setSizeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите размер" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все размеры</SelectItem>
                  <SelectItem value="standard">Стандартный</SelectItem>
                  <SelectItem value="large">Увеличенный</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
              </label>
              <Slider
                min={0}
                max={50000}
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      Подробнее
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-2">Товары не найдены</p>
              <p className="text-sm text-muted-foreground">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать еще товары
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              О компании OPTIMA PORTE
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                OPTIMA PORTE — это более 15 лет успешной работы на рынке производства 
                и продажи межкомнатных и входных дверей премиум-класса.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы предлагаем широкий ассортимент качественных дверей от ведущих 
                европейских и российских производителей. В нашем каталоге представлены 
                двери для любого интерьера — от классики до современного минимализма.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">моделей в каталоге</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Наши услуги
          </h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Полный цикл работ от консультации до установки под ключ
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Ruler" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Бесплатный замер</h3>
              <p className="text-muted-foreground mb-4">
                Профессиональный замер с выездом на объект. Консультация специалиста 
                и помощь в выборе подходящей модели.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Заказать замер
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wrench" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Установка дверей</h3>
              <p className="text-muted-foreground mb-4">
                Качественный монтаж от опытных мастеров. Соблюдение всех технологий 
                и стандартов установки с гарантией.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Узнать стоимость
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Доставка</h3>
              <p className="text-muted-foreground mb-4">
                Быстрая и аккуратная доставка по Москве и Московской области. 
                Возможна доставка в другие регионы.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Условия доставки
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Индивидуальный дизайн</h3>
              <p className="text-muted-foreground mb-4">
                Разработка дверей по индивидуальным размерам и дизайну. 
                Реализация любых архитектурных решений.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Оставить заявку
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="ShieldCheck" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Гарантия и сервис</h3>
              <p className="text-muted-foreground mb-4">
                Официальная гарантия на все двери и комплектующие. 
                Сервисное обслуживание в течение всего срока эксплуатации.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Условия гарантии
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Удобная оплата</h3>
              <p className="text-muted-foreground mb-4">
                Различные способы оплаты: наличные, банковские карты, 
                безналичный расчет. Рассрочка 0%.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Способы оплаты
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Контакты
          </h2>
          <p className="text-muted-foreground mb-12 text-center">
            Свяжитесь с нами любым удобным способом
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Адрес салона</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1, офис 100</p>
                  <p className="text-sm text-muted-foreground mt-1">м. Площадь Революции, 5 мин пешком</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                  <a href="tel:+74951234567" className="text-muted-foreground hover:text-foreground transition">
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Звонок бесплатный по России</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@optimaporte.ru" className="text-muted-foreground hover:text-foreground transition">
                    info@optimaporte.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Заказать звонок</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Оставьте свои контакты и мы перезвоним в течение 10 минут
              </p>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя *" required />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон *" required />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input placeholder="Комментарий" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OPTIMA PORTE</h3>
              <p className="text-sm text-background/80">
                Производство и продажа качественных дверей с 2009 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition">Межкомнатные двери</a></li>
                <li><a href="#" className="hover:text-background transition">Входные двери</a></li>
                <li><a href="#" className="hover:text-background transition">Двери из массива</a></li>
                <li><a href="#" className="hover:text-background transition">Стеклянные двери</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition">О нас</a></li>
                <li><a href="#" className="hover:text-background transition">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-background transition">Гарантии</a></li>
                <li><a href="#" className="hover:text-background transition">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@optimaporte.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 OPTIMA PORTE. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-background transition">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
