Thoughts - A Platform for Unfiltered Expression
🚀 Project Overview
Thoughts is a modern, intuitive blogging platform designed for creators to express themselves freely and connect with a like-minded audience. It prioritizes a distraction-free writing experience, seamless content management, and robust user engagement features, all built on a solid, secure, and maintainable backend architecture.

This repository contains the backend API for the "Thoughts" platform, developed using Node.js, Express.js, TypeScript, and Prisma ORM.

✨ Key Features
Creator Experience:
Pure Writing Focus: A minimalist editor for distraction-free content creation.

Effortless Publishing: Users can easily publish new posts to share their stories.

Full Content Control: Authors maintain complete autonomy to manage and delete their posts at any time.

Community & Engagement:
Direct Engagement: Readers can connect with authors and content through thoughtful comments.

Appreciation with Likes: Users can express appreciation for posts with a simple liking mechanism.

Discover & Connect: Explore a vibrant public feed and view unique user profiles to discover new voices and connect with kindred spirits.

Platform Foundation:
Secure Authentication: User accounts secured with industry-standard JWTs.

Robust Input Validation: All API requests are strictly validated using Zod schemas to ensure data integrity and security.

Clean & Maintainable Codebase: Built with TypeScript for type safety and maintainability.

🛠️ Tech Stack
Backend:
Node.js: JavaScript runtime.

Express.js: Web application framework for building RESTful APIs.

TypeScript: Superset of JavaScript providing static type checking.

Prisma ORM: Next-generation ORM for simplified database interactions and schema management.

Database: PostgreSQL (or your configured relational database with Prisma).

JWT (JSON Web Tokens): For secure user authentication.

Zod: For powerful runtime validation of API request bodies and parameters.

dotenv: For managing environment variables.

Frontend (Implied for full application context - Not included in this repo):
React: JavaScript library for building user interfaces.

Tailwind CSS: Utility-first CSS framework for rapid UI development.

Zustand: A fast, small, and scalable bear-bones state-management solution.

🏗️ Backend Architecture (High-Level)
The backend follows a modular, layered architecture:

app.ts / index.ts: Main entry point, setting up Express, middleware, and routing.

routes/: Defines API endpoints, grouped by resource (e.g., authRoutes.ts, postRoutes.ts, userRoutes.ts).

middleware/: Contains reusable middleware functions for authentication (verifyJWT), authorization (verifyAdmin), and input validation (validateRequest using Zod schemas).

prisma/schema.prisma: Defines the application's database schema and relationships, managed by Prisma Migrate.


🗄️ Database Schema
The core database schema is defined using Prisma.

// schema.prisma

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String   // Hashed password
  username  String?
  role      String   @default("User") // e.g., "User", "Admin"
  posts     Post[]   // Relation to posts authored by this user
  comments  Comments[] @relation("Commenter") // Relation to comments made by this user
  like      Like[]   // Relation to likes made by this user
}

model Post {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  picture     String?  // Optional image URL for the post
  authorId    Int
  author      User     @relation(fields: [authorId], references: [id])
  createdAt   DateTime @default(now())
  like        Like[]
  comments    Comments[]
}

model Like {
  id          Int      @id @default(autoincrement())
  likedBy     User     @relation("Liker", fields: [likeId], references: [id])
  likeId      Int
  likedPost   Post     @relation(fields: [likedPostId], references: [id], onDelete: Cascade)
  likedPostId Int

  @@unique([likeId, likedPostId]) // Ensures a user can only like a post once
}

model Comments {
  id          Int      @id @default(autoincrement())
  commentor   User     @relation("Commenter", fields: [commentorId], references: [id])
  commentorId Int
  postId      Int
  post        Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  content     String
  createdAt   DateTime @default(now())
}

Note: onDelete: Cascade ensures that if a Post is deleted, all associated Likes and Comments are automatically deleted by the database, maintaining referential integrity.

⚙️ Setup and Installation
To get this project up and running locally:

Clone the repository:

git clone https://github.com/ArthKulkarni93/Thoughts.git
cd thoughts-backend

Install dependencies:

npm install
# or
yarn install

Configure Environment Variables:
Create a .env file in the root directory and populate it with the required variables (see Environment Variables section below).

Set up your Database:
Ensure you have a PostgreSQL (or your chosen database) instance running and accessible. Update your DATABASE_URL in .env accordingly.

Run Prisma Migrations:
This will create the necessary tables in your database based on schema.prisma.

npx prisma migrate dev --name init

If you make schema changes later, run npx prisma migrate dev again.

Generate Prisma Client:

npx prisma generate

Build the TypeScript project:

npm run build
# or
yarn build

This compiles TypeScript files to JavaScript in the output/ (or dist/) directory.

Start the development server:

npm run start
# or
yarn start

The server will typically run on http://localhost:4001 (or your configured PORT).

🔑 Environment Variables
Create a .env file in the root of the project with the following:

PORT=4001
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
JWTSECRET="your_very_secret_jwt_key_here_at_least_32_chars_long"

Important:

Replace your_very_secret_jwt_key_here_at_least_32_chars_long with a strong, random string.

Ensure DATABASE_URL points to your actual database instance.

🤝 Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. For direct contributions, please fork the repository and create a pull request following standard practices.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Contact
For any questions or professional inquiries (freelancing opportunities, collaborations),
