const express = require("express")
const cors = require("cors")

const PORT = 8082;
const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/home', (req, res) => {
  return res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log("server running on port:" + PORT);
})