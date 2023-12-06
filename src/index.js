const express = require("express")
const cors = require("cors")

const PORT = 8082;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'));

const articles = [
  {
    id: 1,
    title: "Mon super article 01"
  },
  {
    id: 2,
    title: "Mon super article 01"
  }
];

app.post('/articles', (req, res) => {
  const { title } = req.body;

  const lastArticle = articles[articles.length - 1 ];
  const newArticle = { title, id: lastArticle.id + 1 };
  articles.push(newArticle);

  return res.status(200).json({ success: true, articles })
})

app.put('/articles/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  for (const article of articles) {
    if (article.id === +id) {
      article.title = title
    }
  }

  const updatedArticle = articles.find(article => article.id === +id)

  return res.status(200).json({ success: true, article: updatedArticle })
})

app.delete('/articles/:id', (req, res) => {
  const { id } = req.params;

  const deletedArticleIndex = articles.findIndex(article => article.id === +id)
  articles.splice(deletedArticleIndex, 1)

  return res.status(200).json({ success: true, articles })
})

app.get('/articles/:id', (req, res) => {
  try {
    const { id } = req.params;
    const article = articles.find(article => article.id === + id);

    if (!article) {
      throw new Error('Article with id"' + id + '" not found');
    }
  
    return res.status(200).json({ success: true, article });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
})

app.get('/articles', (req, res) => {
  return res.status(200).json({ success: true, articles })
})

app.listen(PORT, () => {
  console.log("server running on port:" + PORT);
})