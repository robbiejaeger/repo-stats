const analysis = data => {
	let totals = data.map(author => {
		return {author: author.author.login, totalCommits: author.total}
	});

	return totals;
};

module.exports = analysis;