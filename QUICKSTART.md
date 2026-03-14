# Quick Start Guide — Brew & Bean Coffee Website

## 🚀 Quick Launch

```bash
# 1. Navigate to project directory
cd "c:\MY PROJECTS\Coffee project\coffee-project"

# 2. Install dependencies (if not done)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
```

## 📱 Pages to Explore

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, featured products, reviews, quizzes |
| Shop | `/shop` | Browse & filter coffees, add to cart |
| Personalizer | `/personalizer` | Get personalized coffee recommendations |
| Brew Guide | `/brew-guide` | Interactive brewing guide with timer |
| Subscription | `/subscription` | Monthly coffee subscription plans |
| Store Locator | `/locator` | Find our coffee shop locations |
| About | `/about` | Company story & sustainability |

## ✨ Interactive Features to Try

### 1. **Flavor Finder Quiz** (Home Page)
- Select your taste preferences
- See real-time recommendations
- Toggle between Light, Medium, Dark roasts

### 2. **Brew Timer** (Brew Guide Page)
- Click method tabs to switch between brewers
- Press "Start" to run the timer
- Try French Press (4 min), Espresso (25 sec), Pour Over (3:30), Cold Brew (12 hrs)

### 3. **Coffee Customizer** (Personalizer Page)
- Choose bean type & roast level
- Select grind size & brewing method
- Get personalized brewing tips

### 4. **Shopping Cart**
- Add coffees to cart from Shop or Home pages
- Cart count appears in header
- Cart state persists across pages

### 5. **Animations**
- Hover over coffee cards to see steam effects
- Page transitions fade smoothly
- Buttons have interactive hover states

## 🎨 Design Highlights

- **Warm coffee color scheme** with cream backgrounds
- **Elegant fonts**: Playfair Display (headings), Poppins (body)
- **Smooth animations** with Framer Motion
- **Responsive design** works on mobile, tablet, desktop

## 🛠️ Development Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Check for TypeScript errors
npx tsc --noEmit
```

## 📦 What's Included

- ✅ 7 fully built pages (Home, Shop, Personalizer, Brew Guide, Subscription, Locator, About)
- ✅ 4 sample coffee products with full details
- ✅ Shopping cart with React Context
- ✅ Animated brew timer with reducer pattern
- ✅ Interactive quizzes & customizers
- ✅ Mobile-first responsive design
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Framer Motion for animations

## 🎯 Key Components

**Reusable Components**:
- `CoffeeCard` - Product display with animations
- `SiteHeader` - Navigation with cart
- `SiteFooter` - Footer links & info
- `PageTransition` - Animated page wrapper

**Page Components**:
- `HeroSection` - Landing hero with CTA
- `FeaturedProducts` - Product showcase
- `BrewOfTheDay` - Daily pick section
- `FlavorQuiz` - Taste preference matcher
- `BrewGuide` - Step-by-step brewing with timer
- `SubscriptionPlans` - Plan selector
- `StoreLocator` - Maps & locations

## 💾 Data Structure

**Coffee Product**:
```typescript
{
  id: string;
  name: string;
  description: string;
  roastLevel: "Light" | "Medium" | "Dark";
  flavorNotes: string[];
  price: number;
  origin: string;
  roastDate: string;    // ISO date
  image: string;        // SVG path
  score: number;        // Rating 0-5
  tags: string[];
}
```

**Cart Item**:
```typescript
{
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}
```

## 🎬 Next Steps

1. **Customize Colors**: Edit `tailwind.config.ts` color values
2. **Add More Coffees**: Extend `src/data/coffees.ts` array
3. **Configure Maps**: Update store locations in `StoreLocator.tsx`
4. **Add Real Cart**: Integrate with Shopify or Stripe
5. **Deploy**: Use Vercel for easy Next.js deployment

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

Enjoy building your premium coffee experience! ☕
