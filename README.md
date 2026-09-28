# ShopSphere

<div align="center">

<img src="./frontend/src/assets/favicon.png" alt="ShopSphere Logo" width="120"/>

<br/>

A **full-stack e-commerce platform** built with the MERN stack — featuring a customer storefront, a powerful admin dashboard, and multi-gateway payment integration.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Data Models](#-data-models)
- [Frontend Routes](#-frontend-routes)

---

## Overview

ShopSphere is a production-ready e-commerce web application composed of three independent services:

| Service | Description | Default Port |
|---------|-------------|--------------|
| **Frontend** | Customer-facing storefront (React + Vite) | `5173` |
| **Admin** | Admin dashboard for product & order management (React + Vite) | `5174` |
| **Backend** | REST API server (Express + MongoDB) | `4000` |

---

## Features

### Customer Storefront
- **Product Browsing** — Browse a full collection with category and sub-category filtering
- **Live Search** — Real-time search bar across all products
- **Product Detail Pages** — Multi-image galleries, size selectors, and related product suggestions
- **Shopping Cart** — Persistent cart synced to the server for authenticated users
- **Checkout** — Full delivery information form with three payment options
- **Order History** — View all past and current orders with live status tracking
- **Authentication** — JWT-based user registration and login with localStorage persistence

### Admin Dashboard
- **Secure Login** — Credential-based admin authentication with JWT
- **Add Products** — Upload up to 4 product images (stored on Cloudinary) with category, sub-category, size options, price, and bestseller flag
- **Product Listing** — View and delete existing products
- **Order Management** — View all customer orders and update their status (e.g., *Order Placed → Packing → Shipped → Out for delivery → Delivered*)

### Payment Integration

| Method | Status |
|--------|--------|
| Cash on Delivery (COD) | Fully implemented |
| Stripe | Fully implemented (hosted checkout + session verification) |
| Razorpay | Stub ready for implementation |

---

## Tech Stack

### Frontend & Admin Panel

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI component framework |
| React Router DOM | 7 | Client-side routing |
| Tailwind CSS | 4 | Utility-first styling |
| Axios | 1.x | HTTP client for API calls |
| React Toastify | 11 | Toast notification system |
| Vite | 8 | Build tool & dev server |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js + Express | 5 | REST API server |
| MongoDB + Mongoose | 9 | Database & ODM |
| Cloudinary SDK | 2 | Product image hosting & CDN |
| Multer | 2 | Multipart/form-data file handling |
| Stripe SDK | 22 | Stripe payment gateway |
| Razorpay SDK | 2 | Razorpay payment gateway (stub) |
| JSON Web Token | 9 | Authentication token signing & verification |
| bcrypt | 6 | Secure password hashing |
| Validator | 13 | Email & input validation |
| dotenv | 18 | Environment variable management |
| nodemon | 3 | Dev server auto-restart |

---

## Project Structure

```
ShopSphere/
├── vercel.json                   # Root Vercel multi-service config
│
├── frontend/                     # Customer-facing storefront
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── vercel.json
│   └── src/
│       ├── main.jsx              # React entry point with context provider
│       ├── App.jsx               # Root component with routing
│       ├── index.css
│       ├── assets/               # Static assets & asset exports
│       ├── context/
│       │   └── ShopContext.jsx   # Global state (cart, products, auth, search)
│       ├── pages/                # Route-level page components
│       │   ├── Home.jsx
│       │   ├── Collection.jsx    # Filterable product grid
│       │   ├── Product.jsx       # Product detail & add-to-cart
│       │   ├── Cart.jsx
│       │   ├── PlaceOrder.jsx    # Checkout with delivery & payment
│       │   ├── Orders.jsx        # User order history
│       │   ├── Login.jsx         # Login / Registration
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   └── Verify.jsx        # Stripe payment verification handler
│       └── components/           # Reusable UI components
│           ├── Navbar.jsx
│           ├── Footer.jsx
│           ├── Hero.jsx
│           ├── SearchBar.jsx
│           ├── LatestCollection.jsx
│           ├── Bestseller.jsx
│           ├── ProductItem.jsx
│           ├── RelatedProducts.jsx
│           ├── CartTotal.jsx
│           ├── OurPolicy.jsx
│           ├── NewsLetterBox.jsx
│           └── Title.jsx
│
├── admin/                        # Admin dashboard
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── vercel.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx               # Admin routing with auth gate
│       ├── index.css
│       ├── assets/
│       ├── pages/
│       │   ├── Add.jsx           # Add new product form
│       │   ├── List.jsx          # Product list & management
│       │   └── Orders.jsx        # All orders with status updates
│       └── components/
│           ├── Navbar.jsx
│           ├── Sidebar.jsx
│           └── Login.jsx         # Admin login gate
│
└── backend/                      # REST API server
    ├── server.js                 # Express entry point
    ├── package.json
    ├── vercel.json
    ├── config/
    │   ├── mongodb.js            # MongoDB connection setup
    │   └── cloudinary.js         # Cloudinary SDK configuration
    ├── models/
    │   ├── userModel.js          # User Mongoose schema
    │   ├── productModel.js       # Product Mongoose schema
    │   └── orderModel.js         # Order Mongoose schema
    ├── controllers/
    │   ├── userController.js     # Register, login, admin login
    │   ├── productController.js  # Add, list, remove, single product
    │   ├── cartController.js     # Add, update, get cart
    │   └── orderController.js    # Place order (COD/Stripe), verify, manage
    ├── routes/
    │   ├── userRoute.js
    │   ├── productRoute.js
    │   ├── cartRoute.js
    │   └── orderRoute.js
    └── middleware/
        ├── auth.js               # JWT user authentication middleware
        ├── adminAuth.js          # JWT admin authentication middleware
        └── multer.js             # Multer file upload configuration
```

---

## Architecture

```
┌──────────────────────────┐     ┌──────────────────────────┐
│   Frontend (React/Vite)  │     │  Admin Panel (React/Vite) │
│   Customer Storefront    │     │  Product & Order Mgmt     │
└────────────┬─────────────┘     └────────────┬──────────────┘
             │  Axios HTTP Requests            │  Axios HTTP Requests
             │  (JWT token in headers)         │  (Admin JWT in headers)
             ▼                                 ▼
┌────────────────────────────────────────────────────────────────┐
│                    Backend (Express.js)                        │
│                                                                │
│   /api/user      /api/product     /api/cart      /api/order    │
│       │               │               │               │        │
│  Public + JWT    Admin JWT        User JWT      User + Admin   │
│  middleware      middleware       middleware     JWT middleware │
│                       │                               │        │
│                  Multer (upload)               Stripe SDK      │
└───────────────────────┬───────────────────────────────────────┘
                        │  Mongoose ODM
            ┌───────────┴────────────┐
            ▼                        ▼
   ┌─────────────────┐    ┌─────────────────────┐
   │  MongoDB Atlas  │    │   Cloudinary CDN     │
   │  Users, Orders, │    │   Product Images     │
   │  Products       │    │   (up to 4 / product)│
   └─────────────────┘    └─────────────────────┘
```

---

## API Reference

**Base URL:** `http://localhost:4000`

### User Routes — `/api/user`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/register` | Public | Register a new user account |
| `POST` | `/login` | Public | Log in and receive a JWT |
| `POST` | `/admin` | Public | Admin login — returns a signed admin JWT |

### Product Routes — `/api/product`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/add` | Admin | Add a new product with up to 4 images |
| `POST` | `/remove` | Admin | Remove a product by ID |
| `GET` | `/list` | Public | Get all products |
| `POST` | `/single` | Admin | Get a single product by ID |

### Cart Routes — `/api/cart`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/add` | User | Add an item (with size) to the cart |
| `POST` | `/update` | User | Update the quantity of a cart item |
| `POST` | `/get` | User | Retrieve the user's current cart |

### Order Routes — `/api/order`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/place` | User | Place an order via Cash on Delivery |
| `POST` | `/stripe` | User | Place an order and get a Stripe checkout URL |
| `POST` | `/razorpay` | User | Place an order via Razorpay *(stub)* |
| `POST` | `/verifystripe` | User | Verify Stripe payment and confirm order |
| `POST` | `/list` | Admin | Get all orders |
| `POST` | `/status` | Admin | Update the status of an order |
| `POST` | `/userorders` | User | Get all orders for the authenticated user |

---

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- A **MongoDB** connection URI (MongoDB Atlas recommended)
- A **Cloudinary** account (for image hosting)
- A **Stripe** account (for card payments)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ShopSphere.git
cd ShopSphere
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file (see [Environment Variables](#-environment-variables)), then start the development server:

```bash
npm run server
# API server running at http://localhost:4000
```

### 3. Set Up the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file, then start the Vite dev server:

```bash
npm run dev
# Storefront running at http://localhost:5173
```

### 4. Set Up the Admin Panel

```bash
cd ../admin
npm install
```

Create a `.env` file, then start the Vite dev server:

```bash
npm run dev
# Admin panel running at http://localhost:5174
```

> **Tip:** Run all three services simultaneously in separate terminal windows.

---

## Environment Variables

### `backend/.env`

```env
# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ShopSphere

# JWT Secret (use a long, random string)
JWT_SECRET=your_super_secret_jwt_key

# Admin Credentials
ADMIN_EMAIL=admin@shopsphere.com
ADMIN_PASSWORD=your_secure_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=sk_test_...

# Server Port (optional, defaults to 4000)
PORT=4000
```

### `frontend/.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

### `admin/.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Deployment

ShopSphere is configured for **Vercel** deployment as a multi-service project. The root `vercel.json` declares all three services:

```json
{
  "services": {
    "frontend": { "root": "frontend", "framework": "vite" },
    "admin":    { "root": "admin",    "framework": "vite" },
    "backend":  { "root": "backend" }
  }
}
```

**Steps to deploy:**

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. For each service, add the corresponding environment variables in the Vercel dashboard.
4. Deploy — Vercel will build and serve all three services automatically.

> **Important:** After deploying, update `VITE_BACKEND_URL` in both the frontend and admin `.env` settings on Vercel to point to your live backend URL.

---

## Data Models

### User

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | String | ✅ | User's full name |
| `email` | String | ✅ | Unique email address |
| `password` | String | ✅ | bcrypt-hashed password |
| `cartData` | Object | — | Persisted cart: `{ itemId: { size: quantity } }` |

### Product

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | String | ✅ | Product name |
| `description` | String | ✅ | Product description |
| `price` | Number | ✅ | Price in INR (₹) |
| `image` | Array | ✅ | Cloudinary image URLs (up to 4) |
| `category` | String | ✅ | Top-level category (e.g., Men, Women) |
| `subCategory` | String | ✅ | Sub-category (e.g., Topwear, Bottomwear) |
| `sizes` | Array | ✅ | Available sizes (e.g., `["S","M","L","XL"]`) |
| `bestseller` | Boolean | — | Whether to feature as a bestseller |
| `date` | Number | ✅ | Creation timestamp (Unix ms) |

### Order

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `userId` | String | ✅ | — | ID of the user who placed the order |
| `items` | Array | ✅ | — | Ordered products with size & quantity |
| `amount` | Number | ✅ | — | Total amount including delivery |
| `address` | Object | ✅ | — | Full delivery address |
| `status` | String | ✅ | `"Order Placed"` | Current order status |
| `paymentMethod` | String | ✅ | — | `"COD"` / `"Stripe"` / `"Razorpay"` |
| `payment` | Boolean | ✅ | `false` | Whether payment has been confirmed |
| `date` | Number | ✅ | — | Order timestamp (Unix ms) |

---

## Frontend Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page with hero banner, latest collection & bestsellers |
| `/collection` | `Collection` | Filterable, sortable product grid |
| `/product/:productId` | `Product` | Product detail, image gallery, size selector & add-to-cart |
| `/cart` | `Cart` | Shopping cart with quantity controls |
| `/place-order` | `PlaceOrder` | Checkout with delivery info & payment method selection |
| `/orders` | `Orders` | Order history for the authenticated user |
| `/login` | `Login` | User login and registration |
| `/about` | `About` | About page |
| `/contact` | `Contact` | Contact information |
| `/verify` | `Verify` | Stripe payment success/cancel handler |

---

<div align="center">
  <sub>Built with ❤️ using the MERN stack</sub>
</div>
