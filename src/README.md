# Ducati Landing Page Clone

A modern, responsive landing page inspired by Ducati's design language, built with React, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
ducati-website/
├── App.tsx                          # Main application component
├── styles/globals.css               # Global styles with Ducati brand colors
├── components/
│   ├── Navbar.tsx                   # Sticky navigation with mobile menu
│   ├── HeroSection.tsx              # Hero banner with CTA buttons
│   ├── ModelsSection.tsx            # Motorcycle models grid
│   ├── EquipmentSection.tsx         # Gear and accessories tiles
│   ├── TestRideSection.tsx          # Test ride booking banner
│   ├── DealerLocatorSection.tsx     # Dealer finder with map
│   ├── MotoGPSection.tsx            # Racing news and updates
│   ├── Footer.tsx                   # Dark footer with links
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image component with fallback
│   └── ui/                          # Shadcn/ui components
```

## 🎨 Brand Colors

The website uses Ducati's official color palette:

- **Primary Red**: `#E2231A` - Main brand color for CTAs and accents
- **Black**: `#000000` - Text and contrast elements
- **White**: `#FFFFFF` - Background and text on dark sections
- **Dark Gray**: `#1a1a1a` - Footer and secondary backgrounds
- **Light Gray**: `#f5f5f5` - Section backgrounds

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-width layouts with larger typography

## 🚀 How to Clone This Website

### 1. Copy the Complete Structure

To replicate this exact website:

```bash
# Copy all component files
cp -r components/ your-project/components/
cp styles/globals.css your-project/styles/
cp App.tsx your-project/
```

### 2. Adapt for Another Brand

To adapt this for a different brand (e.g., Honda, Yamaha, BMW):

#### Step 1: Update Brand Colors
```css
/* In styles/globals.css */
:root {
  /* Replace Ducati colors with your brand */
  --brand-primary: #your-primary-color;
  --brand-secondary: #your-secondary-color;
  --brand-accent: #your-accent-color;
}
```

#### Step 2: Update Content
```tsx
// In each component, replace:
- "DUCATI" → "YOUR BRAND"
- Ducati-specific text and imagery
- Product names and specifications
- Company information
```

#### Step 3: Replace Images
```tsx
// Use unsplash_tool or your own images
<ImageWithFallback
  src="your-brand-motorcycle-image.jpg"
  alt="Your Brand Motorcycle"
/>
```

## 🔧 Component Breakdown

### Navbar.tsx
- **Purpose**: Site navigation and branding
- **Features**: 
  - Sticky positioning
  - Mobile hamburger menu
  - Brand logo
  - MyDucati button (adapt to your brand account system)

### HeroSection.tsx
- **Purpose**: Main landing section with hero image
- **Features**:
  - Full-screen background image
  - Animated scroll indicator
  - Dual CTA buttons
  - Responsive typography

### ModelsSection.tsx
- **Purpose**: Product showcase grid
- **Features**:
  - 4-column responsive grid
  - Product cards with specs
  - Hover animations
  - Category badges

### EquipmentSection.tsx
- **Purpose**: Accessories and gear display
- **Features**:
  - Tile-based layout
  - Featured product highlighting
  - Icon categorization
  - Add to cart buttons

### TestRideSection.tsx
- **Purpose**: Experience/demo booking
- **Features**:
  - Full-width colored banner
  - Feature highlights
  - Dual CTA approach
  - Service cards

### DealerLocatorSection.tsx
- **Purpose**: Store/dealer finder
- **Features**:
  - Interactive map placeholder
  - Dealer information cards
  - Search functionality
  - Contact details

### MotoGPSection.tsx
- **Purpose**: News and updates
- **Features**:
  - News card grid
  - Featured article layout
  - Author and date information
  - Category tags

### Footer.tsx
- **Purpose**: Site footer with links
- **Features**:
  - Multi-column link organization
  - Social media icons
  - Contact information
  - Dark theme

## 🛠️ Customization Guide

### Changing the Hero Section
```tsx
// Replace background image
const heroImage = "your-hero-image-url";

// Update headline
<h1>YOUR BRAND <span className="brand-red">TAGLINE</span></h1>

// Modify CTAs
<Button>EXPLORE YOUR PRODUCTS</Button>
```

### Adding New Product Categories
```tsx
// In ModelsSection.tsx, add new categories:
const categories = [
  { name: 'Sport', filter: 'sport' },
  { name: 'Touring', filter: 'touring' },
  { name: 'Electric', filter: 'electric' },
  // Add your categories
];
```

### Customizing Equipment Section
```tsx
// Update equipment categories:
const equipmentCategories = [
  { icon: Shield, name: 'Safety Gear' },
  { icon: Zap, name: 'Performance Parts' },
  { icon: Star, name: 'Accessories' },
  // Add your categories
];
```

## 🎯 Key Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **Performance Optimized** - Fast loading with image optimization
- ✅ **Accessible** - Proper ARIA labels and keyboard navigation
- ✅ **SEO Ready** - Semantic HTML structure
- ✅ **Brand Consistent** - Cohesive design system
- ✅ **Interactive** - Hover effects and animations
- ✅ **Modular** - Easy to modify and extend

## 📦 Dependencies

Required packages for full functionality:
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "lucide-react": "latest",
    "motion/react": "latest"
  }
}
```

## 🔄 Quick Brand Swap

To quickly adapt this for another motorcycle brand:

1. **Search & Replace**: 
   - `DUCATI` → `YOUR BRAND`
   - `ducati-red` → `brand-primary`
   - Ducati-specific content

2. **Update Colors**:
   - Replace CSS color variables
   - Update class names if needed

3. **Replace Content**:
   - Product specifications
   - Company information
   - Contact details
   - Social media links

4. **Update Images**:
   - Hero backgrounds
   - Product images
   - Equipment photos
   - News images

## 🎨 Design Principles

This design follows these principles that work for any automotive/motorcycle brand:

- **Bold Typography**: Large, impactful headlines
- **High-Quality Imagery**: Product-focused photography
- **Brand Color Prominence**: Strategic use of brand colors
- **Clear CTAs**: Obvious action buttons
- **Information Hierarchy**: Organized content sections
- **Performance Focus**: Specifications and features highlighted

## 💡 Adaptation Ideas

This structure can be adapted for:
- **Automotive brands** (cars, trucks, motorcycles)
- **Sports equipment** (bikes, skiing, surfing)
- **Luxury goods** (watches, fashion, accessories)
- **Technology products** (phones, computers, gadgets)
- **Any product-focused business** with multiple categories

## 🚀 Next Steps

After cloning:
1. Customize brand colors and typography
2. Replace all imagery with brand-specific photos
3. Update content to match your products/services
4. Add real functionality (forms, APIs, payments)
5. Integrate with your backend systems
6. Add analytics and tracking
7. Optimize for your target audience

---

This clone provides a solid foundation for any brand looking to create a modern, responsive, and engaging landing page.