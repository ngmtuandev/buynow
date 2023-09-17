const blogController = require("../controllers/blogController");
const express = require("express");
const verifyToken = require("../middeware/verifyToken");
const verifyAdmin = require("../middeware/verifyAdmin");
const router = express.Router();

router.post(
  "/create-blog",
  [verifyToken, verifyAdmin],
  blogController.createBlog
);
router.get("/blogs", blogController.getAllBlogs);
router.get("/:id", blogController.getOneBlog);
router.put("/:id", [verifyToken, verifyAdmin], blogController.updateBlog);
router.delete("/:id", [verifyToken, verifyAdmin], blogController.deleteBlog);

module.exports = router;
