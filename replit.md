# Creative Agency Portfolio

## Overview

This is a creative agency portfolio website showcasing photography, video, and art work. Built as a full-stack application with React frontend and Express backend, it features a modern, image-focused design inspired by high-end creative portfolio sites. The application emphasizes visual storytelling with smooth interactions, generous spacing, and minimal UI that lets the creative work shine.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing with automatic base path detection for subfolder deployments

**UI Component System**
- shadcn/ui component library (New York style variant) providing a comprehensive set of accessible, customizable React components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design system extensions
- Component path aliases configured for clean imports (@/components, @/lib, @/hooks)

**Design System**
- Typography: Combination of serif fonts (Playfair Display, Cormorant Garamond) for headlines and sans-serif (Inter, DM Sans) for body text
- Spacing system: Consistent rhythm using Tailwind's spacing scale (p-4, p-8, p-12, etc.)
- Color system: HSL-based theme with CSS custom properties supporting light/dark modes
- Responsive grid layouts: Mobile-first approach with breakpoints at md (768px) and lg (1024px)
- Interaction patterns: Subtle elevation effects on hover/active states using custom CSS variables

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data synchronization
- React hooks for local component state
- Context API via TooltipProvider for cross-component coordination

**Key Components Structure**
- `Hero`: Full-screen hero section with background image, title, subtitle, and CTA
- `PortfolioGrid`: Filterable masonry grid displaying portfolio items with category/subcategory filtering
- `PortfolioCard`: Individual portfolio item card with hover effects and category indicators
- `LightboxModal`: Full-screen modal for viewing portfolio items with navigation
- `About`: Artist/team profile section with image and bio
- `Contact`: Contact form with validation
- `Navigation`: Fixed header with smooth scroll navigation
- `Footer`: Site footer with social links

### Backend Architecture

**Server Framework**
- Express.js HTTP server with TypeScript
- Custom middleware for request logging with timing metrics
- JSON body parsing with raw body preservation for webhook verification
- Vite integration in development mode for HMR and SSR capabilities

**Routing Strategy**
- Centralized route registration via `registerRoutes` function
- API routes prefixed with `/api` for clear separation from static assets
- Static file serving handled by Vite in development, Express in production

**Storage Layer**
- Abstracted storage interface (`IStorage`) supporting multiple implementations
- In-memory storage (`MemStorage`) as default implementation for development
- Ready for database integration via Drizzle ORM (configured but not yet implemented)
- User management methods: `getUser`, `getUserByUsername`, `createUser`

**Build & Deployment**
- Development: `tsx` for TypeScript execution with hot reload
- Production build: Vite for frontend bundle, esbuild for server bundle
- Output structure: `dist/public` for client assets, `dist/index.js` for server

### External Dependencies

**Database (Configured, Not Yet Active)**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries and schema management
- Drizzle Kit for migrations and schema push operations
- Connection string expected in `DATABASE_URL` environment variable
- Schema definition in `shared/schema.ts` with Zod validation integration

**UI Component Libraries**
- Radix UI: Comprehensive suite of headless components (accordion, dialog, dropdown, select, toast, etc.)
- embla-carousel-react: Touch-friendly carousel implementation
- cmdk: Command palette component
- lucide-react: Icon library
- react-day-picker: Date picker component
- recharts: Charting library (imported but not actively used)

**Form Management**
- React Hook Form with @hookform/resolvers for validation
- Zod for schema validation
- Integration with shadcn/ui form components

**Styling & Theming**
- Tailwind CSS with PostCSS for processing
- class-variance-authority (cva): Utility for creating variant-based component APIs
- clsx & tailwind-merge: Conditional class merging
- Custom CSS variables for theme colors and elevation effects

**Development Tools**
- Replit-specific plugins: runtime error modal, cartographer for code navigation, dev banner
- TypeScript with strict mode enabled
- Path aliases for cleaner imports (@/, @shared/, @assets/)

**Asset Management**
- Static images stored in `attached_assets/generated_images/`
- Vite handles asset bundling and optimization
- Image paths resolved via @assets alias