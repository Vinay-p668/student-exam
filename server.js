const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const examRoutes = require('./routes/examRoutes');
const path = require('path');

dotenv.config();

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(error => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.use(cors({ origin: 'http://localhost:2800' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exam', examRoutes);

// Serve HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'public', 'register.html')));
app.get('/exam', (req, res) => res.sendFile(path.join(__dirname, 'public', 'exam.html')));
app.get('/result', (req, res) => res.sendFile(path.join(__dirname, 'public', 'result.html')));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));