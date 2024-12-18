

const express = require('express');
const blogRouter = express.Router();

const { fetchListOfBlogs,
     deleteBlog, 
     updateBlog, 
     addNewBlog 
    } = require('../controller/blog-controller');

    blogRouter.get('./', fetchListOfBlogs);
    blogRouter.post('./add', addNewBlog);
    blogRouter.delete('./delete', deleteBlog);
    blogRouter.put('./update', updateBlog);


    module.exports = blogRouter;