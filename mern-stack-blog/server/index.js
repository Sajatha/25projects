

const express = require('express');
const cors = require('cors');
const blogRouter = require('./route/blog-route');


require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

app.use('/api', (req,res) => {
    res.send("Hello World");
});

app.listen(3000, () => console.log(`App is running at 3000`));
