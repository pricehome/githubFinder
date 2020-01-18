class Github {
	constructor() {
		this.client_id = '2185a36932b3366eb937'
		this.client_secret = '1bebc81ea7461d70a21caeb00a7d6cf96827f522'
		// add properties to prevent getting all repos, limit to 5 newest
		this.repos_count = 5
		this.repos_sort = 'created: asc'
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		)

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
		)

		const profile = await profileResponse.json()

		const repos = await repoResponse.json()

		return {
			profile,
			repos
		}
	}
}
