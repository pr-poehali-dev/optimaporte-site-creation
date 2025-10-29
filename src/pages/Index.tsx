import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const products = [
  {
    id: 1,
    name: "Дверь Модерн Дуб",
    price: 15000,
    material: "wood",
    color: "oak",
    size: "standard",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/ecb4bfed-ea4a-4a7d-93e6-24e8fc0d5f5f.jpg"
  },
  {
    id: 2,
    name: "Дверь Гласс Черная",
    price: 25000,
    material: "glass",
    color: "black",
    size: "standard",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/123e6114-c9d2-44bb-9a16-2c0905af096c.jpg"
  },
  {
    id: 3,
    name: "Дверь Класс Белая",
    price: 18000,
    material: "wood",
    color: "white",
    size: "standard",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/520d56c8-2de4-49fd-a5ce-1f5def633987.jpg"
  },
  {
    id: 4,
    name: "Дверь Элит Дуб",
    price: 22000,
    material: "wood",
    color: "oak",
    size: "large",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/ecb4bfed-ea4a-4a7d-93e6-24e8fc0d5f5f.jpg"
  },
  {
    id: 5,
    name: "Дверь Люкс Белая",
    price: 20000,
    material: "wood",
    color: "white",
    size: "large",
    image: "https://cdn.poehali.dev/projects/1517aa3f-a207-43f8-89b2-0988a7f90175/files/520d56c8-2de4-49fd-a5ce-1f5def633987.jpg"
  },
  {
    id: 6,
    name: "Дверь Премиум Стекло",
    price: 30000,
    material: "glass",
    color: "black",
    size: "large",
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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground">OPTIMA PORTE</Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-muted-foreground transition">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-muted-foreground transition">Каталог</a>
            <a href="#about" className="text-foreground hover:text-muted-foreground transition">О компании</a>
            <a href="#services" className="text-foreground hover:text-muted-foreground transition">Услуги</a>
            <a href="#contacts" className="text-foreground hover:text-muted-foreground transition">Контакты</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Phone" size={20} />
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-8">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg text-foreground hover:text-muted-foreground transition">Главная</a>
                <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="text-lg text-foreground hover:text-muted-foreground transition">Каталог</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-foreground hover:text-muted-foreground transition">О компании</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg text-foreground hover:text-muted-foreground transition">Услуги</a>
                <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="text-lg text-foreground hover:text-muted-foreground transition">Контакты</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="home" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Новые идеи, новые возможности
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Качественные двери для вашего дома и офиса. Индивидуальный подход к каждому клиенту.
            </p>
            <Button size="lg" className="text-lg px-8">
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Каталог</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Материал</label>
              <Select value={materialFilter} onValueChange={setMaterialFilter}>
                <SelectTrigger>
                  <SelectValue />
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
                  <SelectValue />
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
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все размеры</SelectItem>
                  <SelectItem value="standard">Стандартный</SelectItem>
                  <SelectItem value="large">Большой</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Цена: {priceRange[0]} - {priceRange[1]} ₽
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

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-foreground mb-4">{product.price.toLocaleString()} ₽</p>
                  <Button className="w-full">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Нет товаров, соответствующих фильтрам</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6">
              OPTIMA PORTE — это более 15 лет опыта в производстве и продаже качественных дверей. 
              Мы предлагаем широкий ассортимент межкомнатных и входных дверей для любого интерьера.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша миссия — создавать функциональные и эстетичные решения, которые служат долгие годы.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Услуги</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Ruler" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Замер</h3>
              <p className="text-muted-foreground">
                Бесплатный профессиональный замер с выездом на объект
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Wrench" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Установка</h3>
              <p className="text-muted-foreground">
                Качественный монтаж от опытных специалистов с гарантией
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Доставка</h3>
              <p className="text-muted-foreground">
                Быстрая и аккуратная доставка по городу и области
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@optimaporte.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 17:00</p>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Свяжитесь с нами</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="email" placeholder="Email" />
                <Button type="submit" className="w-full">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 OPTIMA PORTE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
