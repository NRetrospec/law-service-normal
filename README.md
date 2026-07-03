# Justice & Co. - Law Firm Management System

A modern, premium, full-stack law firm website with client portal, admin dashboard, appointment booking, and payment integration.

## Features

### Frontend
- **React 19** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS 4** for modern, responsive styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing
- **TanStack Query** for server state management
- **Zustand** for client state management
- **Dark/Light mode** support
- **Mobile-first responsive design**

### Backend
- **Express.js** with TypeScript
- **Prisma ORM** with PostgreSQL
- **JWT Authentication** with refresh tokens
- **Stripe Integration** for payments
- **Email notifications** via Nodemailer
- **File upload** with Multer
- **RESTful API** design

### Key Features
- **Home Page**: Hero with CTA, practice areas, testimonials, case results
- **About Page**: Attorney bio, credentials, timeline
- **Practice Areas**: SEO-optimized pages for each service
- **Blog System**: CMS with rich content
- **Booking System**: Real-time appointment scheduling
- **Client Portal**: Secure access to case info, documents, messages
- **Admin Dashboard**: Manage clients, cases, appointments, analytics
- **Chat Widget**: AI-powered legal assistant

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)
- SMTP credentials (for emails)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd law-firm-website
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database
```bash
npx prisma migrate dev
npx prisma db seed
```

5. Start the development server
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run dev
```

6. Open your browser to `http://localhost:5173`

## Project Structure

```
├── prisma/                 # Database schema
│   └── schema.prisma
├── server/                 # Backend API
│   ├── index.ts           # Server entry
│   ├── routes/            # API routes
│   └── middleware/        # Auth & other middleware
├── src/                   # Frontend
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── layout/       # Layout components
│   ├── pages/            # Page components
│   ├── store/            # Zustand stores
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities & API
├── uploads/              # Uploaded files
└── dist/                 # Production build
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh access token

### Appointments
- `GET /api/appointments` - List appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment
- `POST /api/appointments/:id/cancel` - Cancel appointment

### Clients
- `GET /api/clients` - List clients
- `GET /api/clients/:id` - Get client details
- `PUT /api/clients/:id` - Update client

### Cases
- `GET /api/cases` - List cases
- `POST /api/cases` - Create case
- `GET /api/cases/featured` - Get featured cases

### Payments
- `POST /api/payments/create-consultation-payment` - Create payment intent
- `GET /api/payments` - List payments
- `POST /api/payments/webhook` - Stripe webhook

### Blog
- `GET /api/blog` - List blog posts
- `GET /api/blog/:slug` - Get single post
- `POST /api/blog` - Create post
- `PUT /api/blog/:id` - Update post

### Practice Areas
- `GET /api/practice-areas` - List practice areas
- `GET /api/practice-areas/:slug` - Get practice area details

## Database Schema

The application uses PostgreSQL with the following main entities:
- Users (Clients, Admins, Attorneys)
- Appointments
- Cases
- Payments
- Documents
- Messages
- Blog Posts
- Practice Areas
- Testimonials

See `prisma/schema.prisma` for complete schema definition.

## Deployment

### Docker
```bash
docker-compose up -d
```

### Production Build
```bash
# Build frontend
npm run build

# Start production server
npm run server:prod
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| JWT_SECRET | Secret key for JWT signing |
| STRIPE_SECRET_KEY | Stripe API secret key |
| SMTP_HOST | Email server host |
| SMTP_USER | Email server username |
| SMTP_PASS | Email server password |

## License

MIT License - feel free to use for your own law firm or legal practice.

## Support

For support or questions, please contact support@justiceco.com
