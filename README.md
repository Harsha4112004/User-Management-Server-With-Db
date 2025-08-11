# User-Management-Server-With-Db
A lightweight **server-side application** for managing users with full **CRUD** (Create, Read, Update, Delete) operations.  
Built with **MongoDB** and **Mongoose** for persistence, and **Express.js** for RESTful API architecture.


## 🚀 Features
- ✅ Create new users
- 🔍 Retrieve user details (by ID or list all)
- ✏️ Update user information
- ❌ Delete users
- 🌐 REST API architecture
- 📦 Environment variable configuration with `.env`

## 🛠 Tech Stack

- **Language:** JavaScript
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Environment Management:** dotenv
- **Dev Tools:** Nodemon (for hot-reloading during development)

## 🔗 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/users/adduser`     | Create a new user |
| GET    | `/users/viewall`     | Get all users     |
| GET    | `/users/view/:id` | Get user by ID    |
| PUT    | `/users/update/:id` | Update user by ID |
| DELETE | `/users/delete/:id` | Delete user by ID |

## ⚙️ Setup Instructions
1. Clone the Repository
```bash
git clone https://github.com/Harsha4112004/User-Management-Server-With-Db.git
cd user_management_server_with_db
```
2. In the .env file and paste your MongoDB connection link:
```bash
PORT=3000
DB_URL=<your-mongodb-connection-string>/<your database name>
```

3. Start the Server
For production:
```bash
npm run start
```
for development (auto reload):
```bash
npm run dev
```


## 📌 Notes
- Postman was used to test all endpoints.
- User data is stored in a MongoDB database.
- All document IDs are generated automatically by MongoDB (_id field).
- Use 127.0.0.1:3000 for local hostname
