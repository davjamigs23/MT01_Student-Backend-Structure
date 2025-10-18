const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with actual database in production)
let students = [];

let nextId = 1;

// POST /students - Add student
app.post('/students', (req, res) => {
  try {
    const { name, email, age, course } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const newStudent = {
      id: nextId++,
      name,
      email,
      age: age || null,
      course: course || null
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

// GET /students - List all students
app.get('/students', (req, res) => {
  try {
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
});

// GET /students/:id - Get student by ID
app.get('/students/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student' });
  }
});

// PUT /students/:id - Update student
app.put('/students/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, age, course } = req.body;
    
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Student not found' });
    }

    students[index] = {
      ...students[index],
      name: name || students[index].name,
      email: email || students[index].email,
      age: age !== undefined ? age : students[index].age,
      course: course !== undefined ? course : students[index].course
    };

    res.json(students[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
});

// DELETE /students/:id - Delete student
app.delete('/students/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const deletedStudent = students.splice(index, 1)[0];
    res.json({ message: 'Student deleted successfully', student: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Student Management API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
