const express = require('express');
const { createArticle, updateArticle, deleteArticle, getArticle, getArticles } = require('../controllers/article.controller');
const articleRouter = express.Router();

// -------- endpoints -------- //
articleRouter
  .post('/', createArticle)
  .put('/:id', updateArticle)
  .delete('/:id', deleteArticle)
  .get('/:id', getArticle)
  .get('/', getArticles)

module.exports = articleRouter;