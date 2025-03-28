const posts = require("../data/posts.js");


function index (req,res) {
	res.send("Visualizziamo tutti i post");
}

function show (req,res) {
	res.send("Visualizziamo il singolo post");
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
	res.send("Eliminiamo un post");
}

module.exports = {
	index,
	show,
	store,
	update,
	modify,
	destroy
}
