import React from "react"

import styles from "../../styles/notification.module.css"

export default function Notification({ data }) {
	return (
		data && (
			<section className={styles.section}>
				<div
					className={styles.inner}
					style={{
						backgroundColor: data.status === "error" ? "#ff000075" : "#00800e9c"
					}}
				>
					<h2>{data.title}</h2>
					<p>{data.message}</p>
				</div>
			</section>
		)
	)
}
