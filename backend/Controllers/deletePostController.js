import { deleteBlogByIdSql } from "../databaseControllers.js";

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteBlogByIdSql(id, (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
  } catch (err) {
    return res.send(err);
  }
};

export default deletePost;
