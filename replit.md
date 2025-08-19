# TRCV - Corporate Event Planning Website

## Overview

TRCV is a corporate event planning company website built as a full-stack web application. The platform showcases the company's services in India, including corporate events, conferences, trainings, and AV production. The website features a modern, responsive design with comprehensive information about services, portfolio showcase, client testimonials, and a contact form for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system including TRCV brand colors and gradients
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with JSON responses
- **Data Storage**: In-memory storage (MemStorage) for contact form submissions
- **Schema Validation**: Zod schemas for request/response validation
- **Development**: Hot module replacement and development middleware

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Contact submissions table with fields for name, company, email, phone, event type, and message
- **Migrations**: Drizzle Kit for database schema management
- **Current State**: Uses in-memory storage but prepared for PostgreSQL integration

### Design System
- **Color Palette**: Custom TRCV brand colors (orange, purple, blue, emerald, amber, pink)
- **Typography**: Inter font family for modern, clean appearance
- **Components**: Consistent component library with hover effects and animations
- **Responsive**: Mobile-first design with breakpoint-based layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Content Architecture
- **Pages**: Home, About, Services, Portfolio, Blog, Testimonials, Contact, FAQ, Privacy, Terms
- **SEO**: Meta tags, structured data, and optimized content for search engines
- **Performance**: Image optimization, lazy loading, and efficient asset bundling

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **ESBuild**: Fast bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider (configured but not actively used)
- **Drizzle Kit**: Database migrations and schema management

### Form Handling and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for type-safe data handling
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### State Management
- **TanStack Query**: Server state management with caching and synchronization

### Deployment and Hosting
- **Replit**: Development and hosting platform with specific plugins for cartographer and runtime error handling

### Development Dependencies
- **TypeScript**: Type checking and development tooling
- **TSX**: TypeScript execution for development server
- **Various @types packages**: Type definitions for third-party libraries