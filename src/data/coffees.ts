export type RoastLevel = "Light" | "Medium" | "Dark";
export type GrindSize = "Whole Bean" | "Coarse" | "Medium" | "Fine";
export type BrewingMethod = "French Press" | "Espresso" | "Pour Over" | "Cold Brew";

export interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  roastLevel: RoastLevel;
  flavorNotes: string[];
  price: number;
  origin: string;
  roastDate: string; // ISO Date
  image: string;
  score: number;
  tags: string[];
}

export const coffees: CoffeeProduct[] = [
  {
    id: "sunrise-blend",
    name: "Sunrise Blend",
    description: "Bright citrus top notes balanced with creamy caramel sweetness.",
    roastLevel: "Light",
    flavorNotes: ["Citrus", "Honey", "Vanilla"],
    price: 650,
    origin: "Colombia, Ethiopia",
    roastDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    image: "/products/sunrise-blend.png",
    score: 4.6,
    tags: ["bright", "fruit", "clean"],
  },
  {
    id: "midday-mocha",
    name: "Midday Mocha",
    description: "Decadent chocolate and toasted almond with a velvety finish.",
    roastLevel: "Medium",
    flavorNotes: ["Chocolate", "Almond", "Cocoa"],
    price: 780,
    origin: "Brazil, Guatemala",
    roastDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    image: "/products/midday-mocha.png",
    score: 4.8,
    tags: ["balanced", "smooth", "nutty"],
  },
  {
    id: "midnight-roast",
    name: "Midnight Roast",
    description: "Deep roasted aromas with smoky cocoa and caramelized sugar.",
    roastLevel: "Dark",
    flavorNotes: ["Smoke", "Cedar", "Dark Chocolate"],
    price: 890,
    origin: "Sumatra, India",
    roastDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    image: "/products/midnight-roast.png",
    score: 4.7,
    tags: ["bold", "rich", "spicy"],
  },
  {
    id: "caramel-crush",
    name: "Caramel Crush",
    description: "Sweet caramel and toasted pecan make each sip irresistible.",
    roastLevel: "Medium",
    flavorNotes: ["Caramel", "Pecan", "Brown Sugar"],
    price: 720,
    origin: "Honduras, Peru",
    roastDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    image: "/products/caramel-crush.png",
    score: 4.5,
    tags: ["sweet", "smooth", "dessert"],
  },
];
