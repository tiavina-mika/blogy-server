const express = require("express")
const cors = require("cors")
const initDatabase = require("./config/database");
const articleRouter = require("./routes/article.route");

const PORT = 8082;

const init = async () => {
  await initDatabase();
   
  const app = express();

  // -------- app config -------- //
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json())
  app.use(express.static('public'));

  // -------- endpoints -------- //
  app.use('/articles', articleRouter)

  app.listen(PORT, () => {
    console.log("server running on port:" + PORT);
  })
}

init();