import React from "react"

import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../lib/posts-util"

export default function AllPostsComp({ posts }) {
	return <AllPosts posts={posts} />
}

export async function getStaticProps() {
	const posts = getAllPosts()
	return { props: { posts } }
}
