import React from "react"

import PostsGrid from "../posts/PostsGrid"
import styles from "../../styles/featured-posts.module.css"

export default function HomePageFeatured({ posts }) {
	return (
		<section className={styles.featured}>
			<h2 className="section-header">Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	)
}
