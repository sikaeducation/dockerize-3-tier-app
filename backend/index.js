const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const { Model } = require("objection")
const database = require("./database-connection")
Model.knex(database)

class Dog extends Model {
  static tableName = "dog"
}

app.get("/dogs", (request, response) => {
  Dog.query().then(dogs => {
    response.json({ dogs })
  })
})

const { PORT } = process.env
app.listen(PORT || 3000, () => console.log(`Listening on port ${PORT}`))
