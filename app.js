const express = require("express");
const app = express();
const port = 4000;
const postsRouter = require("./routers/postsRouter.js");

app.use(express.static("./public"));
app.use("/posts", postsRouter);

//Starting Live Server
app.listen(port, ()=>{
	console.log(`Server Live nella Porta ${port}`);
});
