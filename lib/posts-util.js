import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsFolder = path.join(process.cwd(), "posts")

function getPostData(filename) {
	const filePath = path.join(postsFolder, filename)
	const fileContent = fs.readFileSync(filePath, "utf-8")
	const { data, content } = matter(fileContent)

	return {
		content,
		...data,
		slug: filename.replace(/\.md$/, "")
	}
}

export function getAllPosts() {
	const posts = fs.readdirSync(postsFolder)
	const editedPosts = posts.map(post => getPostData(post))
	return editedPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getFeaturedPosts() {
	return getAllPosts().filter(post => post.isFeatured)
}
