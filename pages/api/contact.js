const fs = require("fs")
const path = require("path")

export default function (req, res) {
	try {
		if (req.method === "POST") {
			const { email, name, message } = req.body

			if (
				!email ||
				!email.includes("@") ||
				!name ||
				name.trim() === "" ||
				!message ||
				message.trim() === ""
			) {
				res
					.status(422)
					.json({ status: "error", message: "Invalid input.", title: "Error" })
				return
			}

			const newMessage = {
				email,
				name,
				message
			}
			const filePath = path.join(process.cwd(), "user-feedback.json")
			if (!fs.existsSync(filePath)) {
				fs.writeFileSync(filePath, "[]")
			}
			const fileData = JSON.parse(fs.readFileSync(filePath))
			fs.writeFileSync(filePath, JSON.stringify(fileData.concat(newMessage)))
			res.status(201).json({
				title: "Success",
				status: "success",
				message: "Feedback received."
			})
		}
	} catch (err) {
		res
			.send(500)
			.json({ title: "Error", status: "error", message: err.message })
	}
}
