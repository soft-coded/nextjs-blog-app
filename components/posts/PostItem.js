import React from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "../../styles/featured-posts.module.css"

export default function PostItem({ item }) {
	const formattedDate = new Date(item.date).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})

	return (
		<li className={styles["list-item"]}>
			<Link href={`/posts/${item.slug}`}>
				<a>
					<div className={styles.image}>
						<Image
							src={`/images/posts/${item.slug}/${item.image}`}
							alt={item.title}
							width={300}
							height={200}
							layout="responsive"
						/>
					</div>
					<div>
						<h3>{item.title}</h3>
						<time>{formattedDate}</time>
						<p>{item.info}</p>
					</div>
				</a>
			</Link>
		</li>
	)
}
