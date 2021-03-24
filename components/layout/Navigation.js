import React, { useEffect } from "react"
import Link from "next/link"

import Logo from "./Logo"
import styles from "../../styles/navbar.module.css"
import innerWidth from "../../styles/inner-width.module.css"

export default function NavigationBar() {
	useEffect(() => {
		document.addEventListener("scroll", () => {
			const navbar = document.querySelector("." + styles["navbar-header"])
			if (pageYOffset > 0) navbar.classList.add(styles["nav-scroll"])
			else navbar.classList.remove(styles["nav-scroll"])
		})
	}, [])

	return (
		<header className={styles["navbar-header"]}>
			<nav className={`${innerWidth["inner-width"]} ${styles.navbar}`}>
				<ul>
					<li>
						<Link href="/">
							<a>
								<Logo />
							</a>
						</Link>
					</li>
					<li className={styles.links}>
						<Link href="/posts">Posts</Link>
						<Link href="/contact">Contact Me</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
