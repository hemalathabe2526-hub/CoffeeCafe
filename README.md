# ☕ Brew & Bean — Premium Coffee Experience

A modern, elegant coffee business website built with **Next.js**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. Features a warm coffee-themed design, interactive user experiences, and smooth animations.

## 🎨 Design Highlights

### Color Palette
- **Coffee Brown** (#4B2E2B) - Primary brand color
- **Latte Cream** (#F5E6D3) - Main background
- **Dark Roast** (#2A1B16) - Secondary text
- **Caramel** (#C8A27C) - Accent color

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Poppins (modern sans-serif)

### Features
- ✨ Smooth page transitions with Framer Motion
- 🎭 Coffee steam animations on product cards
- 🎯 Hover effects and interactive elements
- 📱 Mobile-first responsive design
- ♿ Semantic HTML for accessibility

---

## 📄 Pages

### 1. **Home Page** (`/`)
- Hero section with coffee theme gradient
- Featured coffee products showcase
- "Brew of the Day" with rotating quotes
- Customer reviews carousel
- Coffee Flavor Finder quiz
- Brew guide preview section

### 2. **Coffee Shop** (`/shop`)
- Grid layout of coffee products
- Search functionality
- Filters for roast level and price
- Add to cart buttons with hover animations
- Product details (flavor notes, origin, roast date freshness)

### 3. **Coffee Personalizer** (`/personalizer`)
- Interactive customization tool
- Select bean type, roast level, grind size, brewing method
- Real-time recommendations
- Brewing tips and ratios

### 4. **Brew Guide** (`/brew-guide`)
- 4 brewing methods (French Press, Espresso, Pour Over, Cold Brew)
- Step-by-step instructions
- Interactive brew timer with start/pause/reset
- Brewing ratios and temperature specs

### 5. **Subscription Plans** (`/subscription`)
- 3 tiered plans (Starter, Coffee Lover, Premium Roaster Choice)
- Grind preference selector
- Delivery frequency options
- Roast preference customization

### 6. **Store Locator** (`/locator`)
- Embedded Google Maps
- 3 sample store locations with hours
- Direct "Get Directions" links

### 7. **About Page** (`/about`)
- Company origin story
- Coffee sourcing practices
- Roasting philosophy
- Sustainability & impact initiatives

---

## 🛠️ Tech Stack

**Framework**: Next.js 16.1.6 with TypeScript  
**Styling**: TailwindCSS v4  
**Animations**: Framer Motion  
**State Management**: React Context API  
**Fonts**: Google Fonts (Playfair Display, Poppins)  
**Build Tool**: Turbopack  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd coffee-project
npm install
npm run dev
```

Website available at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. You can view the live site at:  
👉 **[coffee-project-hemalathabe2526-1449s-projects.vercel.app](https://coffee-project-5pxgym5fv-hemalathabe2526-1449s-projects.vercel.app)**

---

## ✨ Key Features

### 1. **Coffee Flavor Finder Quiz**
- Select taste preferences (acidity, body, sweetness)
- Real-time roast recommendations
- Personalized matching

### 2. **Brew Timer**
- 4 preset brew methods with accurate times
- Interactive start/pause/reset controls
- Visual countdown display

### 3. **Shopping Cart**
- Add/remove coffee products
- Cart count badge in navbar
- Context-based state management

### 4. **Coffee Customizer**
- Bean type, roast, grind size, brewing method selection
- Real-time recommendations
- Brewing ratios and tips

### 5. **Smooth Animations**
- Page fade/slide transitions with Framer Motion
- Coffee steam effects on product cards
- Interactive hover states on all buttons

---

## 📊 Sample Products

Four sample coffees included:
- **Sunrise Blend** - Light roast, citrus & honey notes
- **Midday Mocha** - Medium roast, chocolate & almond
- **Midnight Roast** - Dark roast, smoke & cedar
- **Caramel Crush** - Medium roast, caramel & pecan

Each with origin, roast date, flavor notes, and pricing.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── shop/page.tsx            # Shop page
│   ├── personalizer/page.tsx    # Personalizer
│   ├── brew-guide/page.tsx      # Brew guide
│   ├── subscription/page.tsx    # Subscription
│   ├── locator/page.tsx         # Store locator
│   └── about/page.tsx           # About
├── components/
│   ├── SiteHeader.tsx           # Navigation
│   ├── SiteFooter.tsx           # Footer
│   ├── CoffeeCard.tsx           # Product card
│   ├── Personalizer.tsx         # Customizer
│   ├── BrewGuide.tsx            # Brew guide
│   ├── SubscriptionPlans.tsx    # Subscriptions
│   ├── StoreLocator.tsx         # Map & stores
│   ├── AboutPage.tsx            # About page
│   └── home/                    # Home sections
├── context/
│   └── cart.tsx                 # Cart state
├── data/
│   └── coffees.ts               # Product data
└── lib/
    └── utils.ts                 # Utilities
```

---

## 🎨 Design System

- **Shadows**: Soft shadow effect (0 14px 40px)
- **Border Radius**: 0.75rem (cards) to 1rem (strong cards)
- **Spacing**: 8px base unit (Tailwind default)
- **Colors**: Coffee-themed with transparency variants

---

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Focus states on buttons
- WCAG AA color contrast
- Keyboard navigation support

---

## 🔮 Future Enhancements

- User accounts & authentication
- Real e-commerce checkout
- Blog & brewing guides
- Advanced product search
- Email subscriptions
- Dark mode support
- Analytics & A/B testing

---

Enjoy your premium coffee experience! ☕
