# Quiz Builder

A modern full-stack web application designed for creating, viewing, managing, and inspecting custom interactive quizzes with various question types.

---

## Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [Prerequisites](#-prerequisites)
- [Local Setup & Installation](#-local-setup--installation)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [API Reference](#-api-reference)
  - [Endpoints](#endpoints)
  - [Example Payload (cURL)](#example-payload-curl)
- [Available Scripts](#-available-scripts)

---

## Overview

**Quiz Builder** provides an end-to-end platform for constructing quizzes:
- **Backend**: Built with **NestJS 11**, **Prisma ORM**, and **PostgreSQL** to provide a robust RESTful API with validation and cascading relational data structures.
- **Frontend**: Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TanStack React Query** for high performance, smooth UX, and reactive state management.

---

## Tech Stack

### Frontend
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management & Data Fetching**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend
- **Framework**: [NestJS 11](https://nestjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Prisma ORM](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Validation & Transformation**: `class-validator`, `class-transformer`

---

## Key Features

- **Quiz Creation (`/create`)**:
  - Add quiz title and dynamic questions list.
  - Supports multiple question types:
    - **Boolean**: True / False options with one correct answer.
    - **Input**: Short answer text input.
    - **Checkbox**: Multiple choices with one or multiple correct answers.
  - Reorder, customize, and add/remove options on the fly.
  - Complete client-side & server-side validation.

- **Quiz List (`/quizzes`)**:
  - View all quizzes with question count badges and creation dates.
  - Instant deletion with optimistic/reactive cache updates via React Query.
  - Direct navigation to quiz details.

- **Quiz Details (`/quizzes/:id`)**:
  - Detailed view of all questions and options.
  - Visual indicators for correct answers and question types.

---

## Project Structure

```text
quiz-builder/
├── backend/                         # NestJS API application
│   ├── prisma/
│   │   └── schema.prisma            # Prisma schema & relational models
│   ├── src/
│   │   ├── dto/                     # Data Transfer Objects with validation
│   │   ├── quizzes/                 # Quiz module, controller, and service
│   │   ├── prisma.service.ts        # Prisma client lifecycle service
│   │   ├── app.module.ts            # Root application module
│   │   └── main.ts                  # NestJS bootstrap entry point
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                        # Next.js client application
│   ├── src/
│   │   ├── app/                     # App Router pages & layouts
│   │   │   ├── create/page.tsx      # Create Quiz page (/create)
│   │   │   ├── quizzes/page.tsx     # Quiz list page (/quizzes)
│   │   │   ├── quizzes/[id]/        # Quiz detail page (/quizzes/[id])
│   │   │   ├── layout.tsx           # Global layout & query client provider
│   │   │   └── page.tsx             # Home landing page
│   │   ├── components/              # Reusable UI components
│   │   │   ├── CreateQuizForm.tsx   # Quiz creation form
│   │   │   ├── QuestionEditor.tsx   # Dynamic question editor
│   │   │   ├── QuizCard.tsx         # Quiz card component
│   │   │   ├── QuizDetailView.tsx   # Quiz detail inspector
│   │   │   └── ...
│   │   ├── hooks/                   # React Query custom hooks (useQuizzes)
│   │   ├── services/                # API client (quiz.service.ts)
│   │   └── types.ts                 # TypeScript interfaces and DTOs
│   └── package.json
│
└── README.md
```

---

## Prerequisites

Ensure you have the following installed on your local environment:
- **Node.js**: `v18.x` or higher (recommended `v20+`)
- **npm** (or `pnpm` / `yarn`)
- **PostgreSQL**: Local PostgreSQL instance or a cloud database (e.g., Supabase, Neon, Railway)

---

## Local Setup & Installation

### 1. Clone Repository

```bash
git clone <REPOSITORY_URL>
cd quiz_builder
```

---

### 2. Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the `backend/` root directory:
   ```env
   PORT=3000
   DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:5432/<DATABASE_NAME>?schema=public"
   ```
   > *Replace `<USER>`, `<PASSWORD>`, `<HOST>`, and `<DATABASE_NAME>` with your actual PostgreSQL credentials.*

4. **Generate Prisma Client and apply migrations:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
   *(Or run `npx prisma db push` to push schema directly without migration files)*

5. **Start the backend development server:**
   ```bash
   npm run start:dev
   ```

   The backend API will be available at: **`http://localhost:3001`**

---

### 3. Frontend Setup

1. **Open a new terminal and navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file in the `frontend/` root directory:
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:3001"
   ```

4. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at: **`http://localhost:300`**.

---

## API Reference

### Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/quizzes` | Create a new quiz with nested questions and options |
| `GET` | `/quizzes` | Retrieve list of all quizzes with question count |
| `GET` | `/quizzes/:id` | Get full quiz details by ID (questions & options) |
| `DELETE` | `/quizzes/:id` | Delete a quiz and all associated questions/options |
