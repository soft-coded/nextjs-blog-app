import React from "react"
import { GiTwirlyFlower } from "react-icons/gi"

import styles from "../../styles/navbar.module.css"

export default function Logo() {
	return (
		<div className={styles.logo}>
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
