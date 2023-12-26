const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
