#  Aamir Alam - Portfolio

A modern, responsive portfolio website showcasing my work as a Fullstack Blockchain Developer. Built with cutting-edge technologies and featuring smooth animations, interactive elements, and a sleek cyberpunk-inspired design.


##  Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Next-generation frontend build tool
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Production-ready motion library for React

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **Lint-staged** - Run linters on staged files

### Icons & UI
- **Lucide React** - Beautiful, customizable icons
- **Custom Components** - Reusable UI components

##  Project Structure

```
portfolio-client/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── animations/    # Animation components
│   │   ├── contact/       # Contact section
│   │   ├── experience/    # Experience section
│   │   ├── header/        # Header and navigation
│   │   ├── hero/          # Hero section
│   │   ├── projects/      # Projects showcase
│   │   ├── skills/        # Skills section
│   │   └── theme/         # Theme and background components
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

##  Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AamirAlam/portfolio-client.git
   cd portfolio-client
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code linting

## Customization

### Styling
The project uses TailwindCSS with custom color schemes. You can modify the theme in `tailwind.config.js`:

```javascript
// Custom colors for the cyberpunk theme
colors: {
  'crypto-dark': '#0a0a0a',
  'crypto-green': '#00ff88',
  // Add your custom colors here
}
```

### Components
All components are modular and located in the `src/components` directory. Each section (Hero, Projects, Skills, etc.) has its own folder with related components.

### Animations
Animations are handled by Framer Motion. You can customize animations in the `src/components/animations` directory.

## Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set framework preset to "Vite"
3. Deploy automatically on push to main branch

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.


## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Aamir Alam** - Fullstack Blockchain Developer

- Portfolio: [https://aamir-alam.vercel.app](https://aamir-alam.vercel.app)
- LinkedIn: [https://linkedin.com/in/aamiralam](https://linkedin.com/in/aamir2alam)
- GitHub: [https://github.com/AamirAlam](https://github.com/AamirAlam)
- Email: [aamiralam1991@gmail.com](mailto:aamiralam1991@gmail.com)

---