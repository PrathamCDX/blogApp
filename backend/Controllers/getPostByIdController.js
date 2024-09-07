import { getAllPostByIdSQL } from "../databaseControllers.js";

const getPostById = async (req, res) => {
  const id = req.params.id;
  await getAllPostByIdSQL(id, (err, rows) => {
    if (err) throw err;

    res.send(rows);
  });
};

export default getPostById;
