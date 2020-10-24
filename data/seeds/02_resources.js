
exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "Whiteboard", description: "Movable board for writing and drawing in classes and meetings."},
    { name: "Laptop", description: "Macbook pro."},
    { name: "Microphone", description: "Blue Yeti."},
	])
}

