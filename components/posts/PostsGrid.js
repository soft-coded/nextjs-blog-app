import React from "react"

import PostItem from "./PostItem"
import styles from "../../styles/featured-posts.module.css"

export default function PostsGrid({ posts }) {
	return (
		<ul className={styles.list}>
			{posts.map(post => (
				<PostItem key={post.slug} item={post} />
			))}
		</ul>
	)
}
