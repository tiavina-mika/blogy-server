const express = require("express")
const cors = require("cors")
const initDatabase = require("./config/database");
const { createArticle, updateArticle, deleteArticle, getArticle, getArticles } = require("./controllers/article.controller");

initDatabase();

const PORT = 8082;
const app = express();

// -------- app config -------- //
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'));

// -------- endpoints -------- //
app.post('/articles', createArticle)
app.put('/articles/:id', updateArticle)
app.delete('/articles/:id', deleteArticle)
app.get('/articles/:id', getArticle)
app.get('/articles', getArticles)

app.listen(PORT, () => {
  console.log("server running on port:" + PORT);
})