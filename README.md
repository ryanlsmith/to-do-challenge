# to-do-challenge

This monorepo is for an incomplete sample To Do web app. Your challenge is to improve the solution by adding a new feature that will require changes to both the UI and API.

## Getting Started

### Cloning the Repo

You'll want to start by cloning the repo and opening it in your preferred editor.

### Required Software

#### Docker
https://docs.docker.com/get-started/get-docker/


#### Node.js version 18+ or 20+
https://nodejs.org/en/download/package-manager

#### pnpm
`npm install -g pnpm`


#### Starting the UI / API / Postgres Docker Image

From the project root, run the app using `pnpm dev` which starts the UI, API, and database.

When the app is running, the following ports will accept connections:

- UI (React) http://localhost:5173/
- API (Express) http://localhost:3000/
- Database (Postgres) Port 5432
- Adminer (DB management tool) http://localhost:8080/

## The Tasks

### Please choose _ONE_ of the following to implement:

#### 1. Task Management

- As a user, I can
    - mark a task as completed
    - delete a task
    - clone a task

#### 2. Server-side pagination

- As a user, I can
    - view tasks 10 at a time
    - navigate between pages


#### 3. Task assignment

- As a user, I can assign a task to another user


## Getting help

This is not a test of syntax memorization, so please feel free to Google as needed. Please share your browser window on the screen share so we may follow along with your thinking.


