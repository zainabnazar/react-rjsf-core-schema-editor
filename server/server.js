const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import cors
const app = express();
const port = 3001; // You can use any port you prefer

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

// Endpoint to handle writing data to a file
app.post('/api/writeFile', (req, res) => {
  const data = req.body;
console.log('Data in server',JSON.stringify(data))
  // Ensure the data directory exists
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  // Write the data to a file
  fs.writeFileSync(path.join(dataDir, 'Result.json'), JSON.stringify(data, null, 2));

  res.send({ message: 'Data written to file successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
