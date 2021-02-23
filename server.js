const express = require("express");

const app = express();

const port = process.env.port || 5000


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server started on port: ${port}`));