const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); 
const app = express();
const port = 3001; 

app.use(cors()); 
app.use(bodyParser.json());

app.post('/api/writeFile', (req, res) => {
  const data = req.body;
console.log('Data in server',JSON.stringify(data))
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  fs.writeFileSync(path.join(dataDir, 'Result.json'), JSON.stringify(data, null, 2));

  res.send({ message: 'Data written to file successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
