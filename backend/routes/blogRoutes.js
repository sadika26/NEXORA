
const express = require("express");
const router = express.Router();
const BlogPost = require("../models/BlogPost");

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog posts" });
  }
});

// Create a blog post
router.post("/", async (req, res) => {
  try {
    const { title, excerpt, content, category } = req.body;

    if (!title || !excerpt || !content) {
      return res.status(400).json({
        message: "Title, excerpt and content are required",
      });
    }

    const post = await BlogPost.create({
      title,
      excerpt,
      content,
      category,
    });

    res.status(201).json({
      message: "Blog post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog post" });
  }
});

// Update a blog post
router.put("/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({
      message: "Blog post updated successfully",
      post,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to update blog post" });
  }
});

// Delete a blog post
router.delete("/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete blog post" });
  }
});

module.exports = router;