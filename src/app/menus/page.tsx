'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Define menu categories type
type MenuCategory = 'dinner' | 'brunch' | 'happy-hour' | 'wine' | 'dessert';

// Type for menu items
interface MenuItem {
  name: string;
  price: string;
  description: string;
}

// Type for menu sections
interface MenuSection {
  [key: string]: MenuItem[];
}

// Type for complete menu
interface Menu {
  [key: string]: MenuSection;
}

// Type for all menus
interface LocationMenus {
  dinner: MenuSection;
  brunch: MenuSection;
  'happy-hour': MenuSection;
  wine: MenuSection;
  dessert: MenuSection;
}

// Atlanta Menu Data
const atlantaMenus = {
  dinner: {
    antipasti: [
      {
        name: "Southern Burrata",
        price: "19",
        description: "peach preserves, spiced pecans, grilled sourdough, local honey"
      },
      {
        name: "Fried Green Tomatoes",
        price: "16",
        description: "herb ricotta, calabrian chili aioli, basil"
      },
      {
        name: "Georgia Shrimp Scampi",
        price: "21",
        description: "wild caught shrimp, garlic, white wine, butter, herbs"
      },
      {
        name: "Vidalia Onion Soup",
        price: "15",
        description: "sweet onion broth, fontina, herb crostini"
      },
      {
        name: "Local Charcuterie",
        price: "24",
        description: "artisanal meats, regional cheeses, house pickles, mostarda"
      }
    ],
    pasta: [
      {
        name: "Collard Green Ravioli",
        price: "28",
        description: "smoked ham hock, parmesan cream, crispy collards"
      },
      {
        name: "Sweet Corn Agnolotti",
        price: "30",
        description: "summer corn, mascarpone, brown butter, herbs"
      },
      {
        name: "Shrimp & Grits Risotto",
        price: "32",
        description: "carolina gold rice, georgia shrimp, tasso ham, aged cheddar"
      },
      {
        name: "Black Truffle Mac",
        price: "34",
        description: "five cheese blend, black truffle, herb breadcrumbs"
      },
      {
        name: "Spicy Vodka Rigatoni",
        price: "29",
        description: "calabrian chili, vodka sauce, fresh basil, ricotta salata"
      }
    ],
    secondi: [
      {
        name: "Peach-Glazed Pork Chop",
        price: "42",
        description: "heritage pork, grilled peaches, bourbon jus, herbs"
      },
      {
        name: "Georgia Trout",
        price: "38",
        description: "pan-seared mountain trout, pecan brown butter, local vegetables"
      },
      {
        name: "Prime Strip Steak",
        price: "58",
        description: "16oz prime beef, vidalia onion jam, roasted garlic"
      },
      {
        name: "Herb Roasted Chicken",
        price: "36",
        description: "springer mountain farms chicken, preserved lemon, herbs"
      }
    ],
    contorni: [
      {
        name: "Creamed Corn",
        price: "14",
        description: "sweet corn, cream, chives, black pepper"
      },
      {
        name: "Braised Collards",
        price: "12",
        description: "smoked turkey, pepper vinegar, pot likker"
      },
      {
        name: "Roasted Sweet Potatoes",
        price: "13",
        description: "maple butter, spiced pecans, herbs"
      },
      {
        name: "Charred Okra",
        price: "14",
        description: "garlic, lemon, calabrian chili"
      }
    ]
  },
  brunch: {
    starters: [
      {
        name: "Biscuits & Gravy",
        price: "14",
        description: "buttermilk biscuits, sausage gravy, fresh herbs"
      },
      {
        name: "Southern Fruit Bowl",
        price: "12",
        description: "seasonal fruits, local honey, mint, house granola"
      },
      {
        name: "Deviled Eggs",
        price: "10",
        description: "pickled relish, smoked paprika, chives"
      }
    ],
    mains: [
      {
        name: "Chicken & Waffles",
        price: "24",
        description: "crispy chicken, pecan waffle, bourbon maple syrup"
      },
      {
        name: "Shrimp & Grits Benedict",
        price: "26",
        description: "poached eggs, georgia shrimp, tasso ham hollandaise"
      },
      {
        name: "Sweet Potato Hash",
        price: "19",
        description: "two eggs any style, peppers, onions, herbs"
      },
      {
        name: "Southern Breakfast",
        price: "22",
        description: "eggs, bacon or sausage, grits, biscuit"
      }
    ],
    sides: [
      {
        name: "Stone Ground Grits",
        price: "8",
        description: "butter, cheese, chives"
      },
      {
        name: "Breakfast Potatoes",
        price: "7",
        description: "herbs, caramelized onions"
      },
      {
        name: "Fresh Fruit",
        price: "8",
        description: "seasonal selection"
      }
    ]
  },
  "happy-hour": {
    bites: [
      {
        name: "Pimento Cheese Dip",
        price: "8",
        description: "house crackers, pickled vegetables"
      },
      {
        name: "Mini Meatballs",
        price: "10",
        description: "bourbon-tomato sauce, parmesan"
      },
      {
        name: "Fried Pickles",
        price: "7",
        description: "ranch dressing, herbs"
      }
    ],
    drinks: [
      {
        name: "House Wine",
        price: "7",
        description: "red, white, or sparkling"
      },
      {
        name: "Draft Beer",
        price: "5",
        description: "local selection"
      },
      {
        name: "Georgia Mule",
        price: "8",
        description: "vodka, peach, ginger beer"
      }
    ]
  },
  wine: {
    sparkling: [
      {
        name: "Prosecco, La Marca",
        price: "12/48",
        description: "Veneto, Italy - crisp apple, citrus"
      },
      {
        name: "Champagne, Veuve Clicquot",
        price: "25/120",
        description: "Reims, France - brioche, vanilla"
      }
    ],
    white: [
      {
        name: "Chardonnay, Stonestreet",
        price: "16/64",
        description: "Alexander Valley - oak, butter, vanilla"
      },
      {
        name: "Sauvignon Blanc, Honig",
        price: "14/56",
        description: "Napa Valley - citrus, tropical"
      }
    ],
    red: [
      {
        name: "Cabernet Sauvignon, Jordan",
        price: "22/88",
        description: "Alexander Valley - black fruit, tobacco"
      },
      {
        name: "Pinot Noir, Belle Glos",
        price: "18/72",
        description: "Russian River - cherry, spice"
      }
    ],
    cocktails: [
      {
        name: "Peach Old Fashioned",
        price: "16",
        description: "bourbon, peach, bitters"
      },
      {
        name: "Vidalia Gibson",
        price: "15",
        description: "gin, dry vermouth, pickled onion"
      }
    ]
  },
  dessert: {
    dolci: [
      {
        name: "Peach Cobbler",
        price: "12",
        description: "vanilla gelato, bourbon caramel"
      },
      {
        name: "Chocolate Pecan Pie",
        price: "11",
        description: "whipped cream, chocolate sauce"
      },
      {
        name: "Banana Pudding",
        price: "10",
        description: "vanilla wafers, whipped cream"
      }
    ],
    coffee: [
      {
        name: "Espresso",
        price: "4",
        description: "double shot"
      },
      {
        name: "Cappuccino",
        price: "5",
        description: "local roasted beans"
      }
    ]
  }
}

// Cary Menu Data
const caryMenus = {
  dinner: {
    antipasti: [
      {
        name: "Carpaccio di Manzo",
        price: "21",
        description: "thinly sliced beef tenderloin, arugula, capers, truffle oil"
      },
      {
        name: "Calamari Fritti",
        price: "18",
        description: "lemon, herbs, calabrian chili aioli, fresh parsley"
      },
      {
        name: "Polpo alla Griglia",
        price: "24",
        description: "grilled octopus, fingerling potatoes, calabrian chili, salsa verde"
      },
      {
        name: "Burrata Classica",
        price: "19",
        description: "roasted cherry tomatoes, aged balsamic, fresh basil, grilled ciabatta"
      },
      {
        name: "Caesar",
        price: "16",
        description: "hearts of romaine, focaccia croutons, parmigiano reggiano"
      }
    ],
    pasta: [
      {
        name: "Tagliatelle al Tartufo",
        price: "34",
        description: "black truffle, wild mushrooms, parmigiano cream, fresh herbs"
      },
      {
        name: "Linguine alle Vongole",
        price: "32",
        description: "manila clams, white wine, garlic, peperoncino, parsley"
      },
      {
        name: "Ravioli di Zucca",
        price: "30",
        description: "butternut squash ravioli, sage brown butter, amaretti crumbs"
      },
      {
        name: "Gnocchi al Gorgonzola",
        price: "29",
        description: "potato gnocchi, gorgonzola dolce, walnuts, aged balsamic"
      },
      {
        name: "Rigatoni alla Vodka",
        price: "28",
        description: "spicy vodka sauce, fresh basil, parmigiano reggiano, cream"
      }
    ],
    secondi: [
      {
        name: "Branzino al Forno",
        price: "42",
        description: "whole roasted mediterranean sea bass, herbs, lemon, olive oil"
      },
      {
        name: "Bistecca alla Fiorentina",
        price: "68",
        description: "32oz porterhouse steak, rosemary, garlic, aged balsamic"
      },
      {
        name: "Osso Buco",
        price: "46",
        description: "braised veal shank, saffron risotto, gremolata"
      },
      {
        name: "Pollo al Mattone",
        price: "36",
        description: "brick-pressed chicken, herbs, lemon, roasted potatoes"
      }
    ],
    contorni: [
      {
        name: "Funghi Trifolati",
        price: "14",
        description: "sautéed wild mushrooms, garlic, white wine, herbs"
      },
      {
        name: "Patate al Rosmarino",
        price: "12",
        description: "roasted fingerling potatoes, rosemary, garlic"
      },
      {
        name: "Spinaci",
        price: "13",
        description: "sautéed spinach, garlic, chili flakes"
      },
      {
        name: "Caponata",
        price: "14",
        description: "sicilian eggplant, pine nuts, capers, agrodolce"
      }
    ]
  },
  brunch: {
    antipasti: [
      {
        name: "Granola e Yogurt",
        price: "12",
        description: "house granola, greek yogurt, local honey, berries"
      },
      {
        name: "Bruschetta con Ricotta",
        price: "14",
        description: "whipped ricotta, figs, honey, pine nuts"
      }
    ],
    uova: [
      {
        name: "Uova in Purgatorio",
        price: "16",
        description: "eggs in spicy tomato sauce, pecorino, herbs"
      },
      {
        name: "Frittata di Verdure",
        price: "18",
        description: "open-faced omelet, seasonal vegetables, fontina"
      },
      {
        name: "Uova Benedict",
        price: "19",
        description: "prosciutto, poached eggs, hollandaise"
      }
    ],
    dolci: [
      {
        name: "Pancakes al Limoncello",
        price: "16",
        description: "ricotta pancakes, limoncello syrup, berries"
      },
      {
        name: "French Toast",
        price: "17",
        description: "brioche, mascarpone, nutella"
      }
    ]
  },
  "happy-hour": {
    stuzzichini: [
      {
        name: "Olive Marinate",
        price: "6",
        description: "marinated olives, citrus, herbs"
      },
      {
        name: "Arancini",
        price: "8",
        description: "risotto balls, mozzarella, marinara"
      },
      {
        name: "Bruschetta",
        price: "7",
        description: "tomato, basil, garlic"
      }
    ],
    bevande: [
      {
        name: "Vino della Casa",
        price: "7",
        description: "house red or white"
      },
      {
        name: "Peroni",
        price: "5",
        description: "draft italian lager"
      },
      {
        name: "Aperol Spritz",
        price: "9",
        description: "aperol, prosecco, soda"
      }
    ]
  },
  wine: {
    bollicine: [
      {
        name: "Franciacorta, Ca' del Bosco",
        price: "18/85",
        description: "Lombardy - elegant, complex"
      },
      {
        name: "Prosecco Superiore, Bisol",
        price: "14/56",
        description: "Valdobbiadene - crisp, floral"
      }
    ],
    bianchi: [
      {
        name: "Gavi di Gavi, Broglia",
        price: "15/60",
        description: "Piedmont - mineral, citrus"
      },
      {
        name: "Verdicchio, Bucci",
        price: "13/52",
        description: "Marche - almond, fresh"
      }
    ],
    rossi: [
      {
        name: "Barolo, Vietti",
        price: "25/100",
        description: "Piedmont - tar, roses"
      },
      {
        name: "Brunello, Altesino",
        price: "22/88",
        description: "Tuscany - cherry, leather"
      }
    ],
    cocktails: [
      {
        name: "Negroni Classico",
        price: "14",
        description: "gin, campari, vermouth"
      },
      {
        name: "Limoncello Martini",
        price: "15",
        description: "vodka, limoncello, prosecco"
      }
    ]
  },
  dessert: {
    dolci: [
      {
        name: "Tiramisu",
        price: "12",
        description: "espresso, mascarpone, cocoa"
      },
      {
        name: "Panna Cotta",
        price: "11",
        description: "vanilla bean, seasonal fruit"
      },
      {
        name: "Cannoli",
        price: "10",
        description: "ricotta, pistachios, chocolate"
      }
    ],
    caffe: [
      {
        name: "Espresso",
        price: "4",
        description: "illy blend"
      },
      {
        name: "Affogato",
        price: "8",
        description: "espresso, vanilla gelato"
      }
    ]
  }
}

export default function MenusPage() {
  const [location, setLocation] = useState<'atlanta' | 'cary'>('atlanta')
  const [category, setCategory] = useState<MenuCategory>('dinner')

  // Select menu based on location and category
  const currentMenu = location === 'atlanta' 
    ? atlantaMenus[category as keyof LocationMenus]
    : caryMenus[category as keyof LocationMenus]

  const renderMenuSection = (title: string, items: MenuItem[]) => (
    <div>
      <h2 className="font-['DAYROM'] text-4xl mb-10 tracking-tight">{title}</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-sans text-xl">{item.name}</h3>
              <div className="border-b border-dotted border-black flex-grow mx-2"></div>
              <span className="font-sans">{item.price}</span>
            </div>
            <p className="font-sans text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

  const renderMenu = () => {
    if (category === 'dinner') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {renderMenuSection('Antipasti', currentMenu.antipasti)}
          {renderMenuSection('Pasta', currentMenu.pasta)}
          {renderMenuSection('Secondi', currentMenu.secondi)}
          {renderMenuSection('Contorni', currentMenu.contorni)}
        </div>
      )
    }

    if (category === 'brunch') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {location === 'atlanta' ? (
            <>
              {renderMenuSection('Starters', currentMenu.starters)}
              {renderMenuSection('Mains', currentMenu.mains)}
              {renderMenuSection('Sides', currentMenu.sides)}
            </>
          ) : (
            <>
              {renderMenuSection('Antipasti', currentMenu.antipasti)}
              {renderMenuSection('Uova', currentMenu.uova)}
              {renderMenuSection('Dolci', currentMenu.dolci)}
            </>
          )}
        </div>
      )
    }

    if (category === 'happy-hour') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {location === 'atlanta' ? (
            <>
              {renderMenuSection('Bites', currentMenu.bites)}
              {renderMenuSection('Drinks', currentMenu.drinks)}
            </>
          ) : (
            <>
              {renderMenuSection('Stuzzichini', currentMenu.stuzzichini)}
              {renderMenuSection('Bevande', currentMenu.bevande)}
            </>
          )}
        </div>
      )
    }

    if (category === 'wine') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {location === 'atlanta' ? (
            <>
              {renderMenuSection('Sparkling', currentMenu.sparkling)}
              {renderMenuSection('White', currentMenu.white)}
              {renderMenuSection('Red', currentMenu.red)}
              {renderMenuSection('Cocktails', currentMenu.cocktails)}
            </>
          ) : (
            <>
              {renderMenuSection('Bollicine', currentMenu.bollicine)}
              {renderMenuSection('Bianchi', currentMenu.bianchi)}
              {renderMenuSection('Rossi', currentMenu.rossi)}
              {renderMenuSection('Cocktails', currentMenu.cocktails)}
            </>
          )}
        </div>
      )
    }

    if (category === 'dessert') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {location === 'atlanta' ? (
            <>
              {renderMenuSection('Desserts', currentMenu.dolci)}
              {renderMenuSection('Coffee', currentMenu.coffee)}
            </>
          ) : (
            <>
              {renderMenuSection('Dolci', currentMenu.dolci)}
              {renderMenuSection('Caffè', currentMenu.caffe)}
            </>
          )}
        </div>
      )
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['DAYROM'] text-6xl md:text-7xl mb-8 tracking-tight">{location === 'atlanta' ? 'Atlanta' : 'Cary'}</h1>
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="outline"
              size="lg"
              className={`font-['DAYROM'] ${location === 'atlanta' ? 'bg-black text-white' : 'text-black'}`}
              onClick={() => setLocation('atlanta')}
            >
              Atlanta
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className={`font-['DAYROM'] ${location === 'cary' ? 'bg-black text-white' : 'text-black'}`}
              onClick={() => setLocation('cary')}
            >
              Cary
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['dinner', 'brunch', 'happy-hour', 'wine', 'dessert'].map((cat) => (
              <Button 
                key={cat}
                variant="outline"
                size="lg"
                className={`font-['DAYROM'] ${category === cat ? 'bg-black text-white' : 'text-black'}`}
                onClick={() => setCategory(cat)}
              >
                {cat === 'wine' ? 'Wine & Cocktails' : 
                 cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {renderMenu()}

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="font-['DAYROM'] border-2 border-black text-lg px-8">
              Download Full Menu (PDF)
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 