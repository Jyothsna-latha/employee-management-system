const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://bjyothsnalatha:RSPDjrEmC8lL52os@cluster0.bilmpo6.mongodb.net/')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/employees', employeeRoutes);

const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));