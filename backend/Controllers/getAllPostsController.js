// const sqlTables = `SELECT * FROM blogs ;`;
// db.all(sqlTables, [], (err, rows) => {
//   if (err) {
//     console.error("Error creating table:", err.message);
//   } else {
//     console.log("Tables in the database:", rows);
//   }
// });

import { getAllPostSQL } from "../databaseControllers.js";

const getAllPosts = async (req, res) => {
  try {
    await getAllPostSQL((err, rows) => {
      if (err) throw new Error(err);
      if (rows) res.send(rows);
    });
  } catch (err) {
    console.log("get-all-posts controller :     ", err.message);
    return res.status(500).send(err);
  }
};

export default getAllPosts;
