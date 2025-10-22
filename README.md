# Student Management System - Backend API

A RESTful API backend for managing student records built with Express.js.

## 🚀 Features

- ✅ **Create** - Add new students via POST endpoint
- 📋 **Read** - Get all students or individual student by ID
- ✏️ **Update** - Edit student information via PUT endpoint
- 🗑️ **Delete** - Remove students via DELETE endpoint
- 🔒 **CORS Enabled** - Ready for frontend integration
- ⚡ **In-Memory Storage** - Fast data access (can be replaced with database)

## 📁 Project Structure

```
MT01_Student-Backend-Structure/
├── backend/
│   ├── server.js          # Express API server
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The backend API will run on `http://localhost:5000`

For development with auto-reload:
```bash
npm run dev
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/students` | Add a new student |
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get student by ID |
| PUT | `/students/:id` | Update student |
| DELETE | `/students/:id` | Delete student |

### Request/Response Examples

#### POST /students
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20,
  "course": "Computer Science"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20,
  "course": "Computer Science"
}
```

#### GET /students
**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 20,
    "course": "Computer Science"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 22,
    "course": "Engineering"
  }
]
```

## 🎯 Usage

1. **Start the backend server**:
```bash
cd backend
npm start
```

2. **Test the API** using Postman, cURL, or any HTTP client

3. The server will be running on `http://localhost:5000`

## 🔧 Configuration

### Backend Port
To change the backend port, modify the `PORT` variable in `backend/server.js` or set the `PORT` environment variable:

```bash
PORT=3000 npm start
```

## 📝 Notes

- The current implementation uses an **in-memory database** (array) for simplicity
- Data will be lost when the server restarts
- For production, integrate a real database (MongoDB, PostgreSQL, etc.)
- Add authentication and authorization for secure access
- Implement input validation and sanitization

## 🚀 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication & JWT tokens
- [ ] Pagination for large datasets
- [ ] Input validation with express-validator
- [ ] Rate limiting
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Logging with Winston or Morgan

## 📄 License

This project is open source and available under the MIT License.
