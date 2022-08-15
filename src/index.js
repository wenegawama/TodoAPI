
const express = require("express")

const app = express()
app.use(express.json())

app.get("/todo", (request, response) => {
    return response.json({
        message: "Hello World",
        name: "Wenega",
        "surname":"Wama"
    })
})


app.listen(3333)
