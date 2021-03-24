import React from "react"
import Image from "next/image"

import styles from "../../styles/single-post.module.css"

export default function PostDetailHeader({ title, image }) {
	return (
		<header className={styles["post-header"]}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.image}>
				<Image src={image} alt={title} width={300} height={250} />
			</div>
		</header>
	)
}
