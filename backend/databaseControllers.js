import sqlite3 from "sqlite3";
// import { call } from "three/webgpu";
sqlite3.verbose();

// const db = new sqlite3.Database("./test.db", (err) => {
//   if (err) {
//     console.error("Error connecting to database:", err.message);
//   } else {
//     console.log("Connected to SQLite database");
//   }
// });

const createTableSQL = `
        CREATE TABLE IF NOT EXISTS blogs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(50),
            content VARCHAR(2100)
        );
    `;

const insertSQL = `INSERT INTO blogs (title, content) 
            VALUES (? , ?);
    `;
const lastRowSQL = `SELECT * FROM blogs WHERE id = last_insert_rowid();
    `;

const sqlRows = `SELECT * FROM blogs ;`;
const sqlRowById = `SELECT * FROM blogs WHERE id = ?`;
const deleteSQL = `DELETE FROM blogs WHERE id = ?;`;
const updateSQL = `UPDATE blogs
SET title = ?, content = ? 
WHERE id = ?;`;

export async function updatePostSQL(id, title, content, callback) {
  const db = await new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });
  console.log("update SQl ", id);
  db.all(updateSQL, [title, content, id], callback);
}

export async function getLastRowSQL() {
  const db = await new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });

  db.all(lastRowSQL, [], (err, rows) => {
    console.log(rows);
  });
}

export async function deleteBlogByIdSql(id, callback) {
  const db = await new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });
  console.log("delete ");

  await db.all(deleteSQL, [id], callback);
}

export async function insertBlogSQL(title, content, callback) {
  const db = await new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });

  await db.all(insertSQL, [title, content], callback);
}

export async function getAllPostSQL(callback) {
  const db = await new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });

  let rowsArray = await db.all(sqlRows, [], callback);

  console.log(rowsArray);
  return rowsArray;
}

export async function getAllPostByIdSQL(id, callback) {
  const db = new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });
  db.all(sqlRowById, [Number(id)], callback);
}

export function createTable() {
  const db = new sqlite3.Database("./test.db", (err) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  });

  db.run(createTableSQL, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log('Table "blogs" created or already exists.');
    }
  });
}
// const db = new sqlite3.Database("./test.db", (err) => {
//   if (err) {
//     console.error("Error connecting to database:", err.message);
//   } else {
//     console.log("Connected to SQLite database");
//   }
// });

// db.all(sqlRowById, [1], (err, rows) => {
//   console.log(rows);
// });

// getLastRowSQL();
