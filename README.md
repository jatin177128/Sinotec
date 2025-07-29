# Sino-Tec India - Electrical Safety Solutions Website

A modern, responsive React website for Sino-Tec India, a leading electrical earthing and lightning protection company with over 15 years of experience.

## 🚀 Project Overview

This project showcases Sino-Tec India's comprehensive electrical safety services through a professional, interactive website built with React and Tailwind CSS.

### Key Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Interactive Components**: Smooth scrolling navigation, hover effects, and animated elements
- **Professional UI**: Clean, modern design with electrical industry-appropriate imagery
- **Service Showcase**: Detailed service cards with images and feature lists
- **Company Information**: Comprehensive about section highlighting expertise and certifications

## 🛠️ Technologies Used

- **React 18+**: Frontend JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful & consistent icons library
- **Unsplash Images**: High-quality professional electrical and industrial images

## 📋 Components Structure

### Main Components

1. **About Section** (`AboutSection.jsx`)
   - Company introduction and mission
   - Key strengths and certifications
   - ISO 9001:2015 certification highlight

2. **Services Section** (`ServicesSection.jsx`)
   - Six comprehensive service offerings
   - Interactive service cards with images
   - Call-to-action section

### Services Included

- ⚡ **Lightning Protection Systems**
- 🔧 **Earthing Systems**
- 🔍 **Electrical Safety Audits**
- 🛠️ **Installation & Maintenance**
- 🏭 **Industrial Solutions**
- 👥 **Consultation Services**

## 🎨 Design Features

### Visual Elements
- **Color Scheme**: Professional blue and orange palette
- **Typography**: Clean, hierarchical text structure
- **Animations**: Smooth hover effects and transitions
- **Icons**: Consistent Lucide React icon set
- **Images**: Industry-relevant electrical equipment photos

### Interactive Elements
- Smooth scroll navigation
- Card hover animations with lift effects
- Button hover states and transitions
- Image scaling on hover
- Mobile-responsive hamburger menu

## 📱 Responsive Design

- **Desktop**: Full-featured layout with multi-column grids
- **Tablet**: Optimized for medium screen sizes
- **Mobile**: Single-column layout with touch-friendly interactions

## 🏗️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sino-tec-india.git
   cd sino-tec-india
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
sino-tec-india/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   ├── index.html
│   └── ...
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Usage

### Import Components

```jsx
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div>
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
```

### Customization

- **Colors**: Modify Tailwind color classes in components
- **Content**: Update service data and company information
- **Images**: Replace Unsplash URLs with custom images
- **Animations**: Adjust transition durations and hover effects

## 🔧 Configuration

### Tailwind CSS Setup

Ensure your `tailwind.config.js` includes:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
      }
    },
  },
  plugins: [],
}
```

## 🌟 Features Highlight

### About Section
- Company badge with shield icon
- Professional description and statistics
- Four key strength areas with icons
- Mission statement in gradient card
- ISO certification highlight

### Services Section
- Six service categories with detailed descriptions
- Professional electrical equipment images
- Feature lists with checkmark icons
- Interactive hover effects
- Call-to-action with consultation buttons

## 📈 Performance Optimizations

- **Image Optimization**: Optimized Unsplash images with specific dimensions
- **Lazy Loading**: Images load as needed
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Component Modularity**: Separate components for better code splitting

## 🚀 Deployment

### Vercel Deployment
```bash
npm install -g vercel
vercel --prod
```

### Netlify Deployment
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact Information

**Sino-Tec India**
- **Industry**: Electrical Safety Solutions
- **Specialization**: Earthing Systems & Lightning Protection
- **Experience**: 2+ Years
- **Certification**: ISO 9001:2015

---


**Built with ❤️ for Sino-Tec India - Your trusted partner in electrical safety solutions.**
/**
 * ContactPage component renders a contact form allowing users to send messages via email.
 * Utilizes EmailJS for client-side email delivery without a backend.
 *
 * Features:
 * - Collects user name, email, and message.
 * - Validates input fields before submission.
 * - Sends form data using EmailJS service.
 * - Displays success or error notifications based on email delivery status.
 *
 * Dependencies:
 * - emailjs-com: For sending emails directly from the client.
 * - React: For component structure and state management.
 *
 * Usage:
 * Import and include <ContactPage /> in your application to provide a contact form.
 *
 * EmailJS Integration:
 * - Requires EmailJS account and configuration (service ID, template ID, user ID).
 * - Ensure to keep sensitive keys secure and not exposed in public repositories.
 */