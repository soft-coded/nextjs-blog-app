import Image from "next/image"
import React from "react"
import Markdown from "react-markdown"
import { PrismLight as Syntax } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"

import styles from "../../styles/single-post.module.css"

Syntax.registerLanguage("js", js)

export default function PostDetailContent({ content, slug }) {
	const renderers = {
		paragraph(paragraph) {
			if (paragraph.node.children[0].type === "image") {
				const image = paragraph.node.children[0]
				return (
					<div className={styles["nested-image"]}>
						<Image
							src={`/images/posts/${slug}/${image.url}`}
							alt={image.alt}
							width={300}
							height={250}
						/>
					</div>
				)
			} else return <p>{paragraph.children}</p>
		},

		code(code) {
			return (
				<Syntax
					style={atomDark}
					language={code.language}
					children={code.value}
				/>
			)
		}
	}

	return (
		<article>
			<Markdown renderers={renderers}>{content}</Markdown>
		</article>
	)
}
