const express = require("express")
const app = express()

const { port } = require("../../config.json")
const Port = port || 8080

app.get("/", (req, res) => {
	res.sendStatus(200)
})
				
app.listen(Port, () => {
	console.log(`Zero: Server Running in port ${Port}`)
}) 