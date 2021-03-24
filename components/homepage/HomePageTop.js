import React from "react"
import Image from "next/image"

import styles from "../../styles/home-page-top.module.css"
import innerWidth from "../../styles/inner-width.module.css"

export default function HomePageTop() {
	return (
		<section className={`${innerWidth["inner-width"]} ${styles.container} `}>
			<div className={styles["image-div"]}>
				<Image
					src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
					alt=""
					width={300}
					height={350}
				/>
			</div>
			<h1>Hey there. I'm Shren.</h1>
			<p>
				I build stuff on the web, using myriad JavaScript libraries. Sometimes
				it works correctly.
			</p>
		</section>
	)
}
