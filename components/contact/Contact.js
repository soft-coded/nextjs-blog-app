import React, { useRef, useState, useEffect } from "react"

import styles from "../../styles/contact-page.module.css"
import Notification from "./Notification"

export default function Contact() {
	const emailRef = useRef()
	const nameRef = useRef()
	const messageRef = useRef()
	const [notification, setNotification] = useState(null)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: nameRef.current.value,
					message: messageRef.current.value,
					email: emailRef.current.value
				})
			})
			if (!response.ok) throw new Error("Something went wrong.")

			const resData = await response.json()
			if (resData.status === "error") throw new Error(resData.message)

			setNotification(resData)
			emailRef.current.value = ""
			nameRef.current.value = ""
			messageRef.current.value = ""
		} catch (err) {
			setNotification({ title: "Error", status: "error", message: err.message })
		}
	}

	useEffect(() => {
		if (notification != null)
			setTimeout(() => {
				setNotification(null)
			}, 3000)
	}, [notification])

	return (
		<section className={styles.section}>
			<h1 className={`section-header ${styles.title}`}>
				Contact me for feedback
			</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.control}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" required ref={emailRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" required ref={nameRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor="message">Message</label>
					<textarea id="message" required rows="5" ref={messageRef} />
				</div>
				<div className={styles.control}>
					<button type="submit">Send Message</button>
				</div>
			</form>
			<Notification data={notification} />
		</section>
	)
}
