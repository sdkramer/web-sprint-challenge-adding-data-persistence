
exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{ description: "Standup meeting", notes: "Meet through zoom with team members", completed: true, project_id: 1},
    { description: "Send networking message", completed: false, project_id: 3},
    { description: "Install needed dependencies", notes: "Npm i knex, sqlite3", completed: true, project_id: 1},
    { description: "Mind-map", notes: "Create mindmap of process", completed: false, project_id: 2},
	])
}

