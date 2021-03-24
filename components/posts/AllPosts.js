import React from "react"

import PostsGrid from "./PostsGrid"
import styles from "../../styles/all-posts.module.css"

export default function AllPosts({ posts }) {
	return (
		<section className={styles["all-posts"]}>
			<h1 className={`section-header ${styles.header}`}>All Posts</h1>
			<PostsGrid posts={posts} />
		</section>
	)
}
