# employee-management-system
This is a full-stack Employee Management System built with:

Frontend: Angular 18 (Standalone API)

Backend: Node.js + Express

Database: MongoDB Atlas (cloud database)

Auth: JWT authentication with role-based access (admin vs employee)

🧩 Features

✅ Employee registration & login (email & password)
✅ JWT-based authentication
✅ Role-based access (admin & employee)
✅ Admin Dashboard:

View all employees

Search by name/email/role

Add new employees

Edit & delete employees
✅ Employee Dashboard:

View only their own data
✅ MongoDB Atlas integration
✅ Angular 18 Standalone Components and Routing

📁 Project Structure

Frontend (Angular)

src/
├── app/
│ ├── components/
│ │ ├── login/
│ │ ├── register/
│ │ ├── data-table/
│ │ └── employee-form/
│ ├── services/
│ │ ├── auth.service.ts
│ │ └── employee.service.ts
│ ├── app.routes.ts
│ └── app.component.ts

Backend (Node + Express)

backend/
├── models/
│ └── Employee.js
├── routes/
│ └── employeeRoutes.js
├── server.js
└── package.json


MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

🛠 Installation & Setup

Frontend Setup (Angular)

cd frontend
npm install
ng serve

Then visit http://localhost:4200

Backend Setup (Node.js)

cd backend
npm install
npm start

This will start the backend on http://localhost:7000

Make sure MongoDB Atlas connection string is correctly placed in backend/.env

🧪 API Endpoints

Base URL: http://localhost:7000/api/employees

POST /register → Register new employee
POST /login → Login employee
GET / → Get all employees
GET /:id → Get employee by ID
DELETE /:id → Delete employee

🧠 Technologies Used

Angular 18 (Standalone API)

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (jsonwebtoken)

bcryptjs

CORS

dotenv

🔒 User Roles

admin → Can manage all employees (CRUD)

employee → Can view only their own profile

📦 Scripts

Frontend (Angular)

ng serve → Run the app
ng build → Build for production

Backend (Node.js)

npm start → Start Express server
npm run dev → (If using nodemon)


📄 License

This project is open-source and available under the MIT License.

📬 Author

Created by Your Name
Email: bjyothsnalatha@gmail.com
GitHub: https://github.com/Jyothsna-latha
