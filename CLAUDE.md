# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoDiYoung (CoDYoung) is a React-based web application for managing study groups and projects. It's a community platform where users can create/join study groups, manage projects, and track progress.

## Development Commands

### Core Development
- `npm run dev` - Start development server (runs on port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Testing
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:hooks` - Run tests for hooks only
- `npm run test:components` - Run tests for components only

## Project Architecture

### Tech Stack
- **Framework**: React 18+ with Vite
- **State Management**: Zustand for global state
- **Data Fetching**: React Query (@tanstack/react-query)
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Rich Text**: TipTap editor with extensions
- **Testing**: Jest + React Testing Library
- **Build Tool**: Vite with React Compiler

### Key Architecture Patterns

#### Feature-Based Organization
The codebase uses feature-based folder structure under `src/feature/`:
- Each feature contains its own components, hooks, services, and utilities
- Features are self-contained with minimal cross-dependencies
- Common components are in `src/components/`, shared utilities in `src/utils/`

#### Service Layer Pattern
- Services in `src/services/` handle all API communication
- Each service is organized by domain (auth, project, study, userProfile)
- Services use the central configuration from `src/constants/config.js`
- API proxy configured for `/api` requests to `https://52.78.192.195:8080`

#### State Management Strategy
- **Zustand stores** for global state (auth, studyChannel, studyUI)
- **React Query** for server state and caching
- **Local component state** for UI-only state
- Custom hooks abstract state logic and provide clean component interfaces

#### Component Patterns
- **Layout Components**: `AppLayout.jsx` provides overall structure
- **UI Components**: Reusable components in `src/ui/`
- **Feature Components**: Domain-specific components within feature folders
- **Provider Pattern**: `QueryProvider.jsx` wraps the app for React Query

### Critical Services

#### Authentication Service (`src/services/authService.js`)
- Handles JWT token management with automatic expiration handling
- Provides login, logout, signup functionality
- Token validation and refresh logic
- Local storage management for user data

#### Store Integration
- `authStore.js` - Authentication state management
- `studyChannelStore.js` - Study channel specific state
- `studyUIStore.js` - UI state for study features

### Development Conventions

#### File Organization
- Feature folders: components, hooks, constants, services in subdirectories
- Index files for clean imports where appropriate
- Test files co-located with components in `__tests__` folders

#### Code Patterns
- Custom hooks for business logic (prefix with `use`)
- Services as static classes with domain-specific methods
- Constants organized by domain in `src/constants/`
- Utilities are pure functions in `src/utils/`

#### Component Architecture
- Lazy loading for route-level components to optimize bundle size
- Error boundaries for graceful error handling
- Loading states using `LoadingFallback.jsx`
- Suspense boundaries for lazy-loaded routes

### Build Configuration

#### Vite Configuration
- React Compiler plugin enabled for optimization
- Manual chunk splitting configured for optimal loading
- Development proxy setup for API calls
- Port 3000 for both dev and preview

#### Testing Setup
- Jest with jsdom environment
- React Testing Library setup in `jest.setup.js`
- Path aliasing with `@/` pointing to `src/`
- Coverage collection from all source files

### Key Dependencies
- **Editor**: TipTap with table, image, link, and code block extensions
- **Icons**: Heroicons, Lucide React, React Icons
- **Date Handling**: date-fns, react-datepicker
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion
- **Sanitization**: DOMPurify for content safety

## Important Notes
- The application uses React 19 (not Vue as mentioned in README.md)
- Authentication tokens are managed automatically with expiration handling
- All API requests go through the configured proxy to the backend server
- The app supports admin functionality with role-based routing
- Rich text editing is heavily featured using TipTap editor