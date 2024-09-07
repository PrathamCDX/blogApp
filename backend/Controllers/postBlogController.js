// import {}

import { insertBlogSQL } from "../databaseControllers.js";

const postBlog = async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    console.log(title, content);
    insertBlogSQL(title, content, (err, rows) => {
      if (err) throw err;
      console.log(rows);
      res.send(rows);
    });
  } catch (err) {
    console.error(err);
  }
};

export default postBlog;
