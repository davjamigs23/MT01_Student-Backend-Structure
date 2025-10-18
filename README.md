# Student Management System

A full-stack CRUD application for managing student records with a modern React frontend and Express.js backend.

## 🚀 Features

- ✅ **Create** - Add new students
- 📋 **Read** - View all students and individual student details
- ✏️ **Update** - Edit student information
- 🗑️ **Delete** - Remove students from the system
- 🔍 **Search** - Filter students by name, email, or course
- 🎨 **Modern UI** - Beautiful, responsive design with TailwindCSS

## 📁 Project Structure

```
MT01_Student-Backend-Structure/
├── backend/
│   ├── server.js          # Express API server
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles with Tailwind
│   ├── package.json       # Frontend dependencies
│   ├── tailwind.config.js # Tailwind configuration
│   └── postcss.config.js  # PostCSS configuration
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

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

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

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

1. **Start the backend server** (must be running on port 5000)
2. **Start the frontend application** (will open on port 3000)
3. **Add students** using the "Add Student" button
4. **Search students** using the search bar
5. **Edit students** by clicking the edit icon on any student card
6. **Delete students** by clicking the trash icon

## 🔧 Configuration

### Backend Port
To change the backend port, modify the `PORT` variable in `backend/server.js` or set the `PORT` environment variable.

### API URL
If you change the backend port, update the `API_URL` in `frontend/src/App.js`:
```javascript
const API_URL = 'http://localhost:YOUR_PORT';
```

## 📝 Notes

- The current implementation uses an **in-memory database** (array) for simplicity
- Data will be lost when the server restarts
- For production, integrate a real database (MongoDB, PostgreSQL, etc.)
- Add authentication and authorization for secure access
- Implement input validation and sanitization

## 🚀 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Pagination for large datasets
- [ ] Export data to CSV/Excel
- [ ] Student profile pictures
- [ ] Advanced filtering and sorting
- [ ] Email notifications

## 📄 License

This project is open source and available under the MIT License.
