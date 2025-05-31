# 📌 Task Manager - API
A complete API for task management, featuring JWT authentication, team control, full CRUD operations, automated tests, and production deployment via Render.
<br><br>
## 🚀 Technologies Used
Node.js
Express.js
TypeScript
PostgreSQL
Prisma ORM
Docker
Zod (data validation)
Jest (automated tests)
Render (deployment)

## 🎯 Main Features
✅ JWT-based authentication and authorization
✅ Full CRUD for tasks
✅ Task assignment to specific team members
✅ Task status and priority control
✅ Team management with admin and member roles
✅ Automated tests with Jest
✅ Production-ready deployment using Render and Docker
<br><br><br><br>
## ⚙️ How to Run the Project

### Docker Setup
This project uses PostgreSQL via Bitnami's Docker image for the database service.
If you're running the project with Docker Compose, make sure to use the appropriate environment variables for the Bitnami PostgreSQL image.

Official Bitnami PostgreSQL Docker image:
➡️ https://hub.docker.com/r/bitnami/postgresql

Example setup is provided in docker-compose.yml.
<br><br><br>
⚠️ Note:
The Bitnami PostgreSQL image may have different default environment variables compared to the official postgres image.
For example, it uses POSTGRESQL_USERNAME, POSTGRESQL_PASSWORD, POSTGRESQL_DATABASE instead of POSTGRES_USER, etc.
Make sure your .env and prisma configs align with this.
<br><br><br>
## ✅ Steps:
<br>

<strong> Clone the repository: </strong>
<br>
git clone github.com/Pin4s/TaskManagerAPI<br>
cd github.com/Pin4s/TaskManagerAPI
<br>
Set up the .env file with your environment variables.
<br>

<strong>Install project dependencies:</strong>
<br>
npm install<br>

<strong>Start the PostgreSQL container:<br></strong>
docker-compose up -d<br>


<strong>Run Prisma migrations:</strong>
<br>
npx prisma migrate dev<br>

<strong>Seed the database (if necessary):</strong>
<br>
npx prisma db seed

<strong>Start the development server:</strong>
<br>
npm run dev


