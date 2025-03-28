const posts = require("../data/posts.js");


function index (req,res) {
	res.json(posts);
}

function show (req,res) {
	const id = parseInt(req.params.id);
	const searchedPost = posts.find( (post)=>{
	return post.id === id;
	});
	if(id >= 0 && id < posts.length){
		res.json(searchedPost);
		res.sendStatus(200);
	}else {
		res.status(404).json({
			"status": 404,
			"message": "Contenuto non Trovato"
		})
	}
	
}

function store (req,res) {
	res.send("Creiamo un nuovo post");
}

function update (req,res) {
	res.send("Modifichiamo totalmente un post");
}

function modify (req,res) {
	res.send("Modifichiamo parzialmente un post");
}

function destroy (req,res) {
	const id = parseInt(req.params.id);
	const idSearchedPost = posts.findIndex((post) => post.id === id);
	if(idSearchedPost >= 0){
		posts.splice(idSearchedPost, 1);
		res.sendStatus(200);
	}else {
		res.status(404).json({
			"status": 404,
			"message": "Contenuto non Trovato"
		})
	}
	console.log(posts);
}

module.exports = {
	index,
	show,
	store,
	update,
	modify,
	destroy
}
