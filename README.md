# Movies App

## Description

This project is a Node.js REST API for managing movies and TV shows, including authentication using JWT.

## Tech Stack

- Node.js
- Express.js
- Mongoose
- JWT for authentication
- ESLint for code linting

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`:

`JWT_SECRET`:

`MONGO_URI`:

## Run Locally

Clone the project

```bash
  git clone https://github.com/FrancoMirandaDev/movies-app
```

Go to the project directory

```bash
  cd movies=app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Endpoints

### Authentication

- Get("/api/auth/refresh")

- Get("/api/auth/register")

### Movies

- Get("/api/movies")

- Post("/api/movies/new")

### TVShow

- Get("/api/TVShow")

- Get("/api/TVShow/:title/:season/:episode")
