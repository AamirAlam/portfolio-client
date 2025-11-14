#  Aamir Alam - Portfolio

A modern, responsive portfolio website showcasing my work as a Fullstack Blockchain Developer. Built with cutting-edge technologies and featuring smooth animations, interactive elements, and a sleek cyberpunk-inspired design.


## End-to-End Testing

This project uses [Playwright](https://playwright.dev/) for end-to-end testing, ensuring that critical user flows work as expected.

### Running Tests

Run all tests:
```bash
pnpm test:e2e
```

Run tests in headed mode (opens a browser window):
```bash
pnpm test:e2e -- --headed
```

Run a specific test file:
```bash
pnpm test:e2e tests-e2e/example.spec.ts
```

Run tests in debug mode:
```bash
pnpm test:e2e -- --debug
```

### Writing Tests

1. Test files should be placed in the `tests-e2e` directory with the `.spec.ts` extension.
2. Use the `test` function to define test cases.
3. Use Playwright's built-in selectors and assertions for reliable tests.

Example test:
```typescript
import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('/');
  
  // Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Portfolio/);
  
  // Click the get started link
  await page.getByRole('link', { name: 'GitHub' }).click();
  
  // Expects page to have a heading with the name of Installation
  await expect(page.getByRole('heading', { name: 'GitHub Profile' })).toBeVisible();
});
```

### Best Practices
- Test critical user journeys
- Keep tests independent and isolated
- Use meaningful test descriptions
- Leverage page object models for complex test suites
- Run tests in CI/CD pipeline

### Debugging Tests

- Use `page.pause()` to pause test execution
- Run with `--debug` flag for Playwright's debug tools
- Use `test.only` to run a specific test during development

## Tech Stack

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
- **Playwright** - End-to-end testing framework

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