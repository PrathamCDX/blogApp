import express from "express";
import getAllPosts from "../Controllers/getAllPostsController.js";
import getPostById from "../Controllers/getPostByIdController.js";
import postBlog from "../Controllers/postBlogController.js";
import deletePost from "../Controllers/deletePostController.js";
import editPost from "../Controllers/editPostController.js";
export const apiRouter = express.Router();

apiRouter.get("/posts", getAllPosts);
apiRouter.get("/posts/:id", getPostById);
apiRouter.post("/posts", postBlog);
apiRouter.delete("/posts/:id", deletePost);
apiRouter.put("/posts", editPost);
// authRouter.post("/addschool", addSchool);
