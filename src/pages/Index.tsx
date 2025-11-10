import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface EquipmentItem {
  id: number;
  name: string;
  category: string;
  description: string;
  weight: string;
  price: string;
  image: string;
  tags: string[];
}

const equipmentData: EquipmentItem[] = [
  {
    id: 1,
    name: 'Походный рюкзак',
    category: 'Походное снаряжение',
    description: 'Вместительный рюкзак 65л с анатомической спинкой и дождевиком',
    weight: '2.1 кг',
    price: '8 500 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/df395742-4760-4873-abb2-5683be5816bd.jpg',
    tags: ['Вместительный', 'Водонепроницаемый']
  },
  {
    id: 2,
    name: 'Треккинговые палки',
    category: 'Походное снаряжение',
    description: 'Телескопические палки из карбона с амортизатором',
    weight: '0.5 кг',
    price: '3 200 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/df395742-4760-4873-abb2-5683be5816bd.jpg',
    tags: ['Легкие', 'Регулируемые']
  },
  {
    id: 3,
    name: 'Спальный мешок',
    category: 'Походное снаряжение',
    description: 'Зимний спальник до -15°C с компрессионным мешком',
    weight: '1.8 кг',
    price: '6 900 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/df395742-4760-4873-abb2-5683be5816bd.jpg',
    tags: ['Теплый', 'Компактный']
  },
  {
    id: 4,
    name: 'Страховочная система',
    category: 'Альпинистское снаряжение',
    description: 'Универсальная обвязка для скалолазания и альпинизма',
    weight: '0.4 кг',
    price: '4 500 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/8da1e393-154e-48d6-af56-4978c86ad291.jpg',
    tags: ['Надежная', 'Сертифицирована']
  },
  {
    id: 5,
    name: 'Альпинистская веревка',
    category: 'Альпинистское снаряжение',
    description: 'Динамическая веревка 60м, диаметр 10мм',
    weight: '4.2 кг',
    price: '12 000 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/8da1e393-154e-48d6-af56-4978c86ad291.jpg',
    tags: ['Прочная', 'UIAA']
  },
  {
    id: 6,
    name: 'Набор карабинов',
    category: 'Альпинистское снаряжение',
    description: 'Комплект из 5 муфтованных карабинов',
    weight: '0.8 кг',
    price: '5 400 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/8da1e393-154e-48d6-af56-4978c86ad291.jpg',
    tags: ['Легкие', 'Автоблокирующие']
  },
  {
    id: 7,
    name: 'Лыжи беговые',
    category: 'Зимнее снаряжение',
    description: 'Классические лыжи 190см с креплениями',
    weight: '2.5 кг',
    price: '9 800 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/c13368f6-1d0a-46ad-b331-cd62fdcc0dec.jpg',
    tags: ['Профессиональные', 'Скользкие']
  },
  {
    id: 8,
    name: 'Горнолыжный шлем',
    category: 'Зимнее снаряжение',
    description: 'Защитный шлем с регулировкой размера',
    weight: '0.6 кг',
    price: '4 200 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/c13368f6-1d0a-46ad-b331-cd62fdcc0dec.jpg',
    tags: ['Безопасность', 'Вентиляция']
  },
  {
    id: 9,
    name: 'Сноуборд',
    category: 'Зимнее снаряжение',
    description: 'Универсальная доска 155см для фрирайда',
    weight: '3.2 кг',
    price: '18 500 ₽',
    image: 'https://cdn.poehali.dev/projects/c40cd8a5-47a0-4d33-8c24-f2595466912c/files/c13368f6-1d0a-46ad-b331-cd62fdcc0dec.jpg',
    tags: ['Всесезонная', 'Прочная']
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Походное снаряжение', 'Альпинистское снаряжение', 'Зимнее снаряжение'];

  const filteredEquipment = equipmentData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Icon name="Mountain" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Снаряжение и экипировка</h1>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
          
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск снаряжения..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </header>

      <section className="relative w-full h-[500px] overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/files/2b168c83-ff68-4bc1-a3ad-f79672683a8d.jpg" 
          alt="Tomsk Ski Marathon - наша команда"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Наша команда на Tomsk Ski Marathon</h2>
            <p className="text-xl text-white/90 max-w-2xl">Профессиональные спортсмены, которые знают всё о лыжных гонках и биатлоне</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="Походное снаряжение">Походное</TabsTrigger>
            <TabsTrigger value="Альпинистское снаряжение">Альпинизм</TabsTrigger>
            <TabsTrigger value="Зимнее снаряжение">Зимнее</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            {filteredEquipment.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-xl text-muted-foreground">Снаряжение не найдено</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEquipment.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Weight" size={16} />
                          <span>{item.weight}</span>
                        </div>
                        <div className="flex gap-2">
                          {item.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" size="sm">
                        <Icon name="ShoppingBag" size={16} className="mr-2" />
                        Добавить в корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-card border-t mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Icon name="Package" size={20} />
                О магазине
              </h3>
              <p className="text-sm text-muted-foreground">
                Профессиональное снаряжение для походов, альпинизма и активного отдыха
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Контакты
              </h3>
              <p className="text-sm text-muted-foreground">
                +7 (900) 123-45-67<br />
                info@equipment.ru
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                Адрес
              </h3>
              <p className="text-sm text-muted-foreground">
                г. Москва, ул. Спортивная, д. 10
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;