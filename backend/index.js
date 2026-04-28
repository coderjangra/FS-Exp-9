const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "FS-9 Backend Running on AWS EC2!", status: "Healthy" });
});

app.get('/api/data', (req, res) => {
  res.json({ 
    id: 1, 
    name: "Sample Data", 
    description: "This data is served from the EC2 instance." 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
