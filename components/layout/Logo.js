import React from "react"
import { GiTwirlyFlower } from "react-icons/gi"

import styles from "../../styles/navbar.module.css"

export default function Logo() {
	function handleTouch() {
		const logo = document.querySelector("." + styles.logo)
		logo.style.transform = "rotate(135deg) scale(1.5, 1.5)"
		setTimeout(() => {
			logo.style.transform = ""
		}, 600)
	}

	return (
		<div className={styles.logo} onTouchStart={handleTouch}>
			<svg width="0" height="0">
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop stopColor="var(--color-orange)" offset="0%" />
					<stop stopColor="var(--color-purple)" offset="100%" />
				</linearGradient>
			</svg>
			<GiTwirlyFlower
				style={{ stroke: "url(#gradient)", fill: "url(#gradient)" }}
			/>
		</div>
	)
}
