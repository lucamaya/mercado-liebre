const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
const port = 3030;

app.use(express.static('public'));



app.get('/',(req,res) => res.sendFile(path.json(__dirname, 'viewa', 'home.html')))



app.listen(port , () => console.log('Server ranning in http://localhost:' + port))