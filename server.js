const express = require("express");

const app = express();

const port = process.env.port || 5000


app.get('/blog', (req,res) => {
    const posts = [
        {id: 1, title: "First Post", body: "The Body"},
        {id: 2, title: "Second Post", body: "The Body"},
        {id: 3, title: "Third Post", body: "The Body"}
    ];

    res.json(posts)
})

app.listen(port, () => console.log(`Server started on port: ${port}`));