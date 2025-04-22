const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./route/userRoute');
const app = express();
const PORT = process.env.PORT || 8000;

// DB connection
mongoose.connect('mongodb://localhost:27017/myLogin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
