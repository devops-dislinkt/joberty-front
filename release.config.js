module.exports = {
	branches: ["main", {"name": "dev", "prerelease": true}],
	repositoryUrl: "https://github.com/devops-dislinkt/joberty-front.git",
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		["@semantic-release/github", {
			assets: [
				{"path": "dist/*.gz", "label": "Build"},
			]
		}
		]
	]
}