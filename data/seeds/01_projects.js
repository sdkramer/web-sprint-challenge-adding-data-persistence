

exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "Projects Database", description: "Make a database having project, resource and tasks tables.", completed: false },
    { name: "Apply for job", description: "Apply to job found on Linkedin.", completed: false },
    { name: "Outline video", description: "make an outline for next video.", completed: true },
	])
}
