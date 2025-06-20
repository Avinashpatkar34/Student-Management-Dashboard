const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;


app.use(cors({
  origin: 'https://student-management-dashboard-1.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));




const courses = [
  { id: 1, name: 'HTML Basics' },
  { id: 2, name: 'CSS Mastery' },
  { id: 3, name: 'JavaScript Pro' },
  { id: 4, name: 'React In Depth' },
  { id: 5, name: 'Node.js Backend' },
  { id: 6, name: 'Full Stack Development' },
];
app.get('/', (req, res) => {
  res.send('🎉 Backend is running!');
});
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}/api/courses`);
});
