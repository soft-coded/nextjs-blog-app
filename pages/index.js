import React from "react"

import Top from "../components/homepage/HomePageTop"
import Featured from "../components/homepage/HomePageFeatured"
import { getFeaturedPosts } from "../lib/posts-util"

export default function HomePage({ posts }) {
	return (
		<>
			<Top />
			<Featured posts={posts} />
		</>
	)
}

export async function getStaticProps() {
	const posts = getFeaturedPosts()
	return {
		props: { posts }
	}
}
