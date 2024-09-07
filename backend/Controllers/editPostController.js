import { updatePostSQL } from "../databaseControllers.js";

const editPost = async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const id = req.body.id;
    await updatePostSQL(id, title, content, (err, rows) => {
      if (err) throw new Error(err);
      if (rows) res.send(rows);
    });
  } catch (err) {
    console.log("edit post controller  :     ", err.message);
    return res.status(500).send(err);
  }
};

export default editPost;
