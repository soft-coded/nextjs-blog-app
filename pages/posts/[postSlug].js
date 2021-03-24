import React from "react"

import Header from "../../components/posts/PostDetailHeader"
import Content from "../../components/posts/PostDetailContent"
import styles from "../../styles/single-post.module.css"
import { getAllPosts } from "../../lib/posts-util"

export default function OnePost({ postData }) {
	return (
		<section className={styles.section}>
			<Header
				title={postData.title}
				image={`/images/posts/${postData.slug}/${postData.image}`}
			/>
			<Content content={postData.content} slug={postData.slug} />
		</section>
	)
}

export async function getStaticProps({ params }) {
	const posts = getAllPosts()

	return {
		props: {
			postData: posts.find(post => post.slug === params.postSlug),
			revalidate: 1800
		}
	}
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking"
	}
}
