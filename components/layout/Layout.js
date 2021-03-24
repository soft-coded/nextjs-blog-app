import React from "react"
import Head from "next/head"

import Navigation from "./Navigation"
import styles from "../../styles/inner-width.module.css"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Next JS Blogs</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navigation />
			<main className={styles["inner-width"]}>{children}</main>
		</>
	)
}
