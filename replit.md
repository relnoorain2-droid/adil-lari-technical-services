# ADIL LARI TECHNICAL SERVICES Website

## Overview

This is a modern, professional website for ADIL LARI TECHNICAL SERVICES, a UAE-based technical services company specializing in cleaning, painting, plaster work, and plumbing/sanitary installation. The website is built as a full-stack application with a React frontend and Express backend, designed to showcase the company's services with a premium, high-class aesthetic featuring scroll-based animations and image-driven design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling
- **API Design**: RESTful API structure with `/api` prefix routing

### Database & ORM
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management

### Project Structure
- **Monorepo Design**: Shared code between client and server in `shared/` directory
- **Client**: React application in `client/` directory
- **Server**: Express API in `server/` directory
- **Shared**: Common types, schemas, and utilities

### Development Setup
- **Development Server**: Concurrent client (Vite) and server (tsx) execution
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Type Checking**: Unified TypeScript configuration across all packages
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)

### Styling & Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component Library**: Comprehensive UI components based on Radix primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation**: CSS animations with reveal-on-scroll effects
- **Typography**: Inter font family for modern, professional appearance

### Image Management
- **External Sources**: Unsplash for high-quality stock photography
- **Configuration**: Centralized image URLs in `imageConfig.ts`
- **Optimization**: Lazy loading and responsive image handling

### Page Structure
- **Home**: Hero section with parallax background, services overview, testimonials
- **About**: Company story, team information, statistics
- **Services**: Detailed service descriptions with WhatsApp integration
- **Gallery**: Image showcase with lightbox functionality
- **Contact**: Contact form with validation and WhatsApp integration

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Routing**: wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and caching

### UI & Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Font Awesome for comprehensive icon library
- **Fonts**: Google Fonts (Inter) for typography

### Backend Services
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Storage**: connect-pg-simple for PostgreSQL session store

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **TypeScript**: Full TypeScript support across the stack
- **Development Experience**: Replit integration with error overlay and cartographer

### External Service Integrations
- **WhatsApp Business**: Direct integration for customer communication (+971 54 796 5012)
- **Image CDN**: Unsplash for professional stock photography
- **Maps/Location**: UAE business address (Deira, Al Khabeesi)

### Utility Libraries
- **Validation**: Zod for runtime type validation and schema definition
- **Styling Utilities**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel for image galleries and sliders